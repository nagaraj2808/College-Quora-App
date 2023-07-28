import express from "express";
import { createPost ,likePost,deletePost} from "../controllers/post.js";
import auth from '../middleware/index.js'
import { upload } from "../middleware/upload.js";
const router = express.Router();


router.post("/createPost",auth,upload.array('ImageData',4),createPost);
router.patch('/:id/like',auth,likePost);
router.delete('/:id/delete',auth,deletePost);

export default router;