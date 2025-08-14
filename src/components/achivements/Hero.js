// import React, { Component } from 'react';
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import StarPurple500TwoToneIcon from "@mui/icons-material/StarPurple500TwoTone";
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import './hero.css';

const cards = [
  {
    id: 1,
    title: "Diploma Topper (Rank #1)",
    description:
      "Awarded highest academic distinction for securing first position among 150+ students with a perfect 92.17%.",
    icon: <StarPurple500TwoToneIcon />,
  },
  {
    id: 2,
    title: "College Project Sponsorship",
    description: "Developed and launched a comprehensive study application for diploma students, integrating subject notes, video lectures, and previous years' question papers across all semesters. ",
    icon: <AccountTreeTwoToneIcon />,
  },
  {
    id: 3,
    title: "Industrial Training at Technowings",
    description: "Completed intensive 6-week training at Technowings, gaining hands-on experience in Python programming and cross-platform mobile development.",
    icon: <ModelTrainingOutlinedIcon />,
  },
  {
    id: 1,
    title: "Problem Solver (550+ Solutions)",
    description: "Solved 550+ algorithmic challenges across LeetCode, GeeksforGeeks, and CodeChef, mastering data structures and optimization techniques.",
    icon: <AddTaskTwoToneIcon />,
  },
  {
    id: 2,
    title: "AI-Powered Resume Screening System",
    description: "Developed and published research on a machine learning model using Support Vector Machines (SVM) to automate resume screening with 92% accuracy.",
    icon: <StickyNote2OutlinedIcon />,
  },
  {
    id: 3,
    title: "Hand Gesture Recognition System",
    description: "Developed a real-time gesture recognition model using convolutional neural networks (CNN) with 94.2% test accuracy.",
    icon: <ArticleOutlinedIcon />,
  },
];

function Hero() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (


    <div>

    <div>
    <p className="" style={{fontSize:'3rem', fontWeight:'bold', margin:'5rem',textAlign:'center'}}>Achivements</p>
    </div>
   
    
    <Box

    
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { 
          xs: "1fr",         // 1 column on mobile
          sm: "repeat(2, 1fr)", // 2 columns on tablet
          md: "repeat(3, 1fr)"  // 3 columns on desktop
        },
        gap: { xs: "1rem", sm: "2rem" },       // Smaller gap on mobile
        padding: { xs: "1rem", sm: "2rem" }   , // Tighter padding on mobile
        maxWidth: "calc(3 * 25rem + 2 * 2rem)", // 3 cards + gaps
        margin: "0 auto", // Center the grid
        boxSizing: "border-box",
       
       // Shadow for all cards
        // Vertical centering
      
          transform: "scale(1.03)",
          boxShadow: "8px 8px 8px rgba(103, 72, 72, 0.2)",
        
      }}
    >
        
      {cards.map((card, index) => (
        <Card
          sx={{
            width: "100%",
            height: { xs: "25rem", md: "25rem" },  // Slightly shorter cards on mobile
            marginBottom: { xs: "1.5rem", md: "3rem" },
            
            boxSizing: "border-box",
            backgroundColor: "#d3d3d3",
            boxShadow: "8px 8px 0px rgba(103, 88, 88, 0.94)", // Light gray background
            "&:hover": {
              backgroundColor: "#BBA14F",
              color: "#ffffff", // Affects all text inside
              transform: "scale(1.03)",
              boxShadow: "8px 8px 0px rgba(225, 196, 152, 0.3)",
              "& *": {
                // Target all child elements
                color: "#ffffff !important", // Force text color change
              },
              "& .MuiSvgIcon-root": {
                // Specifically target icons
                color: "#ffffff !important",
              },
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%", textAlign: "center" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  fontWeight: "bold",
                  padding: "2rem",
                  fontSize: "5rem", // This now controls the container size
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& svg": {
                    // Directly target the SVG icon
                    fontSize: "inherit", // Inherit from Typography
                    width: "1em", // Relative to font size
                    height: "1em", // Relative to font size
                  },
                  "&:hover": {
                    transform: "scale(1.05)", // Add hover effect
                    transition: "transform 0.2s ease",
                    
                  },
                }}
              >
                {card.icon}
              </Typography>
              <Typography
                variant="h2"
                component="div"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textAlign: "center",
                  marginBottom:'2rem',

                  fontSize: { 
                    xs: "1.8rem",  // Larger on mobile for readability
                    sm: "2rem", 
                    md: "2rem"
                  },
                  textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                  "&:hover": {
                    // Darker gray on hover
                    fontWeight: "bold",
                  },
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="p"
                color="text.secondary"
                sx={{
                  mb: 2,
                  textAlign: "center",
                 
                  fontSize: "17px",
                  color:'#000000',
                  // fontSize: { xs: '1.5rem', md: '2rem' },
                  textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                  "&:hover": {
                    // Darker gray on hover
                    fontWeight: "bold",
                  },
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </div>
  );
}

export default Hero;
