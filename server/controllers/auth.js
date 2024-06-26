import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import user from '../models/auth.js'
// import trackLogin from '../middlewares/trackLogin.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const loginInfo = req.loginInfo;
    try {
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            return res.status(404).json({ message: "User already exist." })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await user.create({ name, email, password: hashedPassword })
        newUser.loginHistory.push(loginInfo);
        await newUser.save()
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: newUser, token });
    } catch (error) {
        res.status(500).json("Something went wrong....")
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const loginInfo = req.loginInfo;
    // const loginOS = loginInfo.os;
    // console.log(loginOS)
    try {
        const existingUser = await user.findOne({ email });
    if (!existingUser) {
        res.status(404).json({message:"User don't exist"})
        }
    if (!isPasswordCrt) {
        res.status(400).json({message:"Invalid credential"})
    }
    existingUser.loginHistory.push(loginInfo);
    await existingUser.save();
    const isPasswordCrt = await bcrypt.compare(password, existingUser.password);
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
    res.status(200).json({result:existingUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong....")
    }
    
}