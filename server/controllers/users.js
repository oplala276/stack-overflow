import mongoose from "mongoose";
import nodemailer from 'nodemailer'
import dotenv from "dotenv";
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler'
import users from "../models/auth.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.TRANS_HOST,
  port: process.env.TRANS_PORT,
  secure: false, 
  auth: {
    user: process.env.TRANS_USER,
    pass: process.env.TRANS_PASS,
  },
});

const generatePassword = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const changePassword = async (email, newPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 12);    
    console.log(hashedPassword);
    console.log(email);
    const updatedProfile = await users.findOneAndUpdate(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    } catch (error) {
    console.log(error)
  }
}
//fetch all users controller
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    const allUserDetails = [];
    allUsers.forEach((user) => {
      allUserDetails.push({
        _id: user._id,
        name: user.name,
        about: user.about,
        tags: user.tags,
        joinedOn: user.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update profile controller
export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    const updatedProfile = await users.findByIdAndUpdate(
      _id,
      { $set: { name: name, about: about, tags: tags } },
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

//password reset controller
export const sendEMail = expressAsyncHandler(async (req, res) => {
  const { email, message } = req.body;
  const newPassword = generatePassword();
  var mailOptions = {
    from: process.env.TRANS_HOST,
    to: email,
    subject: "Reset Password",
    text: `Don't worry your new password is ${newPassword}`,
    html: `Don't worry your new password is <b>${newPassword}</b>`
  };
  transporter.sendMail(mailOptions, async function(error, info){
    if(error) {
      console.log(error)
    }
    console.log("sent");
    changePassword(email, newPassword);
  })
})

//user authentication OTP
export const sendOTP = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  const { userOTP } = req.body;

  var mailOptions = {
    from: process.env.TRANS_HOST,
    to: email,
    subject: "Authentication OTP",
    text: `Your four digit authenication OTP is ${userOTP}, valid for 5 minutes only.`,
    html: `Your four digit authenication OTP is <b>${userOTP}</b>, <br/>valid for 5 minutes only.`
  };
  transporter.sendMail(mailOptions, async function(error, info){
    if(error) {
      console.log(error)
    } else {
      console.log("sent");
    }
  })
})

