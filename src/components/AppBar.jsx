import {AppBar as MuiAppBar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState , useContext} from 'react';
import { AuthenContext } from '../context/AuthenContext';

import { useNavigate } from 'react-router-dom';



function AppBar() {
    const {logout} = useContext (AuthenContext);
    const navigate = useNavigate();
    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleLogout = () => {
        logout();
        navigate('/login');
      }

      const handleClickToProfile = () => {
        navigate('/');
      }
  return (
        <MuiAppBar position='staic'>
            <Toolbar
                sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center'
                }}
            >
                <Box display='flex' alignItems='center' gap='10px'>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6" 
                        component="div" 
                        sx={{ flexGrow: 1 }}
                        >
                            DarkDinno 🌻
                    </Typography>
                </Box>
                <Box>
                    <Avatar alt="Remy Sharp" onClick={handleClick}/>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClickToProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </Menu>
                </Box>
            </Toolbar>
        </MuiAppBar>
  )
}


export default AppBar;