// import React, { Component } from 'react';
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import './hero.css';
import Navbar from "../Navbar";

const steps = [
  {
    label: "Travel Booking Platform",
    description:  "• Wanderlust is a comprehensive travel platform featuring interactive Google Maps integration for location-based searches, a robust rating and review system for authentic guest feedback, and advanced filtering options to browse vacation rentals by price, location, and amenities. This full-stack application was built using MongoDB, Mongoose, Express.js, React.js, Node.js, and Bootstrap for a seamless user experience."
  },
  {
    label: "Stock Predication Platform",
    description:
      "• A Zerodha-inspired trading platform featuring real-time stock data through WebSocket integration. Includes live price tracking, interactive candlestick charts, and virtual portfolio management. Built with MERN stack (Node.js, React, MongoDB) for seamless market analysis and paper trading.",
  },
  {
    label: "Study Material Mobile App",
    description: "• A study app offering PDF/video learning materials with offline access. Features progress tracking, quizzes, and bookmarking to enhance learning efficiency.",
  },
];

const steps1 = [
    {
      label: "DSA + Web Development",
      description:  "• Completed Sigma 3.0 program at Apna College. Gained expertise in data structures and full-stack web development.."
    },
    {
      label: "Flutter",
      description:
        "• Udemy certified Flutter developer. Learned cross-platform mobile app development using Dart framework.",
    },
    {
      label: "Android Development",
      description: "• AICTE certified Android developer. Acquired skills in native Android app development and UI design.",
    },
    {
        label: "Industrial Training",
        description: "• Completed training at TechnoWings International. Worked on real-world IT projects and solutions.",
      },
      {
        label: "Cognifyz Internship",
        description: "Successfully completed internship at Cognifyz Technology. Gained practical experience in software development."
      }
  ];

function Hero() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep2, setActiveStep2] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  // Handlers for second stepper
  const handleNext2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset2 = () => {
    setActiveStep2(0);
  };

  return (
    <>
    <Navbar/>
      <div className="container p-5 m-5" style={{marginLeft:'60px'}}>
        <div className="row">
          <div className="col-7" style={{alignItems:'center'}}>
            <h2 id="start">Check Out My Projects</h2>

            <Box sx={{ maxWidth: 700,marginRight:'100px'}}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      sx={{
                        color: "white !important",
                        fontWeight: "bold",
                        "& .MuiStepLabel-label": {
                          color: "white !important",
                          fontWeight: "bold",
                          fontSize: "23px",
                        },
                        // borderRadius:'2px solid #BBA14F', // Label text color
                        "& .MuiStepLabel-iconContainer .Mui-active": {
                          color: "#BBA14F", // Active step icon color
                        },
                        "& .MuiStepLabel-iconContainer .Mui-completed": {
                          color: "green", // Completed step icon color
                        },
                      }}
                      optional={
                        index === steps.length - 1 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{
                            mt: 1,
                            mr: 1,
                            color: "#000000",
                            backgroundColor: "#ffffff", // Button background color
                            "&:hover": {
                              backgroundColor: "#BBA14F",
                              color: "#ffffff",
                              fontWeight: "bold", // Button hover color
                            },
                          }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{
                            mt: 1,
                            mr: 1,
                            color: "#ffffff",
                            // fontWeight:'bold',
                            backgroundColor: "#BBA14F", // Button background color
                            "&:hover": {
                              color: "#000000",
                              backgroundColor: "#ffffff",
                              fontWeight: "bold", // Button hover color
                            },
                          }}
                        >
                          Back
                        </Button>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper
                  square
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: "#dddddd",
                    borderRadius: "5px",

                    boxShadow: "4px 4px 4px #808080",
                    "&:hover": {
                      transition: "transform 0.2s ease",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Typography sx={{ color: "#000000" }}>
                    All completed - you&apos;re finished
                  </Typography>
                  <Button
                    onClick={handleReset}
                    sx={{
                      mt: 1,
                      mr: 1,
                      color: "#ffffff",
                      backgroundColor: "#BBA14F",
                      "&:hover": {
                        border: "2px soloid #BBA14F",
                      },
                    }}
                  >
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </div>
          <div className="col-1" ></div>
          <div className="col-4" >
            <h2 >Certifications</h2>

            <Box sx={{ maxWidth: 700}}>
              <Stepper activeStep={activeStep2} orientation="vertical">
                {steps1.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      sx={{
                        color: "white !important",
                        fontWeight: "bold",
                        "& .MuiStepLabel-label": {
                          color: "white !important",
                          fontWeight: "bold",
                          fontSize: "23px",
                        },
                        // borderRadius:'2px solid #BBA14F', // Label text color
                        "& .MuiStepLabel-iconContainer .Mui-active": {
                          color: "#BBA14F", // Active step icon color
                        },
                        "& .MuiStepLabel-iconContainer .Mui-completed": {
                          color: "green", // Completed step icon color
                        },
                      }}
                      optional={
                        index === steps1.length - 1 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <Button
                          variant="contained"
                          onClick={handleNext2}
                          sx={{
                            mt: 1,
                            mr: 1,
                            color: "#000000",
                            backgroundColor: "#ffffff", // Button background color
                            "&:hover": {
                              backgroundColor: "#BBA14F",
                              color: "#ffffff",
                              fontWeight: "bold", // Button hover color
                            },
                          }}
                        >
                          {index === steps1.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack2}
                          sx={{
                            mt: 1,
                            mr: 1,
                            color: "#ffffff",
                            // fontWeight:'bold',
                            backgroundColor: "#BBA14F", // Button background color
                            "&:hover": {
                              color: "#000000",
                              backgroundColor: "#ffffff",
                              fontWeight: "bold", // Button hover color
                            },
                          }}
                        >
                          Back
                        </Button>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep2 === steps1.length && (
                <Paper
                  square
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: "#dddddd",
                    borderRadius: "5px",

                    boxShadow: "4px 4px 4px #808080",
                    "&:hover": {
                      transition: "transform 0.2s ease",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Typography sx={{ color: "#000000" }}>
                    All completed - you&apos;re finished
                  </Typography>
                  <Button
                    onClick={handleReset2}
                    sx={{
                      mt: 1,
                      mr: 1,
                      color: "#ffffff",
                      backgroundColor: "#BBA14F",
                      "&:hover": {
                        border: "2px soloid #BBA14F",
                      },
                    }}
                  >
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
