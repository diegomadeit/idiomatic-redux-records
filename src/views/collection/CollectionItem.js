import React from "react";
import Record from "../../components/record/Record";
import Artist from "../../components/artist/Artist";
import HoverLink from "../../components/common/HoverLink";

const CollectionItem = ({ collectionPath, release, artist }) => (
  <>
    <div className="row">{<Record release={release} />}</div>
    <div className="row">{<Artist artist={artist} />}</div>
    <div className="row">
      <HoverLink
        to={collectionPath}
        className="button"
        hoverClass="button--hover"
      >
        <span>Back to collection</span>
      </HoverLink>
    </div>
  </>
);

export default CollectionItem;
