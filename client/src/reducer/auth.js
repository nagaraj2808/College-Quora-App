<<<<<<< HEAD
=======


>>>>>>> ea08f14 (version 1 bug fixed)
const authReducer = (state = { authData: null}, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
<<<<<<< HEAD
=======
      
>>>>>>> ea08f14 (version 1 bug fixed)

      return { ...state, authData: action.data, loading: false, errors: null };
    case 'LOGOUT':
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
<<<<<<< HEAD
    
=======
    case 'AUTH_ERROR':
      return {...state,loading:false,errors:action.data};
>>>>>>> ea08f14 (version 1 bug fixed)
    default:
      return {...state,authData:null};
  }
};

export default authReducer;