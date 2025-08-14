import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

// import { useNavigate } from 'react-router-dom';

function Navbar() {

  const location = useLocation(); 
  const navigate = useNavigate(); // Now this will work
  const [value, setValue] = React.useState(() => {
    const pathToValue = {
      '/home': 'home',
      '/about': 'about',
      '/resume': 'resume',
      '/achive': 'achive'
    };
    return pathToValue[location.pathname] || 'home';
  });
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


  React.useEffect(() => {
    const pathToValue = {
      '/home': 'home',
      '/about': 'about',
      '/resume': 'resume',
      '/achive': 'achive'
    };
    setValue(pathToValue[location.pathname] || 'home');
  }, [location.pathname]);


       return ( 
           <>
        
            <div className="navbar-container ">


           <Box className={`tab-container ${isMenuOpen ? "active" : ""}`} 
           sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end', 
            padding:'1rem',
            paddingRight:'15rem',
            }}>

            <Box sx={{ 
                    marginRight: 'auto', // Pushes everything else to the right
                    padding: '0.2rem 15rem'
                }}>
                    <a  
                    component='a'
                    href="/" 
                    style={{
                        color: '#BBA14F',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        fontFamily: 'Arial, sans-serif',
                        transition: 'color 0.3s ease-in-out',
                       
                        // Add transition for smooth effect
                       
                    }}

                    >
                   NISHA CHAVAN
                    </a>
                </Box>
   
           <Tabs
             value={value}
             onChange={handleTabChange}
            //  onClick={() => handleTabClick('/about')}
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
             <Tab className="tab-item"  label="Home" value='home'
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
             <Tab className="tab-item" label="About"  value="about" 
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
             <Tab className="tab-item" label="Resume" value="resume" 
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
             <Tab className="tab-item" label="Achivements"  value="achive"
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

export default Navbar;