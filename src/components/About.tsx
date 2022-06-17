import React from 'react';

export const About = (props: {
  changeTitle: (newTitle: string) => void;
}) => {
  const { changeTitle } = props;
  changeTitle("About Me");
  return (
    <div className='about'>
      <h2 className='about-header'>I'm Miller!</h2>
      <div className='about-content'>
        <div className='about-content-container'>
          <h2 className='about-content-header'>Software Engineer</h2>
            <ul>
            <li>Loves drum breaks</li>
            <li>Indie Game Development</li>
            <li>Dragon Quest enthusiast</li>
            <li>Frontend Engineer</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
