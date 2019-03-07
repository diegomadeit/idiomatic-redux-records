import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordActions from "../../components/record/RecordActions";

const CollectionList = ({ releases }) => (
  <div className="row">
    <RecordActions />
    {!!releases.length ? (
      <RecordList releases={releases} />
    ) : (
      <p>Artist not found in the collection.</p>
    )}
  </div>
);

export default CollectionList;
