import React from "react";
import "./hero.css";
import NavBar from "./Navbar";
import PageTransition from "../PageTransition";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone';
function Hero() {
   

  return (
    <PageTransition>

   
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ margin: "150px 80px", textAlign: "left" }}>
          <a className= "name" href="/home">Nisha Chavan</a>
          <h2 style={{ lineHeight: "1.8" }}>PCCOE'26 | Web Development | Android Development</h2>
          <h3 style={{ lineHeight: "1.8" }}>
            Passionate about Information Technology.
          </h3>
          <p >
            I love collaborating and making connections. Always looking for opportunities to boost my passion for excellence in programming.
          </p>

            <NavBar/>
          
          <div id="icon">
          <a href="#"><InstagramIcon/></a>
          <a href="https://linkedin.com/in/nisha-chavan"><LinkedInIcon/></a>
          <a href="https://leetcode.com/u/chavannisha2020/"><LaptopMacIcon/></a>
          <a href="https://github.com/Nisha-Chavan-2024"><GitHubIcon/></a>
          <a href="https://drive.google.com/file/d/1qWJKrTVfDRaj9Ni7gh1R7LuVeoG4cphX/view?usp=drive_link"><DownloadForOfflineTwoToneIcon/></a>
          </div>
         
          
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

export default Hero;
