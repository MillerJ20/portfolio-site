import React from 'react';

export const Technologies = () => {
  return (
    <div className='technologies'>
      <h2 className='technologies-header'>My favorite technologies!</h2>
      <div className='technologies-content'>
        <div className='technologies-content-container'>
            <ul>
            <li>Redux</li>
            <li>React (this site is built in React w/Typescript)</li>
            <li>Svelte</li>
            <li>Node.js</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
