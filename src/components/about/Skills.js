// import React, { Component } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import FormatPaintTwoToneIcon from '@mui/icons-material/FormatPaintTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataArrayIcon from '@mui/icons-material/DataArray';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import DeveloperModeTwoToneIcon from '@mui/icons-material/DeveloperModeTwoTone';
import WebAssetTwoToneIcon from '@mui/icons-material/WebAssetTwoTone';
import WebhookTwoToneIcon from '@mui/icons-material/WebhookTwoTone';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import DifferenceTwoToneIcon from '@mui/icons-material/DifferenceTwoTone';
import './hero.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
//   const lightTheme = createTheme({ palette: { mode: 'light' } });

const iconMap = {
    "Web Development": <LanguageTwoToneIcon style={{color:'rgba(235, 95, 186, 0.2)'}}/>,
    "Mobile Development": <DeveloperModeTwoToneIcon style={{color:'rgba(153, 207, 5, 0.2)'}} />,
    "Java": <FormatPaintTwoToneIcon style={{color:'rgba(190, 180, 221, 0.2)'}} />,
    "Data Structure": <TipsAndUpdatesTwoToneIcon style={{color:'rgba(238, 37, 37, 0.2)'}} />,
    "MongoDB": <StorageTwoToneIcon style={{color:'rgba(223, 216, 19, 0.2)'}} />,
    "SQL": <BackupTwoToneIcon style={{color:'rgba(84, 225, 108, 0.2)'}} />,
    "React.js": <WebAssetTwoToneIcon style={{color:'rgba(64, 207, 233, 0.2)'}} />,
    "Express.js": <WebhookTwoToneIcon style={{color:'rgba(158, 83, 238, 0.2)'}} />,
    "Node.js": <HubTwoToneIcon style={{color:'rgba(155, 143, 236, 0.2)'}} />,
    "JavaScript": <DataArrayIcon style={{color:'rgba(239, 220, 232, 0.2)'}} />,
    "C++": <DifferenceTwoToneIcon style={{color:'rgba(80, 243, 80, 0.2)'}} />,
    "Git": <GitHubIcon style={{color:'rgba(62, 174, 239, 0.2)'}} />,
    "OOP": <DataObjectIcon style={{color:'rgba(243, 82, 82, 0.2)'}} />,
    "BootStrap": <FormatUnderlinedIcon style={{color:'rgba(156, 143, 151, 0.2)'}} />,

  };

function Skills() {


    return (  
        <div id='skill'>
            <p className="p-3" style={{ color: "#BBA14F",
             marginLeft:'10rem' , 
             marginTop:'3rem',borderTop:'0.2rem solid #BBA14F',// Adjust the value as needed
    width: "50%",cursor:'pointer' }}>
           •  Skills
        </p>

         
        

        <Box sx={{ flexGrow: 1 ,marginBottom:'3rem',justifyContent: 'center', width: '100%' ,   overflowX: 'hidden'}}>
      <Grid container spacing={2} 
         sx={{
            // maxWidth: '1600px',
            width: '50%',
            maxWidth: 'calc(100% - 64px)', // Account for padding
            margin: '0 0rem',
             justifyContent: 'center' // This centers the grid items
          }}
      >
        {[darkTheme].map((theme, index) => (
          <Grid key={index} size={6} xs={12}
         >
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  width:'70rem',
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                  "&:hover": {
                        
                        // backgroundColor: "#BBA14F", // Change background on hover
                        color: "#000000 !important", // Change text color on hover
                       
                      },
                }}
              >
                {["Web Development", "Mobile Development", "Java",  "Data Structure", "MongoDB",  "SQL", "React.js", "Express.js", "Node.js",  "JavaScript", "C++","Git","OOP", "BootStrap"].map((elevation) => (
                  <Item key={elevation} elevation={elevation} sx={{
                    minWidth: '200px', // Minimum width for each item
                    height: '100px', // Fixed height
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor:'rgba(135, 133, 128, 0.2)',
                    justifyContent: 'start',
                    "&:hover": {
                        
                        backgroundColor: "#BBA14F", // Change background on hover
                        color: "#000000 !important", // Change text color on hover
                        transform: "scale(1.05)", // Slightly enlarge the item
                        boxShadow: "4px 4px 4px rgba(241, 231, 198, 0.2)",
                        transition: "all 0.3s ease-in-out", // Add shadow effect
                        '& .MuiSvgIcon-root': { // Specifically target the icon
                            color: "#000000 !important", // Force icon color change on hover
                        },
                        
                      },

                  }}>
                     {iconMap[elevation] && React.cloneElement(iconMap[elevation], {
                        sx: {
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginLeft:'2rem',
                        marginRight:'1rem',
                        "&:hover": {
                        
                            // backgroundColor: "#BBA14F", // Change background on hover
                            color: "#000000 !important", // Change text color on hover
                            // transform: "scale(1.05)", // Slightly enlarge the item
                            // boxShadow: "4px 4px 4px rgba(241, 231, 198, 0.2)",
                            // transition: "all 0.3s ease-in-out", // Add shadow effect
                            
                          },
                        }
                    })}
                     <Typography variant="caption" sx={{
                        fontSize:'25px',
                        lineHeight:'1',
                        // padding:'1rem',
                        fontWeight:'bold',
                     }}>
                          {`${elevation}`}
                    </Typography>
                                    
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Box>
        </div>
    );
}

export default Skills;