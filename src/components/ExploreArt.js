import React from "react";
import ExploreArtCard from "./ExploreArtCard";

function ExploreArt({ artData }) {
  return (
    <article className="art-section-container">
    <div className="explore-art-header-container">
    <h2>Explore Top Artworks</h2></div>
    
    <section className="explore-art-container">
      {artData.data
        ? artData.data.map((artwork) => 
            <ExploreArtCard artwork={artwork} />
            )
        : null}
    </section>

    </article>
  );
}

export default ExploreArt;
