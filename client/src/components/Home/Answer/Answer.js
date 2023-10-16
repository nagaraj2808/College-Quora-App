
import { Avatar, Card, CardHeader, Paper, Typography } from "@mui/material";
import Footer from './Footer'
import { stringAvatar } from "./userIcon";
import moment from 'moment';
// import { ImageList,ImageListItem} from "@mui/material";
import ImageList from "../Add/ImageList";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import Link from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Profile } from "../../../actions/auth";
function Answer(props) {
    const navigate = useNavigate();
    const images = [...props?.images];
    const ans_concat = props.answer.substring(0, 140);
    const [answer, setAnswer] = useState(ans_concat);
    const [show, setShow] = useState(props.answer.length > 140);
    const dispatch = useDispatch();
    const showMore = () => {
        setAnswer(props.answer);
        setShow(prev => !prev);
    }
    const showLess = () => {
        setAnswer(ans_concat);
        setShow(prev => !prev);
    }

    const userProfile =() =>{
        dispatch(Profile(props.authorId))
        navigate(`/user/profile/${props.authorId}`)
    }

    return (
        <Paper elevation={4} >

            <Card variant="outlined" style={{ marginBottom: '20px' }} >
                <CardHeader
                    avatar={<Avatar {...stringAvatar(props.author)} />}
                    title={<>
                    
                            <Typography 
                            variant="subtitle1" 
                            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' ,cursor:"pointer"} }}
                            onClick={userProfile}
                            >
                                {props.author}
                            </Typography>
                            <Typography variant='body2'>
                                {moment(props.createdAt).fromNow()}
                            </Typography>
                        </>
                    }

                />

                <Typography variant="body1" fontWeight='bold' padding='10px' >

                    {props.question}

                </Typography>


                <Typography variant="body1" padding='10px' sx={{ whiteSpace: 'pre-line' }} >
                    {answer}
                </Typography>
                {(props.answer.length > 140) && (show ? <Typography padding='10px' color="primary" onClick={showMore}>show more</Typography> : <Typography color="primary" padding='10px' onClick={showLess}>show less</Typography>)}

                <ImageList images={images} enableEditing={false} />
                <Footer likes={props.likes} id = {props._id} creatorId = {props.authorId} onDelete = {props?.onDelete}/>
            </Card>
        </Paper>
    )
}

export default Answer;