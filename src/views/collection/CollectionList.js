import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordActions from "../../components/record/RecordActions";

const CollectionList = ({ releases }) => {
  return !!releases.length ? (
    <div className="row">
      <RecordActions />
      <RecordList releases={releases} />
    </div>
  ) : (
    <div className="row">
      <p>Empty record collection.</p>
    </div>
  );
};

export default CollectionList;
