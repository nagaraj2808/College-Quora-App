import { ANSWER, POST, QUESTION } from "../../constants/actionType";
import { useReducer, useState } from "react";
import { Stack, Box } from "@mui/material";
import Answers from '../Home/Answer/Answer'
import Question from "../Home/Question/Question";
import Modal from '../Home/Add/Modal'
import Post from "../Home/Post";
import Follow from "./Follow";
import { useDispatch } from "react-redux";
const Actions = {
    postDelete:'postDelete',
    answerDelete:'answerDelete',
    questionDelete:'questionDelete'
  }
function Content(props) {
    const type = props.type;
    const profile = props.profile;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [clickedQuestion, setClickedQuestion] = useState({});
    
    switch (type) {
        case QUESTION:
            const questions = profile.questions;


            const handleAnswer = (e) => {
                const name = e.target.name;
                setClickedQuestion(questions[name]);
                // console.log("IN Question while setting clicked question");
                // console.log(clickedQuestion);
                setOpen(true);
            }
            return (<>
                {open && <Modal closeModal={setOpen} question={clickedQuestion} type={ANSWER} />}
                <Stack direction='column' spacing={2} alignItems='center' >
                    <Box sx={{ width: '100%' }}>
                        {questions.map((question, index) => {
                            return <Question question={question.question} name={index} key={index} handleClick={handleAnswer} />
                        })}
                    </Box>
                </Stack></>
            );
        case ANSWER:
            const answers = profile.answers;
            function handleAnswerDelete(id) {
                dispatch({type:Actions.answerDelete,payload:{id:id}})
            }
            return (
                <Stack direction='column' spacing={2} alignItems='center'>
                    <Box sx={{ width: '70%' }} >

                        {answers.map((answer) => (

                            <Answers
                                key={answer._id}
                                _id={answer._id}
                                images={answer.images}
                                author={answer.creatorName}
                                authorId={answer.creatorId}
                                question={answer.question}
                                createdAt = {answer.createdAt}
                                answer={answer.answer}
                                likes={answer.likes}
                                onDelete={handleAnswerDelete}
                            />

                        ))}
                    </Box>
                </Stack>
            );

        case POST:
            
            const posts=profile.posts;
            console.log(posts);
            function handlePostDelete(id){
                
                dispatch({type:Actions.postDelete,payload:{id:id}})
            }
            return (<Stack direction='column' spacing={2} alignItems='center'>
                <Box sx={{ width: '80%' }} >

                    {posts.map((post, index) => (

                        <Post key={index} images={post.images} post={post.message} creatorId={post.creatorId} likes={post.likes} id={post._id} onDelete={handlePostDelete}/>
                    ))}
                </Box>
            </Stack>);
        case 'FOLLOWERS':
            const followers = profile.followers;
            return (
                <Stack direction='column' spacing={2} alignItems='center' sx={{ marginBottom: '10px' }}>
                    <Box sx={{ width: '80%' }} >
                        {
                            followers.map((user, index) => (
                                <Follow id={user.id} name={user.name} key={index} />
                            ))
                        }
                    </Box>
                </Stack>
            );
        case 'FOLLOWING':
            const following = profile.following;
            return (
                <Stack direction='column' spacing={2} alignItems='center' sx={{ marginBottom: '10px' }}>
                    <Box sx={{ width: '80%' }} >
                        {
                            following.map((user, index) => (
                                <Follow id={user.id} name={user.name} key={index}/>
                            ))
                        }
                    </Box>
                </Stack>
            );
        default:
            break;
    }
}

export default Content;