import Auth from './components/Auth/auth'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/index'
import {useEffect, useState} from 'react';
import { getAllAnswer } from './actions/answer';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate,redirect } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Question from './components/Home/Question/Questions';
import Answer from './components/Home/Answer/Answer';
import { fetchAllQuestions } from './actions/question';
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
	);
}

export default App;
