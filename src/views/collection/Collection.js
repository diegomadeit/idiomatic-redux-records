import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordActions from "../../components/record/RecordActions";
import VisitedRecordList from "../../components/record/VisitedRecordList";
import RecordListPagination from "../../components/record/RecordListPagination";

const Collection = ({
  pagination,
  releases,
  visitedReleases,
  collectionPath
}) => (
  <>
    <div className="row">
      <RecordActions />
    </div>
    <div className="row">
      <RecordList releases={releases} />
    </div>
    <div className="row">
      <RecordListPagination
        pagination={pagination}
        collectionPath={collectionPath}
      />
    </div>
    <div className="row">
      <VisitedRecordList visitedReleases={visitedReleases} />
    </div>
  </>
);

export default Collection;
