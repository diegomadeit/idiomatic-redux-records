import React from "react";
import RecordList from "../../components/Record/RecordList";

const CollectionList = props => {
  const { releases } = props;

  return <RecordList releases={releases} />;
};

export default CollectionList;
