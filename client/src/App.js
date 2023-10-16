import Auth from './components/Auth/auth'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/index'
import {useEffect, useState} from 'react';
import { getAllAnswer } from './actions/answer';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate,redirect } from 'react-router-dom';

=======
import { BrowserRouter, Routes, Route, Navigate,redirect, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
>>>>>>> ea08f14 (version 1 bug fixed)
import Profile from './components/Profile/Profile';
import Question from './components/Home/Question/Questions';
import Answer from './components/Home/Answer/Answer';
import { fetchAllQuestions } from './actions/question';
<<<<<<< HEAD
function App() {

	const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch = useDispatch();
	useEffect(()=>{
		console.log("use effect is called in app component to fetch user");
		setUser(JSON.parse(localStorage.getItem('profile')))
  
		dispatch(getAllAnswer());
		dispatch(fetchAllQuestions());
	},[])
	
	return (
		<>
		<BrowserRouter>
		<NavBar/>
		
		  
		  <Routes>
			<Route path='/' exact Component ={()=>(user? <Navigate to = {"/home"} /> : <Navigate to ={"/auth"}/>)} />
		  	<Route path = '/auth' exact element={<Auth />} />
			<Route path="/home" exact element={ <Home />}/>
			<Route path="/user/profile/:id" exact element={<Profile/>}/>
			<Route path="/answer" exact element={<Question />}/>
			<Route path="/answer/:id" exact element={<Answer/>}/>
			
		  </Routes>
		
	  </BrowserRouter>
		</>
=======
import UserContextProvider from './context/UserContextProvider';
import AnswerLoader from './components/Home/Answer/AnswerLoader';
function App() {

	

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />} >
				<Route path='' element={<Home />}/>
				<Route path='home' element={<Home />} />
				<Route path='auth'  element={<Auth />}/>
				<Route path="user/profile/:id" exact element={<Profile/>}/>
				<Route path="answer" exact element={<Question />} />
				<Route path="answer/:id" exact element={<Answer/>}/>
			</Route>
		)
	)
	return (
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
>>>>>>> ea08f14 (version 1 bug fixed)
	);
}

export default App;
