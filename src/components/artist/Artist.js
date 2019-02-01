import React from "react";

const Artist = ({ artist }) => (
  <article>
    <h1>About {artist.name}</h1>
    <p>{artist.profile ? artist.profile : "No data about the artist."}</p>
  </article>
);

export default Artist;
