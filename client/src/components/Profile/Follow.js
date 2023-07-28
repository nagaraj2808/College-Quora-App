import { Avatar, Button, Card, CardHeader, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../actions/auth";
import { stringAvatar } from "../Home/Answer/userIcon";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Follow(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userProfile =() =>{
        dispatch(Profile(props.id))
        navigate(`/user/profile/${props.id}`)
    }
    return (
        <Paper elevation={2}>

            <Card variant="outlined" style={{ marginBottom: '15px' }}>

                <CardHeader
                        avatar={<Avatar {...stringAvatar(props.name)} />}
                        title={
                                <Typography variant="body1">
                                    {props.name}
                                </Typography>}
                        action={
                            <Button onClick={userProfile} endIcon={<OpenInNewIcon />}>View Profile</Button>
                        }
    
                    />
            </Card>
        </Paper>
    )
}

export default Follow;