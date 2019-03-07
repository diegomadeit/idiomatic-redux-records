import React from "react";
import HoverLink from "../common/HoverLink";
import styles from "./VisitedRecordThumbnail.module.css";

const VisitedRecordThumbnail = ({ basic_information }) => (
  <HoverLink
    to={`/records/release/${basic_information.id}`}
    className={styles.record__thumbnail}
    hoverClass={styles["record__thumbnail--hover"]}
  >
    <article className={styles.record}>
      <figure className={styles.record__figure}>
        <img
          className={styles.record__img}
          src={basic_information.cover_image}
          alt={basic_information.title}
        />
      </figure>
    </article>
  </HoverLink>
);

export default VisitedRecordThumbnail;
