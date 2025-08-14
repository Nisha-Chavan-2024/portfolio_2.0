import React, { Component } from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import PageTransition from '../PageTransition';

function AchivementPage() {
    return ( 
        <>
        <PageTransition>
        <Navbar />
        <Hero/>
        </PageTransition>
        </>
     );
}

export default AchivementPage;