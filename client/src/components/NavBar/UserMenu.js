import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../Home/Answer/userIcon';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { Profile } from '../../actions/auth';


export default function PositionedMenu(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
  
    
    const logout = () => {
        handleClose();
      dispatch({ type: 'LOGOUT'});
  
      navigate('/auth');
  
      setUser(null);
    };
    const id = user?.result._id;
    console.log(id);
    const profile = () =>{
        handleClose();
        dispatch(Profile(id))
        navigate(`/user/profile/${id}`);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar {...stringAvatar(props.name)} />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={profile}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
