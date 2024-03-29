
import { Box} from "@mui/material";
import Answers from './Answer/Answer'

import TaskBar from "./TaskBar";
import {Stack} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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