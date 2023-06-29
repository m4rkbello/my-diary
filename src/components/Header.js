import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import header from './header.css'


const Header = () => {
    // const home = 'Home';
    // const aboutUs = 'About Us';

    

  return (
//     <header>
//    <p>{home}{aboutUs}</p>
//     </header>
<Box sx={{ flexGrow: 1 }}>
<AppBar position="static" className="header">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
   
    Welcome To My Diary
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
</Box>
  )
}

export default Header
