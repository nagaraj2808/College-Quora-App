import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js'
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use('/uploads',express.static('uploads/'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(cors());



app.use('/user',userRoutes);
app.use('/post',postRoutes);
app.use('/question',questionRoutes);
app.use('/answer',answerRoutes);


const CONNECTION_URL = process.env.DATABASE_CONNECTION;
mongoose.connect(CONNECTION_URL)
.then(function(){
    app.listen(process.env.SERVER_PORT,() => console.log("server started on port " + process.env.SERVER_PORT));
})
.catch((err) => console.log(err.message + "\nMongo db connection error"));

