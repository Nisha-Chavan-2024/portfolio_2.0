import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './navbar.css';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomePage from "./HomePage";
// import { useNavigate } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {

  const location = useLocation();
  const navigate = useNavigate(); // Now this will work
  const [value, setValue] = React.useState('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    const routeMap = {
      home: '/home',
      about: '/about',
      resume: '/resume',
      achive: '/achive'
    };
    navigate(routeMap[newValue]); // Now properly defined
  };
  

    return ( 
        <>
        

         <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
         <MenuIcon style={{ fontSize: "15px", color: "#ffffff" }} />
       </button>

       <div className="navbar-container ">

        <Box className={`tab-container ${isMenuOpen ? "active" : ""}`} sx={{ width: '100%' }}>

        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="inherit"  // Keep text color consistent
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
              backgroundColor: '#000000', // Background color of the Tabs container
              color: '#ffffff', // Default text color
              '& .MuiTabs-indicator': {
                backgroundColor: '#BBA14F' // Color of the active tab indicator
              },
              opacity: 1,
            }}
        >
          <Tab className="tab-item" value='home' label="Home" to="/"
          sx={{
             
              color: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease-in-out', // Smooth transition effect
              '&:hover': { color: '#BBA14F' }, // Hover color (Gold)
              '&.Mui-selected': { color: '#BBA14F' },
              opacity: 1,
            }} 
          />
          <Tab className="tab-item" label="About" value='about'
           sx={{
             
              color: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease-in-out', // Smooth transition effect
              '&:hover': { color: '#BBA14F' }, // Hover color (Gold)
              '&.Mui-selected': { color: '#BBA14F' },
              opacity: 1,
            }}  />
          <Tab className="tab-item" label="Resume"  value='resume'
           sx={{
             
              color: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease-in-out', // Smooth transition effect
              '&:hover': { color: '#BBA14F' }, // Hover color (Gold)
              '&.Mui-selected': { color: '#BBA14F' },
              opacity: 1,
            }} />
          <Tab className="tab-item" label="Achivements" value='achive'
           sx={{
             
              color: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease-in-out', // Smooth transition effect
              '&:hover': { color: '#BBA14F' }, // Hover color (Gold)
              '&.Mui-selected': { color: '#BBA14F' },
              opacity: 1,
            }} />
        </Tabs>
      </Box>
      </div>
      </>
     );
}

export default NavBar;
