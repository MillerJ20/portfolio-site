import React from 'react';

export const LandingPage = () => {
  return (
    <div className='landing'>
      <h2 className='landing-header'>I'm Miller!</h2>
      <div className='landing-content'>
        <div className='landing-content-container'>
          <h2 className='landing-content-header'>Software Engineer</h2>
            <ul>
            <li>Loves drum breaks/fills/solos</li>
            <li>Indie Game Development</li>
            <li>Dragon Quest enthusiast</li>
            <li>Frontend Engineer that specializes in modern Javascript frameworks/libraries</li>
            </ul>
        </div>
        <div className='landing-headshot'></div>
      </div>
    </div>
  );
};
