import express from "express";
import {signup, login} from "../controllers/auth.js"
import { getAllUsers, updateProfile, sendEMail, sendOTP } from "../controllers/users.js";
import auth from "../middlewares/auth.js";
import trackLogin from "../middlewares/trackLogin.js";

const router = express.Router();

router.post('/signup', trackLogin, signup)
router.post('/login', trackLogin, login)

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

router.put("/account-recovery", sendEMail);
router.post("/authenticate", sendOTP);

export default router
