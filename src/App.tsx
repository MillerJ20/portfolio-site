import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import { LandingPage } from './components/LandingPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import resume from './assets/Miller Johnston SWE Resume(B).pdf'

const navigation = {
  brand: { name: 'Miller Johnston | Software Engineer', to: '/' },
  links: [
    { name: 'LinkedIn', to: 'https://www.linkedin.com/in/miller-johnston/' },
    { name: 'GitHub', to: 'https://github.com/MillerJ20' },
    { name: 'Resume', to: `${resume}` }, 
    { name: 'Email', to: 'mailto: miller.johnston17@gmail.com'},
    { name: 'About', to: '/About'},
    { name: 'Blog', to: '/Blog'},
  ]
};

function App() {
  const [title] = useState('Miller J');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const { brand, links } = navigation;
  return (
    <div className="App">
      <BrowserRouter>
        <Menu links={links} />
      </BrowserRouter>
    </div>
  );
}

export default App;
