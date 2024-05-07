// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


function HomePage() {

const navigate = useNavigate();

const handleClick = () => {
    let isValid = true
   if (isValid) navigate('/random-path');
   else navigate('/fftt');
};

  return (
    <div>
      <h1>HomePage</h1>
      
      <Link to='/login'>LoginPage</Link>
      <Link to='/profile'>ProfilePage</Link>
      <Button
       endIcon={<DeleteIcon/>}
       variant="contained" 
       disableElevation
       color="error" 
       size="small" 
       onClick={handleClick}>
        Go to 404
        </Button>
    </div>
  )
}

export default HomePage;
