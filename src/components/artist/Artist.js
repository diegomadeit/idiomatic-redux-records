import React from "react";

const Artist = ({ artist }) => (
  <article>
    <h1>About {artist.name}</h1>
    <p>{artist.profile}</p>
  </article>
);

export default Artist;
