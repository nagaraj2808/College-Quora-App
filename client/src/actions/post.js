import * as api from '../api/index.js';
import {CREATE_POST, LIKE_POST,DELETE_POST} from '../constants/actionType.js'
import { Profile } from './auth.js';
export const createPost = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.createPost(formData);
    console.log(data);
    dispatch({type:CREATE_POST,payload:data});
    dispatch(Profile(data.creatorId));
    navigate(`/user/profile/${data.creatorId}`)
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async(dispatch)=>{
  try {
    const {data} = await api.likePost(id);
    dispatch({type:LIKE_POST,payload:data})
  } catch (error) {
    console.log(error);
  }
}

export const deletePost =(id) => async(dispatch) =>{
  try {
    const {data} = await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: data });
    
  } catch (error) {
    console.log(error);
  }
}
