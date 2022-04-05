import React from "react";

function Menu() {
  return (
    <header>
      <h1><span className="brand-mark-first-word">Art</span>PLACE</h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Art</li>
        </ul>
      </nav>

      <div className="search-cta-container">
        <form className="menu-search-form">
          <input type="search" placeholder="🔍 &nbsp;Search" className="search-bar" />
        </form>
        <a href="#" className="menu-cta">Buy now</a>
      </div>

    </header>
  );
}

export default Menu;
