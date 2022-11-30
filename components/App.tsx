import { Header } from './Header';
import { Menu } from './Menu';
import { useEffect, useState } from 'react';

const navigation = {
  brand: { name: 'Miller Johnston | Software Engineer', to: '/' },
  links: [
    { name: 'LinkedIn', to: 'https://www.linkedin.com/in/miller-johnston/' },
    { name: 'GitHub', to: 'https://github.com/MillerJ20' },
    { name: 'Resume', to: '/assets/Miller Johnston SWE Resume(B).pdf'}, 
    { name: 'Email', to: 'mailto: miller.johnston17@gmail.com'},
    { name: 'About Me', to: '/About'},
    { name: 'Blog Posts', to: '/BlogList'},
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
      <Header brand={brand}/>
        <Menu links={links} />
    </div>
  );
}

export default App;
