import express from 'express'
import {AskQuestion, getAllQuestions, deleteQuestion} from '../controllers/questions.js'

const router = express();

router.post('/Ask', AskQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', deleteQuestion);

export default router

