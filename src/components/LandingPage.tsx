import React from 'react';
import { About } from './About'
import { RecentWork } from './RecentWork';
import { Technologies } from './Technologies';
import swirl from '../assets/paint-swirl.jpg';
import house from '../assets/house.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';



export const LandingPage = () => {
  return (
    <div className='landing'>
      <Parallax pages={2}>
        //first page
        <ParallaxLayer 
          speed={1}
          style={{
            backgroundImage: `url(${swirl})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>
        //second page
        <ParallaxLayer 
          offset={1}
          speed={0.8}
          style={{
            backgroundImage: `url(${house})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>
        //About section
        <ParallaxLayer 
          speed={1}
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
        //Recent Work section
        <ParallaxLayer 
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
        //Technologies section
        <ParallaxLayer 
          offset={1}
          speed={1}
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
