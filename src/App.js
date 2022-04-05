import './App.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Stats from "./components/Stats"
import About from './components/About';

import { useEffect, useState } from 'react';
import ExploreArt from './components/ExploreArt';

function App() {

  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=6&page=${Math.floor(Math.random() * 20)}&fields=id,title,image_id,artist_title,thumbnail`)
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
      <ExploreArt artData={artData} />
    </div>
  );
}

export default App;


// ART

