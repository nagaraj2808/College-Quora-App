import { combineReducers } from 'redux';
import question from './question';
import post from './post';
import auth from './auth';
import profile from './profile';
import answers from './answer';
export const reducers = combineReducers({question,  post,profile,auth,answers });