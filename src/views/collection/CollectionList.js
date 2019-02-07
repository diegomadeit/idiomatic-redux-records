import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordSorters from "../../components/record/RecordSorters";

const CollectionList = ({ releases }) => (
  <div className="row">
    <RecordSorters />
    <RecordList releases={releases} />
  </div>
);

export default CollectionList;
