import React from "react";

function ExploreArtCard({ artwork }) {
  return (
    <section
      className="art-card">
      <div
        style={{
          backgroundImage: `url(https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg)`,
        }}
        className="art-card-image"
      ></div>

      <div>
        <div className="art-card-overlay">
          <h3 className="art-card-title">{artwork.title}</h3>
          <h4 className="art-card-artist">{artwork.artist_title}</h4>
          <p className="art-card-description">{artwork.thumbnail.alt_text}</p>
        </div>
      </div>
    </section>
  );
}

export default ExploreArtCard;
