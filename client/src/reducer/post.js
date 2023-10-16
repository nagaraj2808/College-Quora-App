import {GET_POST,GET_POSTS,CREATE_POST, LIKE_POST, DELETE_POST} from '../constants/actionType.js'
const postReducer = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
         
        case GET_POST:return { ...state, posts: [...state.posts, action.payload] };
        case GET_POSTS:return {...state,posts:[...state.posts,action.payload]};
        case CREATE_POST: return {...state,posts:[action.payload.data]};
        case DELETE_POST: 
        
        return {
            ...state,
            posts:state.posts.filter((post)=>post._id !== action.payload)
        };
        case LIKE_POST: 
        return{
            ...state,
            posts:state.posts.map((post)=>(post._id === action.payload._id?action.payload:post))
        }
        default:return state;
    }

    
};

export default postReducer;