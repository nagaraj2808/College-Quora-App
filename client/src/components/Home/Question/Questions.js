import { Button, Card, CardActions, Typography, Stack, Box } from "@mui/material";


import { ANSWER } from "../../../constants/actionType";
import React, { useEffect } from "react";
// import {Modal} from "@mui/material";
import Modal from '../Add/Modal'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuestions } from '../../../actions/question';
import Question from "./Question";
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     maxWidth: "700px",
//     maxHeight: "700px",
//     bgcolor: 'background.paper',

//     boxShadow: 24,
//     p: 4,
// };

// <Modal
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                 >
//                     <Box sx={style} >
//                         <AddAnswer closeTerminal={handleClose} type={ANSWER} question={clickedQuestion}/>
//                     </Box>
//                 </Modal>
function Questions(props) {
    // const questions = ["Question number 1", "Question number 2"];
    const dispatch = useDispatch();
    const { questions, isLoading } = useSelector((state) => { return state.question });
    



    const [open, setOpen] = React.useState(false);
    const [clickedQuestion, setClickedQuestion] = React.useState({});
    const handleAnswer = (e) => {
        const name = e.target.name;
        setClickedQuestion(questions[name]);
        console.log("IN Question while setting clicked question");
        console.log(clickedQuestion);
        setOpen(true);
    }
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else {
        return (
            <>

                {open && <Modal closeModal={setOpen} question={clickedQuestion} type={ANSWER} />}
                <Stack direction='column' spacing={2} alignItems='center' paddingTop={5}>
                    <Box sx={{ width: '60%' }}>

                        {questions.map((question, index) => (
                            
                            <Question question = {question.question} name = {index} creatorId={question.creatorId} handleAnswer = {handleAnswer} key={index}/>
                        ))}
                    </Box>
                </Stack>
            </>
        );
    }
}

export default Questions;
