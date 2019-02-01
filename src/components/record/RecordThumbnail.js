import React from "react";
import HoverLink from "../common/HoverLink";
import styles from "./RecordThumbnail.module.css";

const RecordThumbnail = ({ basic_information }) => (
  <HoverLink
    to={`records/${basic_information.id}`}
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
        <figcaption className={styles.record__figcaption}>
          <h2 className={styles.record__artist}>
            {basic_information.artists.length
              ? basic_information.artists[0].name
              : "Unk."}
          </h2>
          <h3 className={styles.record__title}>{basic_information.title}</h3>
          <span className={styles.record__year}>
            {basic_information.year ? basic_information.year : "Unk."}
          </span>
        </figcaption>
      </figure>
    </article>
  </HoverLink>
);

export default RecordThumbnail;
