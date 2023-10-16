import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createQuestion} from '../../../actions/question'
import {createAnswer} from '../../../actions/answer'
import { createPost } from "../../../actions/post";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {
    TextField,
    Button,
    Box,

    
    Typography
} from "@mui/material";
import ImageList from './ImageList';

import {POST,QUESTION,ANSWER} from '../../../constants/actionType';


const AddPost = (props) => {
    const type = props.type;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);//to render here
    const [images_, setImages_] = useState([]);//to send to form data

    const handleImageChange = (e) => {
        console.log(e.target.files);
        const selectedFiles = Array.from(e.target.files).slice(0, 4);
        
        selectedFiles.forEach(file => {
            setImages_(prev=>[...prev,file]);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImages((prev) => [...prev, reader.result]);

            }
            reader.onerror = (error) => {
                console.log("\nImage render error" + error);
            }
        })

    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setTitle(input);


    };


    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        setImages_(prevImages => prevImages.filter((_, i) => i !== index))

    };


    const user = JSON.parse(localStorage.getItem('profile'));

    //should be changed
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // console.log(type);
        // console.log(formData);
        if(type === QUESTION){
            dispatch(createQuestion({title:title,creatorName:user?.result.name},navigate));
        }
        else{
            const formData = new FormData();
            formData.append('title',title);
            formData.append('creatorName',user?.result.name);
            
            images_.forEach((image_)=>{
                formData.append('ImageData',image_);
            })
            if (type===POST) {
                // formData.append('creatorId',user?.result._id);
                dispatch(createPost(formData, navigate));                
            } else {
                formData.append('question',props.question.question);
                dispatch(createAnswer(formData,navigate));

            }
        }

        setTitle("");
        setImages([]);
        setImages_([]);
        props.closeModal(false);
    };
    return (
        <Box component="form" onSubmit={handleSubmit}  encType="multipart/form-data">
            {(type === ANSWER ) && <Typography variant="body1" fontWeight='bold'>{props?.question.question}</Typography>}
            <TextField
                multiline
                rows={4}
                placeholder={(type!==QUESTION)?"Write something...":"Start your question with What,How,Why,etc..."}
                value={title}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth

            />
            <ImageList images={images} removeImage={handleRemoveImage}/>

            {type !== QUESTION && images.length < 4 && (
                <>
                    <input
                        accept="image/*"
                        id="image-upload"
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        multiple
                    />
                    <label htmlFor="image-upload">
                        <Button variant="outlined" color="primary" component="span" style={{marginTop:'50px'}}>
                            <AddPhotoAlternateOutlinedIcon />
                        </Button>
                    </label>
                </>
            )}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!title && !images.length}
                style={{marginTop:'50px'}}
            >
                Submit
            </Button>
        </Box>
    );
};

export default AddPost;
