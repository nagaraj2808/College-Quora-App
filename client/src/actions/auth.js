import * as api from '../api/index.js';

export const signin = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    
    dispatch({type:'AUTH',data});
    navigate('/home');
  } catch (error) {
<<<<<<< HEAD

=======
    dispatch({type:'AUTH_ERROR',error})
>>>>>>> ea08f14 (version 1 bug fixed)
    console.log(error.response);
  }
};

export const signup = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    
    dispatch({type:'AUTH',data});
    navigate('/home');

  } catch (error) {
    console.log(error.response);
  }
};

export const Profile =(id)=>async(dispatch)=>{
  try {
    
    const {data}  = await api.profile(id);
    console.log("data: ");
    console.log(data);
    dispatch({ type: 'GET_PROFILE', payload: data });
  }
    
   catch (error) {
    console.log(error);
   }
    
}

export const follow = (data_) =>async(dispatch)=>{
   
  try {
    const {data} = await api.follow(data_);
    console.log("data");
    console.log(data);
    dispatch({type:'FOLLOW',payload:data});
  } catch (error) {
    console.log(error);
  }

}