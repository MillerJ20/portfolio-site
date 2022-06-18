import React from 'react';
import me from '../assets/headShot.JPG'

export const About = () => {
  return (
    <div className='about'>
      <h2 className='about-header'>I'm Miller!</h2>
      <img src={me} className='landing-headshot'/>
      <div className='about-content'>
        <div className='about-content-container'>
          <h2 className='about-content-header'>Software Engineer</h2>
          <ul>
            <li>Frontend Engineer that specializes in modern Javascript frameworks/libraries</li>
            <li>Loves drum breaks/fills/solos</li>
            <li>Indie Game Development (Tell me what your current favorite punishingly difficult deckbuilding roguelike lifesim with incremental upgrades is)</li>
            <li>Dragon Quest enthusiast</li>
            </ul>
            <p>
              I am passionate about open-source work and consistently pushing myself to become a better engineer and person. I love learning new frontend frameworks, and most recently have been loving React with Typescript (that's what this site is built in!)<br />
              Use the navbar to find more details about my technical journey, what I have most recently worked on, and my favorite technologies!
            </p>
        </div>
      </div>
    </div>
  );
};
