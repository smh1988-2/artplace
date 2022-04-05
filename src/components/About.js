import React from "react";

function About( {artData }) {
  return (
    <section className="about-section">
        {artData.data ? <div className="about-image" style={{
              backgroundImage: `url(https://www.artic.edu/iiif/2/${artData.data[3].image_id}/full/843,/0/default.jpg)`
            }}></div> : null }
      
      <h2>The Story of ArtPLACE</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ante
        non metus varius maximus. Vivamus sed suscipit dolor. Donec tincidunt
        finibus magna eu egestas. Phasellus vel faucibus mi, at efficitur diam.
        Sed interdum non justo sed condimentum. Vivamus euismod fermentum
        mollis. Vivamus in eleifend urna.
      </p>
      <p>
        Donec at sapien luctus, feugiat orci non, suscipit elit. Nulla eu nunc
        ac libero tristique cursus. Curabitur condimentum, lectus ut luctus
        egestas, metus libero rhoncus lorem, sit amet eleifend orci metus id
        leo. Curabitur quis ullamcorper urna. Vivamus nibh libero, placerat sed
        mauris id, ultricies rutrum felis. Etiam rutrum nunc sit amet nisl
        facilisis, id bibendum ligula faucibus. Phasellus vulputate ipsum in
        egestas volutpat. Sed facilisis pellentesque sapien nec efficitur.
        Maecenas nec metus quis urna lobortis molestie non a sem.
      </p>
    </section>
  );
}

export default About;
