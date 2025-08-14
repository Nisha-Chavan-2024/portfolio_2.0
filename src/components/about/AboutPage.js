import React, { Component } from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Navbar from '../Navbar';
import PageTransition from '../PageTransition';
function AboutPage() {
    return ( 
      <>
      <PageTransition>
      <Navbar />
      <Hero />
      <Skills />
      </PageTransition>
      </>
      
     );
}

export default AboutPage;