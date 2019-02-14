import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordActions from "../../components/record/RecordActions";

const CollectionList = ({ releases }) => (
  <div className="row">
    <RecordActions />
    <RecordList releases={releases} />
  </div>
);

export default CollectionList;
