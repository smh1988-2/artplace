import React from "react";
import ExploreArtCard from "./ExploreArtCard";

function ExploreArt({ artData }) {
  return (
    <article>
    <div className="explore-art-header-container">
    <h2>Explore Top Prints</h2></div>
    
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
