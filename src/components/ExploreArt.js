import React from "react";
import ExploreArtCard from "./ExploreArtCard";

function ExploreArt({ artData }) {
  return (
    <>
    <h2>Explore Top Prints</h2>
    <section className="explore-art-container">
      

      {artData.data
        ? artData.data.map((artwork) => 
            <ExploreArtCard artwork={artwork} />
            )
        : null}
    </section>
    </>
  );
}

export default ExploreArt;
