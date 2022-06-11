import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';

const navigation = {
  brand: { name: 'NavbarScroller', to: '/' },
  links: [
    { name: 'About Me', to: '/about' },
    { name: 'Technologies', to: '/technologies' },
    { name: 'Recent Work', to: '/recentWork' }
  ]
};

function App() {
  const { brand, links } = navigation;
  return (
    <div className="App">
      <Navbar brand={brand} links={links} />
    </div>
  );
}

export default App;
