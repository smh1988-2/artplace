import './App.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Stats from "./components/Stats"
import About from './components/About';

import { useEffect, useState } from 'react';

function App() {

  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=5&page=${Math.floor(Math.random() * 20)}&fields=id,title,image_id,artist_title,thumbnail`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      setArtData(resp);
    })
  }, [])
  
  return (
    <div className="App">
      <Menu />
      <Hero artData={artData} />
      <Stats />
      <About artData={artData} />
    </div>
  );
}

export default App;


// MENU
// HERO
// STATS
// STORY
// ART

// https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=10&page=2&fields=id,title,image_id,artist_title,thumbnail