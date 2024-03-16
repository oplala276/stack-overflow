import express from 'express'
import {AskQuestion} from '../controllers/questions.js'
import { getAllQuestions } from '../controllers/questions.js';

const router = express();

router.post('/Ask', AskQuestion);
router.get('/get', getAllQuestions)

export default router

