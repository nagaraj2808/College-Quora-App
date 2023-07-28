const Actions = {
  postDelete:'postDelete',
  answerDelete:'answerDelete',
  questionDelete:'questionDelete'
}

const profileReducer = (state = { profile: {answers:[],email:"",followers:[],following:[],id:"",name:"",posts:[],questions:[]}, isLoading: true }, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      
      return {
        ...state,
        profile: { ...action.payload },
        isLoading: false,
      };
      
    case 'FOLLOW': 
    console.log(state);
      return {
        ...state,
        isLoading: false,
        profile: {
          ...state.profile,
          followers: action.payload.followers
        }
      };
      case Actions.postDelete: return {
        ...state,
        profile:{
          ...state.profile,
          posts:state.profile.posts.filter((post)=>post._id !== action.payload.id)}
    };
    case Actions.answerDelete: return {
        ...state,
        profile:{
          ...state.profile,
          answers:state.profile.answers.filter((answer)=>answer._id !== action.payload.id)
        }
    }
    default:
      return state;
  }
};

export default profileReducer;
