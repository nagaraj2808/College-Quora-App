import { CardActions } from "@mui/material";
import {IconButton} from "@mui/material";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';



import { useState } from "react";
import { useDispatch } from "react-redux";
import { likeAnswer,deleteAnswer } from "../../../actions/answer";
import { POST } from "../../../constants/actionType";
import { likePost,deletePost } from "../../../actions/post";
function Footer(props) {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    

    const formatLikes = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };

    const initial = props.likes.some((id)=>id===user?.result._id);

    const [toggleLike, setToggleLike] = useState(initial);
    
    const [likesCount,setLikesCount] = useState(props.likes.length);


    function handleLikeClick(){
        setToggleLike(prev=>{
            if (prev === false) {
                if(props?.type===POST){
                    
                    dispatch(likePost(props.id));
                }
                else{

                    dispatch(likeAnswer(props.id))
                }
                setLikesCount(like_=>like_+1)
                return true;
            } else{
                // dispatch(likeAnswer(props.id))
                if(props?.type===POST){
                    dispatch(likePost(props.id));
                }
                else{

                    dispatch(likeAnswer(props.id))
                }
                setLikesCount(like_=>like_-1)
                return false;
            }
        });
    }

    function handleDelete(){
        if(props?.type === POST){
            props?.onDelete(props.id);
            dispatch(deletePost(props.id));
        }
        else{
            dispatch(deleteAnswer(props.id));
            props.onDelete && props.onDelete(props.id);
        }
    }
        
    
    return (
        <CardActions disableSpacing style={{display:"flex"}}>
                <IconButton disabled={!user?true:false} onClick={handleLikeClick} >{toggleLike?<ThumbUpAltIcon color="primary"/>:<ThumbUpAltOutlinedIcon />}</IconButton>{formatLikes(likesCount)}
                {user?.result?._id === props.creatorId && <IconButton aria-label="delete"  style={{marginLeft:'auto'}} onClick={handleDelete}><DeleteIcon/></IconButton>}
        </CardActions>
    )
}

export default Footer;