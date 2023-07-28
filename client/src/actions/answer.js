import * as api from '../api/index.js';
import {GET_ANSWER,POST_ANSWER,UPDATE_ANSWER,DELETE_ANSWER,GET_ANSWERS, LIKE_ANSWER} from '../constants/actionType.js'
export const createAnswer = (formData,navigate) => async (dispatch) => {
  try {
    dispatch({type:'START'});
    const { data } = await api.createAnswer(formData); 
    dispatch({type:POST_ANSWER, payload:data});

    dispatch({type:'END'});
    // console.log(data);   
    navigate("/home")
  } catch (error) {
    console.log(error);
  }
};

export const getAllAnswer = () =>  async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'});
        const { data } = await api.fetchAllAnswers(); 
        dispatch({type:GET_ANSWERS, payload:data});
        dispatch({type:'END_LOADING'});
        
    } catch (error) {
        console.log(error);
    }
}

export const likeAnswer = (id) => async(dispatch)=>{
  try { 
    const {data} = await api.likeAnswer(id);
    dispatch({type:LIKE_ANSWER,payload:data})
  } catch (error) {
    console.log(error);
  }
}

export const deleteAnswer = (id) => async(dispatch) =>{
  try {
    const {data} = await api.deleteAnswer(id);
    dispatch({type: DELETE_ANSWER,payload:data});
  } catch (error) {
    console.log(error);
  }
}