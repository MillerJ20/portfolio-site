import React from 'react';
import { About } from './About'
import { RecentWork } from './RecentWork';
import { Technologies } from './Technologies';
import sky from '../assets/sky.jpg'
import birds from '../assets/birds.png'
import mountains from '../assets/mountains.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export const LandingPage = () => {
  return (
    <div className='landing'>
      <Parallax pages={2}>
        <ParallaxLayer 
        speed={0.5}
        factor={2}
        style={{
          backgroundImage: `url(${sky})`,
          backgroundSize: 'cover'
        }}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer 
        offset={0.5}
        speed={1}
        factor={1}
        style={{
          backgroundColor: '#7f64c2',
          maxHeight: '15%',
          maxWidth: '35%',
          borderRadius: "20px"
        }}>
          <RecentWork />
        </ParallaxLayer>

        <ParallaxLayer 
        offset={1.5} 
        speed={0.5}
        factor={3}
        style={{
          backgroundImage: `url(${mountains})`,
          backgroundSize: 'cover'
        }}>
          <Technologies />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
