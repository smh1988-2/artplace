import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="footer-text-container">
            <h1>
              <span className="brand-mark-first-word">Art</span>PLACE
            </h1>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
              ante non metus varius maximus. Vivamus sed suscipit dolor.
            </p>
          </div>

          <div>
            <h3>Menu</h3>
            <ul className="footer-menu">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Top Artworks</a>
              </li>
              <li>
                <a href="#">Featured Artist</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Subscribe for new art</h3>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="email"
              />
            </form>
          </div>
        </footer>
      </div>
      <small>&copy; Copyright 2022, Sean Hurley?</small>
    </>
  );
}

export default Footer;
