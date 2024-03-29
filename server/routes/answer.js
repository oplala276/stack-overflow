import express from 'express';

import { postAnswer, deleteAns } from '../controllers/answer.js'

const router = express.Router();

router.patch('/post/:id', postAnswer)
router.patch('/delete/:id', deleteAns);

export default router;

