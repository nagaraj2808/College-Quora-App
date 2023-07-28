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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography onClick={homePage} variant="h4"  sx={{ flexGrow: 1 ,cursor:"pointer"}}>
            CQHub
          </Typography>

          {
            
            (location.pathname !== '/auth') &&
              ((user) ? <Menu name={user?.result.name} /> : (<Button onClick={login}>Login</Button>))
            
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}