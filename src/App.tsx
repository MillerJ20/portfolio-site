import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { RecentWork } from './components/RecentWork';
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
      <BrowserRouter>
        <Navbar brand={brand} links={links} />
        <Routes>
          <Route path={brand.to} element={<LandingPage/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='technologies' element={<Technologies/>}/>
          <Route path='recentWork' element={<RecentWork/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
