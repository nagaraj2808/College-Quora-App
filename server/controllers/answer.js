import Answer from '../models/answer.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
<<<<<<< HEAD
=======
import fs from 'fs'
>>>>>>> ea08f14 (version 1 bug fixed)
dotenv.config();

export const createAnswer = async (req, res) => {

    const id = req?.userId;


    const answer = req.body;


    const url = process.env.SERVER_CONNECTION;
    const filenames = req.files.map((file) => url + file.path);
    const newAnswer = new Answer({ ...answer, creatorId: id, answer: answer.title, createdAt: new Date().toISOString(), images: filenames });
    try {
        const data = await newAnswer.save()
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
}

export const fetchAllAnswer = async (req, res) => {
    try {
        // console.log("Request recieved from fetch all answer");
        const data = await Answer.find();

        //console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

export const likeAnswer = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }
    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No answer with id: ${id}`);

        const answer = await Answer.findById(id);
        if (!answer) return res.status(404).send(`No answer with id: ${id}`);

        const index = answer.likes.findIndex((id) => id === String(req.userId));

        if (index === -1) {
            answer.likes.push(req.userId);
        } else {
            answer.likes = answer.likes.filter((id) => id !== String(req.userId));
        }

        const updatedAnswer = await Answer.findByIdAndUpdate(id, answer, { new: true });

        res.status(200).json(updatedAnswer);
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        if (!req.userId) {
            return res.json({ message: "Unauthenticated" });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

<<<<<<< HEAD
        await Answer.findByIdAndRemove(id);
=======
        const deletedAnswer = await Answer.findByIdAndDelete(id);
        console.log(deletedAnswer.images);
        deletedAnswer.images.forEach(imageLink => {
            
            const fileName = imageLink.match(/\/([^/]+)$/)[1]; 
            // console.log(fileName);
            fs.unlink(fileName,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        });
>>>>>>> ea08f14 (version 1 bug fixed)

        res.status(200).json({ id: id });
    } catch (error) {
        console.log(error);
    }
}