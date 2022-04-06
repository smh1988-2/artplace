import React from "react";

function Footer() {
  return (
    <footer>
      <h1>
        <span className="brand-mark-first-word">Art</span>PLACE
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ante
        non metus varius maximus. Vivamus sed suscipit dolor.
      </p>

    <h3>Menu</h3>
      <ul>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
      </ul>

      <h3>Subscribe for new art</h3>
      <form>
          <input type="email" placeholder="Enter your email" />
      </form>

      <small>&copy; Copyright 2022, Sean Hurley?</small>
    </footer>
  );
}

export default Footer;
