import express from 'express';
import Question from '../models/question.js';
import _ from 'lodash';
import UserModal from '../models/user.js';

export const createQuestion = async (req, res) => {

    const id = req?.userId;
    const question = _.lowerCase(req.body.title);
    try {
        const oldQuestion = await UserModal.findOne({ question: question });
        if (oldQuestion) res.status(400).json({ message: "Question already exist" });
        const newQuestion = new Question({ author: id, question: question, createdAt: new Date().toDateString() });

        const data = await newQuestion.save()
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

export const fetchQuestionByAuthor = async (req, res) => {
    const authorId = req.authorId;
    try {
        const questions = await Question.find({ creatorId: authorId })

        res.status(200).json(questions)
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllQuestions = async (req, res) => {
    try {
        const data = await Question.find({})

        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

export const fetchQuestion = async (req, res) => {

    try {
        const question = await Question.find({ question: req.body.question });

        res.status(200).json(question)
    } catch (error) {
        console.log(error);
    }
}
