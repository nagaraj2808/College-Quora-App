import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { IconButton, InputAdornment } from '@mui/material';

import { signin, signup } from "../../actions/auth";
import Container from '@mui/material/Container';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const defaultTheme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const initialFormState = { firstName: "", lastName: "", email: "", password: "", };
    const [isSignup, setIsSignup] = useState(false);
    function handleToggle(event) {
        setFormData(initialFormState);
        setIsSignup(prev => !prev);
    }
    const [formData, setFormData] = useState(initialFormState)
    function handleChange(event) {
        const key = event.target.name;
        const val = event.target.value;
        setFormData((prev) => ({ ...prev, [key]: val }))
    }
    async function handleSubmit(event) {
        
        event.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, navigate));

        } else {
            dispatch(signin(formData, navigate));
            
            
        }
        
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isSignup ? 'Sign up' : 'Sign in'}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                        {isSignup && <Grid container spacing={2}>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                        />


                        <TextField margin='normal'
                            required
                            fullWidth
                            autoFocus
                            id="password"
                            name="password"
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton

                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}

                        />

                        <Button

                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {isSignup ? 'Sign up' : 'Sign in'}
                        </Button>
                        <Grid container>

                            <Grid item xs>
                                <Link onClick={handleToggle} variant="body2">
                                    {isSignup ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}