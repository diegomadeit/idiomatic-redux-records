import React from "react";
import PropTypes from "prop-types";

const Artist = ({ artist }) => (
  <article>
    <h1>About {artist.name}</h1>
    <p>{artist.profile ? artist.profile : "No data about the artist."}</p>
  </article>
);

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
