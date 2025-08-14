import React from 'react';
import Hero from './Hero';
import PageTransition from '../PageTransition';

function HomePage() {
    return ( 
        <>
        <PageTransition>
        <Hero/>
        </PageTransition>
       
        </>
     );
}

export default HomePage;