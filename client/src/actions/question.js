import { GET_QUESTIONS, GET_QUESTION, POST_QUESTION, GET_QUESTION_AUTHID } from '../constants/actionType';
import * as api from '../api/index.js';

export const createQuestion = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(formData);
    dispatch({type:POST_QUESTION,payload:data});
    navigate('/answer');
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = () => async(dispatch)=>{
  try {
    dispatch({type:'START'});
    const {data} = await api.fetchAllQuestions();    
    dispatch({type:GET_QUESTIONS,payload:data})
    dispatch({type:'END'})
  } catch (error) {
    console.log(error);
  }
}

export const fetchQuestionByAuthor  = (authorId) => async(dispatch)=>{
    try {
      dispatch({type:'START_LOADING'});
      const {data} = await api.fetchQuestionByAuthor(authorId);
      dispatch({type:GET_QUESTION_AUTHID,payload:data})
      dispatch({type:'END_LOADING'})
    } catch (error) {
      console.log(error);
    }
}

export const fetchQuestion = (question) => async(dispatch)=>{
    try {
      dispatch({type:'START_LOADING'});
      const {data} = await api.fetchQuestion(question);
      dispatch({type:GET_QUESTION,payload:data})
      dispatch({type:'END_LOADING'})
    } catch (error) {
      console.log(error);
    }
  }