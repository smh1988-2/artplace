import React from "react";

function Stats() {
  return (
    <article className="stats-container">
      <section>
        <h3 className="stats-number">5000</h3>
        <p className="stats-sub">Artists</p>
      </section>
      <section>
      <h3 className="stats-number">1M+</h3>
        <p className="stats-sub">Prints</p>
      </section>
      <section>
      <h3 className="stats-number">300K</h3>
        <p className="stats-sub">Users</p>
      </section>
    </article>
  );
}

export default Stats;
