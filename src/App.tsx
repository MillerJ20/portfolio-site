import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import './App.css';
import React, { useEffect, useState } from 'react';

const navigation = {
  brand: { name: 'Miller Johnston | Software Engineer', to: '/' },
  links: [
    { name: 'LinkedIn', to: '/myLinkedInEventually' },
    { name: 'GitHub', to: '/technologies' },
    { name: 'Resume', to: '/recentWork' }
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
        <Navbar brand={brand} links={links} />
        <Routes>
          <Route path={brand.to} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
