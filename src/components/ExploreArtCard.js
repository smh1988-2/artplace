import React from "react";

function ExploreArtCard({artwork}) {
    console.log(artwork)
  return (
    <section
      style={{
        backgroundImage: `url(https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg)`,
      }}
    >
      <h3>{artwork.title}</h3>
      <h4>{artwork.artist_title}</h4>
      <p>{artwork.thumbnail.alt_text}</p>
    </section>
  );
}

export default ExploreArtCard;
