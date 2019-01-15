import React from "react";
import RecordThumbnail from "./RecordThumbnail";

const RecordList = ({ releases }) => (
  <div className="record-list">
    {releases &&
      releases.map(release => (
        <RecordThumbnail key={release.id} {...release} />
      ))}
  </div>
);
export default RecordList;
