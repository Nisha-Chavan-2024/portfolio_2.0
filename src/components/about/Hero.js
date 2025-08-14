import React, { Component } from "react";
import Box from "@mui/material/Box";
import "./hero.css";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

function Hero() {
  return (
    <div className="container" style={{
      overflowX: 'hidden', // Hide horizontal overflow
      width: '100%'       // Ensure full width
    }}>
      <div className="row">
        <p className="m-5" style={{ marginLeft:'5rem',    color: "rgb(205, 193, 193)"
        }}>
          • More About Me
        </p>
        <div className="col-md-4 col-12">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center", // Center the image on mobile
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 400,
                marginLeft: { xs: "0", md: "3rem" }, // Remove left margin on mobile
              },
            }}
          >
            <Paper>
              <img
                src="my.jpg"
                alt="Description"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // or 'contain' depending on your needs
                }}
              />
            </Paper>
          </Box>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-md-7 col-12">
          <h3 style={{ fontWeight: "bold" , 
                        }}>
            Final year at Pimpri Chinchwad College of Engineering
          </h3>
          <h5>
            <i>Passionate programmer who is keen on exploring opportunities.</i>
          </h5>
          <div className="p-2" style={{ display: "flex", alignItems: "center", gap: "2rem",flexDirection: { xs: "column", md: "row" }, }}>
            <h4>
              <KeyboardDoubleArrowRightSharpIcon
                style={{ fontSize: "2rem", color: "#BBA14F" }}
              />{" "}
              Degree: B.Tech.
            </h4>
            <h4>
              <KeyboardDoubleArrowRightSharpIcon
                style={{ fontSize: "2rem", color: "#BBA14F" }}
              />{" "}
             Specialization: Information Technology
            </h4>
          </div>
          <h4  className="p-2">
            <KeyboardDoubleArrowRightSharpIcon
              style={{ fontSize: "2rem", color: "#BBA14F" }}
            />{" "}
            City: Pune, India
          </h4>

          <h5 id="para">
            I am a Third-year Information Technology major at PCCOE, Pune, and a
            Full Stack Developer. Passionate about web development, I've
            excelled in creating efficient, scalable solutions using
            technologies like React, Node.js. With a strong academic
            record and over 550 solved coding problems, I am committed to
            leveraging technology for impactful solutions and continuous
            learning.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
