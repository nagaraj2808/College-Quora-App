import express from "express";
import { createQuestion,
    fetchAllQuestions,
    fetchQuestionByAuthor,
    fetchQuestion 
} from "../controllers/question.js";
import auth from '../middleware/index.js'

const router = express.Router();


router.post("/createQuestion",auth,createQuestion);
router.get('/fetchAllQuestions',fetchAllQuestions);
router.get('/fetchQuestionByAuthor',fetchQuestionByAuthor);
router.get('/fetchQuestion',fetchQuestion);

export default router;