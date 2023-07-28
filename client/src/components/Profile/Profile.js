import {useDispatch, useSelector } from "react-redux";
import {  Card, Avatar, CardHeader, Box, Typography, Container, CardContent, Button, Paper } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ActionTabs from './ActionTabs'
import _ from 'lodash';
import { Profile, follow } from "../../actions/auth";
import {  useParams } from "react-router-dom";

export default function ProfileComponent() {
    const {id} = useParams();

    const { profile, isLoading } = useSelector((state) => { return state.profile });
    const dispatch = useDispatch();
    console.log(profile);
    
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log('profile');
   
    let userName = profile?.name;
    userName = _.lowerCase(userName);
    userName = _.upperFirst(userName);

    
    
   
    const handleFollow = () =>{
        dispatch(follow({id:profile._id,name:user?.result.name}));
 
    }
    if (isLoading) {
        dispatch(Profile(id));
        return <p>Loading...</p>;
    }
    

    return (
        <Box marginTop={10} >
            <Container disableGutters>
                <Paper elevation={12}>
                    <Card >
                        <CardHeader
                            avatar={<Avatar {...AccountCircleIcon} sx={{ width: 150, height: 150 }} />}
                            title={<><Typography variant="h3"> {userName}
                            </Typography><Typography variant="subtitle1">{profile?.followers?.length} followers {profile?.following?.length} following</Typography>
                                {(user && profile._id!==user.result._id) &&
                                
                                <Button variant={profile?.followers.some((follower)=>follower.id===user?.result?._id)?"outlined":"contained"} id = "follow-btn"onClick={handleFollow} color="primary" startIcon={profile?.followers.some((follower)=>follower.id===user?.result?._id)?<HowToRegIcon/>:<PersonAddAlt1Icon/>}>{profile?.followers.some((follower)=>follower.id===user?.result?._id)?"Following":"Follow"}</Button>
                                    
                            }</>}
                        />



                        <CardContent >
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Dignissim convallis aenean et tortor at risus. Quam pellentesque nec nam aliquam sem et. Mi proin sed libero enim sed faucibus turpis. Nunc id cursus metus aliquam eleifend mi. Velit egestas dui id ornare arcu
                            </Typography>
                        </CardContent>

                       
                        <ActionTabs profile={profile}/>
                    </Card>
                </Paper>
            </Container>

        </Box>

);
};

// {/* <Collapse in={expanded} timeout="auto" >
//     <CardContent>
//         <Content type={type} profile={profile}/>
//     </CardContent>
// </Collapse> */}


// {/* <Button name = {POST}     onClick={handleExpandClick}  >Posts    </Button>
// <Button name = {QUESTION} onClick={handleExpandClick}  >Questions</Button>
// <Button name ={ANSWER}    onClick={handleExpandClick}  >Answers  </Button>
// <Button name = "FOLLOWERS"onClick={handleExpandClick}  >Followers</Button>
// <Button name = 'FOLLOWING'onClick={handleExpandClick}  >Following</Button> */}