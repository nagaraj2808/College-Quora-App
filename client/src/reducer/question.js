import { GET_QUESTIONS, GET_QUESTION, POST_QUESTION, GET_QUESTION_AUTHID } from '../constants/actionType';
const answerReducer = (state = { isLoading: true, questions: [] }, action) => {
    switch (action.type) {
        case 'START':
            return{
                ...state,
                isLoading:true
            };
        case 'END':
            return{
                ...state,
                isLoading:false
            };

        case GET_QUESTIONS:
            
            return {
                ...state,
                questions:action.payload
                
            };
        case GET_QUESTION:   return { ...state, questions: [action.payload] };
        case POST_QUESTION: return {...state,questions:[action.payload,...state.questions]};
        case GET_QUESTION_AUTHID: return {...state,questions:[action.payload]};
        
        default:
            return state;
    }
};

export default answerReducer;

