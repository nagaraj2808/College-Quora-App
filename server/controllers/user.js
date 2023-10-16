import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import UserModal from '../models/user.js'
import Post from "../models/post.js";
import Answer from '../models/answer.js'
import Question from '../models/question.js'
import _ from 'lodash';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
const secret = process.env.SECRET;

export const signIn = async(req,res)=>{
  const { email, password } = req.body;
  
  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
    
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
}


export const signUp = async (req, res) => {

  
  const { email, password, firstName, lastName } = req.body;
    try {

      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({ email, password: hashedPassword, name: _.startCase(`${firstName} ${lastName}`) });
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
      
      res.status(201).json({ result, token });
    } catch (error) {
<<<<<<< HEAD
      res.status(500).json({ message: "Something went wrong" });
=======

      res.status(500).json({ message: "Something went wrong",error });
>>>>>>> ea08f14 (version 1 bug fixed)
      
    }
  };

  export const profile = async(req,res)=>{
    const userId = req.params.id;

    console.log("request recieved for profile");
    try {
      
      const userProfile = await UserModal.findById(userId); 
      
      
      const posts = await Post.find({creatorId:userId}).exec();
      
      const answers = await Answer.find({creatorId:userId});

      const questions = await Question.find({creatorId:userId});

      
      delete userProfile.password;
      
      const data = {
        ...userProfile.toObject(),
        posts:posts,
        answers:answers,
        questions:questions
      }

      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    
  }

  export const follow = async(req,res)=>{
    
    
    const userId = req.params.id;
    const myName = req.body.name;
    const myId = req.userId;


    
    
    if(!myId)res.status(401).json({message: "Unauthenticated"})
    
    try {
    
      if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).json({message:`No user with id: ${userId}`});
      
      
      const user = await UserModal.findById(userId);

      const myProfile = await UserModal.findById(myId);
      if(!user) res.status(404).json({message:`No user with id: ${userId}`});

      const index = user.followers.findIndex((follower) => follower.id === String(myId));

      if(index == -1){
        user.followers.push({id:myId,name:myName});
        myProfile.following.push({id:userId,name:user.name});
      }else{
        user.followers = user.followers.filter((follower)=>follower.id!==myId);
        myProfile.following = myProfile.following.filter(follower=>follower.id !== userId);
      }

      const updatedUser = await UserModal.findByIdAndUpdate(userId,user,{new:true});
      await UserModal.findByIdAndUpdate(myId,myProfile,{new:true});
      console.log(updatedUser);
      
      res.status(200).json(updatedUser);

    } catch (error) {
      res.status(500).json({message:error.message});
    }
  }
  