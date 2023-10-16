import axios from "axios";

<<<<<<< HEAD
const API = axios.create({ baseURL: 'http://localhost:4000' });
=======
const API = axios.create({ baseURL: 'http://192.168.248.250:4000' });
>>>>>>> ea08f14 (version 1 bug fixed)
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


export const profile = (id) => API.get(`/user/profile/${id}`);
export const follow = (data) => API.patch(`/user/profile/${data.id}/follow`,data);

export const createPost = (newPost) => API.post('/post/createPost', newPost);
export const getPosts = () => API.get('/post/getPosts');
export const likePost = (id) =>API.patch(`/post/${id}/like`);
export const deletePost = (id) => API.delete(`/post/${id}/delete`);

export const createQuestion = (formData) => API.post('/question/createQuestion',formData);
export const fetchAllQuestions =() => API.get('/question/fetchAllQuestions');
export const fetchQuestionByAuthor =(authorId) => API.get('/question/fetchQuestionByAuthor',authorId);
export const fetchQuestion =(question) => API.get('/question/fetchQuestion',question);

export const createAnswer = (formData) =>API.post('/answer/createAnswer',formData);
export const fetchAllAnswers = () => API.get('/answer/fetchAllAnswer');
export const likeAnswer = (id) => API.patch(`/answer/${id}/like`);
export const deleteAnswer = (id) => API.delete(`answer/${id}/delete`);