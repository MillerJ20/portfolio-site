import React from 'react';
import { About } from './About'
import { RecentWork } from './RecentWork';
import { Technologies } from './Technologies';
import swirl from '../assets/paint-swirl.jpg';
import blue from '../assets/blue.jpg';
import intoBlue from '../assets/into-blue.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';



export const LandingPage = () => {
  return (
    <div className='landing'>
      <Parallax pages={3}>

        {/*first page layer */}
        <ParallaxLayer 
          speed={0.5}
          factor={1.5}
          style={{
            backgroundImage: `url(${swirl})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>

        {/*second page layer */}
        <ParallaxLayer 
          offset={1}
          speed={0.5}
          factor={1.5}
          style={{
            backgroundImage: `url(${intoBlue})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>

        {/*third page layer */}
        <ParallaxLayer 
          offset={2}
          speed={0.5}
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>

        {/*About layer */}
        <ParallaxLayer  
          speed={1}
          factor={1}
          style={{
            backgroundColor: '#c27ba0',
            maxHeight: '15%',
            maxWidth: '35%',
            borderRadius: "20px",
            opacity: '0.85',
            padding: '25px',
            marginTop: '20px',
            marginLeft: '60%'
          }}>
            <About />
        </ParallaxLayer>

        {/*RecentWork layer */}
        <ParallaxLayer  
          offset={0.5}
          speed={1}
          factor={1}
          style={{
            backgroundColor: '#c27ba0',
            maxHeight: '15%',
            maxWidth: '35%',
            borderRadius: "20px",
            opacity: '0.85',
            padding: '25px',
            margin: 'auto'
          }}>
            <RecentWork />
        </ParallaxLayer>

        {/*Technologies layer */}
        <ParallaxLayer 
          offset={2} 
          speed={1}
          factor={1}
          style={{
            backgroundColor: '#c27ba0',
            maxHeight: '15%',
            maxWidth: '35%',
            borderRadius: "20px",
            opacity: '0.85',
            padding: '25px',
          }}>
            <Technologies />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
