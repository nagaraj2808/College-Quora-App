<<<<<<< HEAD
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import decode from 'jwt-decode';
import Menu from './UserMenu';
export default function NavBar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
=======
import { Box, AppBar, Toolbar, Typography, Button,Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import decode from 'jwt-decode';
import Menu from './UserMenu';
import TaskBar from '../Home/TaskBar'
import UserContext from "../../context/UserContext";
export default function NavBar() {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);
>>>>>>> ea08f14 (version 1 bug fixed)


  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    navigate('/auth');

    setUser(null);
  };

  const homePage = () => {
    navigate("/home")
  }
  const login = () => {

    navigate('/auth');
  }

  useEffect(() => {
    
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);

  return (
<<<<<<< HEAD
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography onClick={homePage} variant="h4"  sx={{ flexGrow: 1 ,cursor:"pointer"}}>
            CQHub
          </Typography>
=======
    <Container sx={{mb:'20px'}}>
      <AppBar  color="inherit"  sx={{mx:'2px',borderRadius:'10px',left:'0px'}} >
        <Toolbar  sx={{ display: 'flex',gap:"1rem",justifyContent:'space-between',alignContent:'center'}}>
          <Typography onClick ={homePage} variant="h4"  sx={{ cursor:"pointer"}} >
            CQHub
          </Typography>
          {user &&<TaskBar />}
>>>>>>> ea08f14 (version 1 bug fixed)

          {
            
            (location.pathname !== '/auth') &&
<<<<<<< HEAD
              ((user) ? <Menu name={user?.result.name} /> : (<Button onClick={login}>Login</Button>))
=======
              ((user) ? <Menu name={user?.result.name} /> : (<Button onClick={login} >Login</Button>))
>>>>>>> ea08f14 (version 1 bug fixed)
            
          }
        </Toolbar>
      </AppBar>
<<<<<<< HEAD
    </Box>
=======
    </Container>
>>>>>>> ea08f14 (version 1 bug fixed)
  );
}