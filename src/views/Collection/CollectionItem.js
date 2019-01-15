import React from "react";
import { Link } from "react-router-dom";
import Record from "../../components/Record/Record";

const CollectionItem = props => {
  const { collectionPath, release } = props;

  return (
    <div>
      {release && <Record {...release} />}
      <Link to={collectionPath} className="item">
        back
      </Link>
    </div>
  );
};

export default CollectionItem;
