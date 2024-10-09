import { Router } from "express";
import {
  registerUser,
  signin,
  getUserProfile,
  findUser,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/signup", registerUser);
router.post("/signin", signin);
router.get("/user/profile", getUserProfile);
router.get("/user/finduser", findUser);

export default router;
