import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { RecentWork } from './components/RecentWork';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

const navigation = {
  brand: { name: 'Miller Johnston', to: '/' },
  links: [
    { name: 'About Me', to: '/about' },
    { name: 'Technologies', to: '/technologies' },
    { name: 'Recent Work', to: '/recentWork' }
  ]
};

function App() {
  const [title, setTitle] = useState('Miller J');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const changeTitle = useCallback((newTitle: string): void => {
    setTitle(newTitle);
  }, [title]);

  const { brand, links } = navigation;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar brand={brand} links={links} />
        <Routes>
          <Route path={brand.to} element={<LandingPage />} />
          <Route path="/about" element={<About changeTitle={changeTitle}/>} />
          <Route path="technologies" element={<Technologies changeTitle={changeTitle}/>} />
          <Route path="recentWork" element={<RecentWork changeTitle={changeTitle}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
