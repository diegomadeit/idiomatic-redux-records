import React from "react";
import PropTypes from "prop-types";
import HoverLink from "../common/HoverLink";
import styles from "./VisitedRecordThumbnail.module.css";

const VisitedRecordThumbnail = ({ release }) => (
  <HoverLink
    to={`/records/release/${release.artists[0].id}/${release.id}`}
    className={styles.record__thumbnail}
    hoverClass={styles["record__thumbnail--hover"]}
  >
    <article className={styles.record}>
      <figure className={styles.record__figure}>
        <img
          className={styles.record__img}
          src={release.thumb}
          alt={release.title}
        />
      </figure>
    </article>
  </HoverLink>
);

VisitedRecordThumbnail.propTypes = {
  release: PropTypes.object.isRequired
};

export default VisitedRecordThumbnail;
