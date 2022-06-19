import React from 'react';
import redux from '../assets/reduxLogo.png';
import react from '../assets/reactLogo.png';
import svelte from '../assets/svelteLogo.svg'
export const Technologies = () => {
  return (
    <div className="tech">
      <h2 className="tech-header">My Favorite Technologies:</h2>
      <div className="tech-content">
        <div className="tech-container">
          <h2 className="tech-container-header">React</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Dynamic <br />
                ► Modular <br />
                ► Unopinionated <br />
                ► Fast <br />
                ► Rich Ecosystem <br />
              </p>
            </div>
            <img src={react} alt="react-icon" className="react-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Redux</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Predictable <br />
                ► Maintainable <br />
                ► Debuggable <br />
                ► Scalable <br />
                ► Performant <br />
              </p>
            </div>
            <img src={redux} alt="redux-icon" className="redux-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Svelte</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Compiled <br />
                ► Intuitive syntax <br />
                ► 2-way binding <br />
                ► Quick to start <br />
              </p>
            </div>
            <img src={svelte} alt="svelte-icon" className="svelte-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Notable Mentions</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► HTML/CSS/SASS <br />
                ► SQL/NoSQL <br />
                ► Webpack/Rollup <br />
                ► Node.js/Express.js <br />
                ► Git Workflow <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
