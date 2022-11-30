import redux from '../public/images/reduxLogo.png';
import react from '../public/images/reactLogo.png';
import svelte from '../public/images/svelteLogo.svg'

import Image from 'next/image';
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
                ► Virtual DOM <br />
                ► Unopinionated <br />
                ► Fast rerenders <br />
                ► Rich Ecosystem <br />
              </p>
            </div>
            <Image src={react} alt="react-icon" className="tech-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Redux</h2>
          <div className="tech-container-content">
              <p className='tech-container-content-words'>
                ► Predictable <br />
                ► Maintainable <br />
                ► Debuggable <br />
                ► Scalable <br />
                ► Performant <br />
              </p>
            <Image src={redux} alt="redux-icon" className="tech-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Svelte</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► Compiled <br />
                ► True reactivity<br />
                ► 2-way binding <br />
                ► Fast <br />
              </p>
            </div>
            <Image src={svelte} alt="svelte-icon" className="tech-icon" />
          </div>
        </div>
        <div className="tech-container">
          <h2 className="tech-container-header">Notable Mentions</h2>
          <div className="tech-container-content">
            <div className="tech-container-content-words">
              <p>
                ► HTML/CSS/SASS <br />
                ► SQL/NoSQL <br />
                ► Next.js <br />
                ► Node.js/Express.js <br />
                ► Typescript <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
