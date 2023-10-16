
import { Box} from "@mui/material";
import Answers from './Answer/Answer'

import TaskBar from "./TaskBar";
import {Stack} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { useEffect, useReducer, useState } from "react";
import {getAllAnswer} from '../../actions/answer'
import { useNavigate } from "react-router-dom";
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {answers,isLoading} = useSelector(state => state.answers);
  
  // const [hasFetched,setHasFetched] = useState(false);
  // useEffect(()=>{
  //   if (!hasFetched) {
      
  //     dispatch(getAllAnswer());
  //     setHasFetched(true);
  //     console.log("use effect in index.js aka home after getAll answer");
  //   }
      
  // },[dispatch])
  
  
  const user = JSON.parse(localStorage.getItem('profile'));
  return (<>
    
    {user &&<TaskBar />}
    {isLoading && <h1>Loading</h1>}
    {!isLoading && <Stack direction='column'   spacing={2} alignItems='center' style={{marginTop:'20px'}}>
    <Box sx={{width:'70%'}} >
=======
import { useContext, useEffect, useReducer, useState } from "react";
import {getAllAnswer} from '../../actions/answer'
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import CircularProgress from '@mui/material/CircularProgress';
export default function Home() {
  const dispatch = useDispatch();

  const {answers,isLoading} = useSelector(state => state.answers);
  
	
	useEffect(()=>{
		dispatch(getAllAnswer());		
	},[])
  
  
  const {user} = useContext(UserContext);
  return (<>
    
   
    {isLoading && <div style={{display:'flex',height:'70vh',justifyContent:'center'}}>
      <CircularProgress sx={{mt:'20%'}}/>
    </div>}
    {!isLoading && <Stack direction='column'   spacing={2} alignItems='center' style={{marginTop:'20px'}}>
    <Box sx={{width:'70%'}}  >
>>>>>>> ea08f14 (version 1 bug fixed)
    
    {answers.map((answer) => (
        
            <Answers 
              key={answer._id}
              _id = {answer._id}
              images={answer.images}
              author={answer.creatorName}
              authorId={answer.creatorId}
              question={answer.question}
              answer={answer.answer}
              createdAt = {answer.createdAt}
              likes={answer.likes}
              
            />
          ))}
    </Box>
    </Stack>}
    

  </>
  );
}