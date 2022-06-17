import React from 'react';
import me from '../assets/headShot.JPG'

export const LandingPage = () => {
  return (
    <div className='landing'>
      <h2 className='landing-header'>I'm Miller!</h2>
        <img src={me} className='landing-headshot'/>
      <div className='landing-content'>
        <div className='landing-content-container'>
          <h2 className='landing-content-header'>Software Engineer</h2>
            <ul>
            <li>Frontend Engineer that specializes in modern Javascript frameworks/libraries</li>
            <li>Loves drum breaks/fills/solos</li>
            <li>Indie Game Development (Tell me what your current favorite punishingly difficult deckbuilding roguelike lifesim with incremental upgrades is)</li>
            <li>Dragon Quest enthusiast</li>
            </ul>
            <p>
              I am passionate about open-source work and consistently pushing myself to become a better engineer and person. 
              Use the navbar to find out more about my technical journey, what I have most recently worked on, and my favorite technologies!
            </p>
        </div>
      </div>
    </div>
  );
};
