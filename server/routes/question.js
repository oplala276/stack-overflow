import express from 'express'
import {AskQuestion} from '../controllers/questions.js'

const router = express();

router.post('/Ask', AskQuestion);

export default router

