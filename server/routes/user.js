import express from "express";
import { signIn,signUp,profile, follow } from "../controllers/user.js";
import auth from '../middleware/index.js'
const router = express.Router();

router.post("/signin",signIn);
router.post("/signup",signUp);

router.get("/profile/:id",profile);
router.patch("/profile/:id/follow",auth,follow);
export default router;