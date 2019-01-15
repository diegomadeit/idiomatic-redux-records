import React from "react";
import { Link } from "react-router-dom";

const RecordThumbnail = ({ basic_information }) => (
  <div className="record-thumbnail">
    {basic_information.title}
    {basic_information.year}
    {basic_information.artists.map(artist => (
      <span key={artist.id}>{artist.name}</span>
    ))}
    <br />
    <Link to={`records/${basic_information.id}`}>
      <img src={basic_information.cover_image} alt={basic_information.title} />
    </Link>
  </div>
);

export default RecordThumbnail;
