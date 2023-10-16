
import { Card, Paper, Typography } from "@mui/material";
import Footer from './Answer/Footer'

import ImageList from './Add/ImageList'
import { useState } from "react";
import { POST } from "../../constants/actionType";

function Post(props) {
    console.log(props);
    const images = [...props?.images];
    
    const post_concat = props.post.substring(0, 140);
    const [post, setPost] = useState(post_concat);
    const [show, setShow] = useState(props.post.length > 140);
    
    const showMore = () => {
        setPost(props.post);
        setShow(prev => !prev);
    }
    const showLess = () => {
        setPost(post_concat);
        setShow(prev => !prev);
    }

    

    return (
        <Paper elevation={4} >

            <Card variant="outlined" style={{ marginBottom: '20px' }} >
                
                <Typography variant="body1" padding='10px' sx={{ whiteSpace: 'pre-line' }} >
                    {post}
                </Typography>
                {(props.post.length > 140) && (show ? <Typography padding='10px' color="primary" onClick={showMore}>show more</Typography> : <Typography color="primary" padding='10px' onClick={showLess}>show less</Typography>)}

                <ImageList images={images} enableEditing={false} />
                <Footer likes={props.likes} type={POST} id={props.id} creatorId = {props.creatorId} onDelete={props.onDelete}/>
            </Card>
        </Paper>
    )
}

export default Post;