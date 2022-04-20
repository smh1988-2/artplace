import React from "react";
import ExploreArtCard from "./ExploreArtCard";
import { useEffect, useState } from "react";

function FeaturedArtist() {
  const [featuredArtistWorks, setFeaturedArtistWorks] = useState([]);
  const [featuredArtistSearch, setFeaturedArtistSearch] = useState("warhol")

  useEffect(() => {
    fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${featuredArtistSearch}&limit=3&fields=id,title,image_id,artist_title,thumbnail`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setFeaturedArtistWorks(resp);
      });
  }, [featuredArtistSearch]);

  function handleFeaturedArtistSubmit(e) {
    e.preventDefault();
    setFeaturedArtistSearch(e.target[0].value)
  }

  return (
    <article className="art-section-container">
      <div className="explore-art-header-container">
        <h2>Search Artists</h2>

        <div className="search-cta-container">
          <form className="menu-search-form" onSubmit={handleFeaturedArtistSubmit}>
            <input
              type="search"
              placeholder="🔍 &nbsp;Search"
              className="search-bar"
            />
          </form>
        </div>
      </div>

      <section className="explore-art-container">
        {featuredArtistWorks.data
          ? featuredArtistWorks.data.map((artwork) => (
              <ExploreArtCard artwork={artwork} />
            ))
          : <div><p>No results found 😢</p></div>}
      </section>
    </article>
  );
}

export default FeaturedArtist;
