import React from 'react';
import { About } from './About';
import { RecentWork } from './RecentWork';
import { Technologies } from './Technologies';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import swirl from '../assets/paint-swirl.jpg';
import blue from '../assets/blue.jpg';
import intoBlue from '../assets/into-blue.jpg';
import me from '../assets/me.jpg';

export const LandingPage = () => {
  return (
    <div className="landing">
      <Parallax pages={3}>
        {/*first page layer */}
        <ParallaxLayer
          speed={0.3}
          factor={1.5}
          style={{
            backgroundImage: `url(${swirl})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>

        {/*second page layer */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          factor={1.5}
          style={{
            backgroundImage: `url(${intoBlue})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>

        {/*third page layer */}
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            backgroundImage: `url(${blue})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>

        {/*About layer */}
        <ParallaxLayer
          speed={1}
          factor={1}
          style={{
            backgroundColor: '#fcb3dd',
            maxHeight: '15%',
            maxWidth: '35%',
            borderRadius: '20px',
            opacity: '0.9',
            padding: '25px',
            marginTop: '5%',
            marginLeft: '45%'
          }}
        >
          <About />
        </ParallaxLayer>

        {/* it's me! */}
        <ParallaxLayer
          speed={.25}
          factor={0.75}
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50px',
            height: '30%',
            width: '40%',
            marginTop: '20px',
            marginLeft: '2.5%'
          }}
        >
        </ParallaxLayer>

        {/*RecentWork layer */}
        <ParallaxLayer
          offset={0.75}
          speed={1}
          factor={1}
          style={{
            backgroundImage: 'linear-gradient(#fcb3dd, #0000FF)',
            maxHeight: '15%',
            maxWidth: '35%',
            borderRadius: '20px',
            opacity: '0.85',
            padding: '25px',
            margin: 'auto'
          }}
        >
          <RecentWork />
        </ParallaxLayer>

        {/*Technologies layer */}
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={1}
          style={{
            backgroundColor: 'rgb(75, 105, 238)',
            maxHeight: '15%',
            maxWidth: '35%',
            borderRadius: '20px',
            opacity: '0.90',
            padding: '25px',
            marginLeft: '2.5%'
          }}
        >
          <Technologies />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
