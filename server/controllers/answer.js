import mongoose, { now } from "mongoose"
import Questions from "../models/question.js"

export const postAnswer = async(req, res) => {
    const { id: _id } = req.params
    const { noOfAnswers, answerBody, userAnswered } = req.body;
    const userId = req.userId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send("question unavailbale..")
    }    
    updateNoOfQuestions(_id, noOfAnswers);
    try {
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $addToSet: { answer: [{ answerBody, userAnswered, userId }] } })
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json("error in updating")
    }
}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate(_id, {
            $set:{noOfAnswers:noOfAnswers},
        })
    } catch (error) {
        console.log(error)
    }
}