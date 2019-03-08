import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordActions from "../../components/record/RecordActions";
import VisitedRecordList from "../../components/record/VisitedRecordList";

const CollectionList = ({ releases, visitedReleases }) => (
  <>
    <div className="row">
      <RecordActions />
      <RecordList releases={releases} />
    </div>
    <div className="row">
      <VisitedRecordList visitedReleases={visitedReleases} />
    </div>
  </>
);

export default CollectionList;
