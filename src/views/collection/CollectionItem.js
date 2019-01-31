import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchRecord, fetchArtist } from "../../data/api/records";
import Record from "../../components/record/Record";

class CollectionItem extends Component {
  state = { release: {}, artist: {} };

  componentDidMount() {
    const { match } = this.props;
    const { recordId } = match.params;

    fetchRecord(recordId).then(release => {
      release.artists.length
        ? fetchArtist(release.artists[0].id).then(artist => {
            this.setState({ release, artist });
          })
        : this.setState({ release });
    });
  }

  render() {
    const { collectionPath } = this.props;
    const { release, artist } = this.state;

    return (
      <>
        {release && <Record release={release} />}
        <Link to={collectionPath} className="item">
          back
        </Link>
      </>
    );
  }
}

export default CollectionItem;
