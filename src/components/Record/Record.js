import React from "react";

const Record = ({ basic_information }) => (
  <div className="record">
    {basic_information.title}
    <br />
    <img src={basic_information.cover_image} alt={basic_information.title} />
  </div>
);

export default Record;
