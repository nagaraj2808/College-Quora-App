import express from "express";
import {createAnswer,fetchAllAnswer,likeAnswer,deleteAnswer} from '../controllers/answer.js'
import auth from '../middleware/index.js'
import { upload } from "../middleware/upload.js";
const router = express.Router();
router.post("/createAnswer",auth,upload.array('ImageData',4),createAnswer);
router.get('/fetchAllAnswer',fetchAllAnswer);
router.patch('/:id/like',auth,likeAnswer);
router.delete('/:id/delete',auth,deleteAnswer);
export default router;