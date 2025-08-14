import React from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import PageTransition from '../PageTransition';
function ResumePage() {
    return ( 
        <>
        {/* <Navbar/> */}
        <PageTransition>
        <Hero/>
        </PageTransition>
        </>
     );
}

export default ResumePage;