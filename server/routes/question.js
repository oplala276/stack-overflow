import express from 'express'
import multer from 'multer'
import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/questions.js'
import auth from '../middlewares/auth.js'

const router = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/ask',auth, upload.single('videoFile'), AskQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id', auth, deleteQuestion);
router.patch('/vote/:id', auth,  voteQuestion)

export default router

