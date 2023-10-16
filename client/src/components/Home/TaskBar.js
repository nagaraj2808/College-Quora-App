import { Container, Box, Toolbar, Button, ButtonGroup, Paper } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PostAddSharpIcon from "@mui/icons-material/PostAddSharp";
import RateReviewSharpIcon from "@mui/icons-material/RateReviewSharp";
import React from "react";
import Modal from './Add/Modal';
import {POST,ANSWER,QUESTION} from '../../constants/actionType'
import { useNavigate } from "react-router-dom";

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
function TaskBar() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [type,setType] = React.useState(QUESTION);
    const handleOpen = (e) => {
        setType(e.target.name);
        setOpen(true);
    }
    
    const handleClose = (e) => {
        setOpen(false);
    }

    const handleAnswer = () =>{
        navigate('/answer');
    }

    
    return (
        <Container >
<<<<<<< HEAD
            <Box justifyContent="center" padding={2}>
=======
            <Box justifyContent="center" >
>>>>>>> ea08f14 (version 1 bug fixed)
                <Toolbar>
                    
                    <ButtonGroup variant="outlined" color="primary" fullWidth={true}  sx={{boxShadow:2}} >
                        <Button onClick={handleOpen} name = {QUESTION} endIcon={<QuestionMarkIcon />}>Ask</Button>
                        <Button onClick={handleAnswer}  name={ANSWER} endIcon={<RateReviewSharpIcon />}>Answer</Button>
                        <Button onClick={handleOpen} name = {POST} endIcon={<PostAddSharpIcon />}>Post</Button>
                    </ButtonGroup>

                    
                    {open && <Modal closeModal={setOpen} type={type}/>}
                </Toolbar>
                
            </Box>
        </Container>
    )
}

export default TaskBar;