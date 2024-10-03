import { Router } from "express";
import {
  registerUser,
  signin,
  getUserProfile,
} from "../controllers/user.controller.js";

const router = Router();

router.post('/signup',registerUser);
router.post('/signin',signin);
router.get("/user/profile", getUserProfile);


export default router;