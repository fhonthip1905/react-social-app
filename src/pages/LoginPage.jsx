// import React from 'react'
// import { Link } from "react-router-dom";
import { Box, Typography, Button, TextField , Divider}  from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { AuthenContext } from '../context/AuthenContext';



function LoginPage() {
    const navigate = useNavigate();
    const {login} = useContext(AuthenContext)
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password,setPassword] = useState('');
    const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleSubmitLogin = async (e) =>  {
        e.preventDefault();
        if(emailOrPhone === 'qwer' && password === '1234'){
            await login()
            navigate('/');
        }else {
            alert('Invalid username or password');
        }
    }
    
  return (
  <Box 
    component='main'
    display='flex'
    justifyContent='space-between'
    
  >
        <Box
            component='section'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            p='20px'
            flex={1}
            //responsive 
            sx={{
                display: { xs: 'none', sm: 'flex'}
            }}
            // bgcolor='yellow'
        >
            <Typography variant='h3' color='#4D8ED3'  fontWeight= '800' >FakeBuck</Typography>
            <Typography variant='h6' >Connect with friend and the world</Typography>

        </Box>
        <Box
            component='section'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flex={1}
            
        >
        <Box component='form' display='flex' flex={1} flexDirection='column' gap='10px' padding='8px' bgcolor='white' borderRadius={1} onSubmit={handleSubmitLogin} >
            <TextField type='text' variant='outlined' label='Email or Phone number' value={emailOrPhone} onChange={handleChangeEmailOrPhone} />
            <TextField type='Password' variant='outlined' label='Password' value={password} onChange={handleChangePassword} />
             <Button variant='contained' color='primary' type='submit'>Login</Button>
            <Button 
            variant='outline' 
            color='primary'
            sx={{
                fontWeight: 600,
            }}
            >Forgot Paassword?</Button>
            <Divider />
            <Button variant='contained' color='success'>Create New Account</Button>
        </Box>
         
        </Box>
</Box>
  )
}

export default LoginPage
