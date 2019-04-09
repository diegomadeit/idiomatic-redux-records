import React from "react";
import RecordList from "../../components/record/RecordList";
import RecordActions from "../../components/record/RecordActions";
import RecordListPagination from "../../components/record/RecordListPagination";

const Collection = ({ pagination, releases, collectionPath }) => (
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
  </>
);

export default Collection;
