import { Card, Typography, CardActions, Button } from "@mui/material";
import RateReviewSharpIcon from "@mui/icons-material/RateReviewSharp";
import DeleteIcon from '@mui/icons-material/Delete';
export default function Question(props) {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <Card variant="outlined" style={{ marginBottom: "20px" }}>
            <Typography variant="subtitle1" fontWeight="bold" fontSize={18} paddingLeft="20px" paddingY={3}>
                {props.question}
            </Typography>
            {user && <CardActions style={{display:"flex"}}>
                <Button startIcon={<RateReviewSharpIcon />} onClick={props.handleAnswer} name={props.name}>
                    Answer
                </Button>
<<<<<<< HEAD
                {props.creatorId===user?.result?._id && <Button startIcon={<DeleteIcon /> } style={{marginLeft:'auto'}} onClick = {props.handleDelete} >
                    Delete
                </Button>}
=======
                {/* {props.creatorId===user?.result?._id && <Button startIcon={<DeleteIcon /> } style={{marginLeft:'auto'}} onClick = {props.handleDelete} >
                    Delete
                </Button>} */}
>>>>>>> ea08f14 (version 1 bug fixed)
            </CardActions>}
        </Card>
    );
}