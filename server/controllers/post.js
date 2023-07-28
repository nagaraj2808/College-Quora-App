import Post from '../models/post.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
export const createPost = async (req, res) => {
    const id = req?.userId;
    
    
    const post = req.body;
    
    const url = process.env.SERVER_CONNECTION;
    const filenames = req.files.map((file)=>url + file.path);
   
   
    const newPost = new Post({ creatorId: id,creatorName:post.creatorName, createdAt: new Date().toISOString(), message: post.title, images:filenames });
    try {
        const data = await newPost.save()
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
}

export const fetchPostByAuthor = async (req, res) => {
    const authorId = req.id;
    try {
        const posts = await Post.find({ _id: authorId }).exec();

        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
    }
}


export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }
    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with id: ${id}`);

        const post = await Post.findById(id);
        if (!post) return res.status(404).send(`No post with id: ${id}`);

        const index = post.likes.findIndex((id) => id === String(req.userId));

        if (index === -1) {
            post.likes.push(req.userId);
        } else {
            post.likes = post.likes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        if (!req.userId) {
            return res.json({ message: "Unauthenticated" });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        await Post.findByIdAndRemove(id);

        res.status(200).json({ id: id });
    } catch (error) {
        console.log(error);
    }
}