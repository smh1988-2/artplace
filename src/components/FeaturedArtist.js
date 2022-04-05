import React from "react";
import ExploreArtCard from "./ExploreArtCard";
import { useEffect, useState } from "react";

function FeaturedArtist() {
  const [featuredArtist, setFeaturedArtist] = useState([]);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=warhol&limit=3&fields=id,title,image_id,artist_title,thumbnail`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setFeaturedArtist(resp);
      });
  }, []);

  return (
    <section className="featured-artist-container">
      <div className="explore-art-header-container">
        <h2>Featured Artist</h2>
      </div>

      <section className="explore-art-container">
        {featuredArtist.data
          ? featuredArtist.data.map((artwork) => (
              <ExploreArtCard artwork={artwork} />
            ))
          : null}
      </section>
    </section>
  );
}

export default FeaturedArtist;
