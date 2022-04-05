import React from "react";

function Hero({ artData }) {
  return (
    <section className="big-bubbles">
      {artData.data ? (
        <>
          <div
            className="bubble bubble1"
            style={{
              backgroundImage: `url(https://www.artic.edu/iiif/2/${artData.data[0].image_id}/full/843,/0/default.jpg)`,
            }}
          ></div>
          <div
            className="bubble bubble2"
            style={{
              backgroundImage: `url(https://www.artic.edu/iiif/2/${artData.data[1].image_id}/full/843,/0/default.jpg)`,
            }}
          ></div>
          <div className="bubble bubble3">
            <div className="bubble-heading-container">
              <h2>The Best Collection of Quality Art Prints</h2>
              <a href="#" className="hero-browse-button">
                Browse
              </a>
            </div>

            <div className="bubble-text-container">
              <p>
                Buy prints from your favourite artists. Buy prints from your
                favourite artists. Buy prints from your favourite artists.
              </p>
            </div>
          </div>
          <div
            className="bubble bubble4"
            style={{
              backgroundImage: `url(https://www.artic.edu/iiif/2/${artData.data[2].image_id}/full/843,/0/default.jpg)`,
            }}
          ></div>
        </>
      ) : null}
    </section>
  );
}

export default Hero;
