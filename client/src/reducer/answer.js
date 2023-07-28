
import { GET_ANSWERS, GET_ANSWER, POST_ANSWER, UPDATE_ANSWER, DELETE_ANSWER,LIKE_ANSWER } from '../constants/actionType';
const answerReducer = (state = { isLoading: true, answers: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case GET_ANSWERS:
            return {
                ...state,
                answers:action.payload
                
            };
        case GET_ANSWER: return null;
        case POST_ANSWER:   return { ...state, answers: [action.payload,...state.answers] };
        case UPDATE_ANSWER: return null;
        case DELETE_ANSWER: return {
            ...state,
            answers: state.answers.filter((answer)=>answer._id !== action.payload.id)
        };
        case LIKE_ANSWER: 
        return{
            ...state,
            answers:state.answers.map((answer)=>(answer._id === action.payload._id?action.payload:answer))
        }
        default:
            return state;
    }
};

export default answerReducer;

