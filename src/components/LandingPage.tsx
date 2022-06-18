import React from 'react';
import { About } from './About'
import { RecentWork } from './RecentWork';
import { Technologies } from './Technologies';
import swirl from '../assets/paint-swirl.jpg'
import arches from '../assets/low-arches.jpg'
import drip from '../assets/paint-drip.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export const LandingPage = () => {
  return (
    <div className='landing'>
      <Parallax pages={3}>
        <ParallaxLayer 
        speed={0.7}
        factor={1.5}
        style={{
          backgroundImage: `url(${swirl})`,
          backgroundSize: 'cover'
        }}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer 
        offset={1}
        speed={.5}
        factor={2}
        style={{
          backgroundImage: `url(${arches})`,
          backgroundSize: 'cover'
        }}>
          <RecentWork />
        </ParallaxLayer>
        <ParallaxLayer 
        offset={2} 
        speed={1.5}
        factor={1}
        style={{
          backgroundImage: `url(${drip})`
        }}>
          <Technologies />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
