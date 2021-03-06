import React from "react";
import PropTypes from "prop-types";
import styles from "./Record.module.css";

const Record = ({ release }) => (
  <div className={styles.record}>
    <div className={styles.record__covers}>
      {release.images && release.images.length ? (
        Object.keys(release.images)
          .slice(0, 5)
          .map(key => (
            <div
              key={key}
              className={
                release.images[key].type === "primary"
                  ? styles.record__cover
                  : `${styles.record__cover} ${
                      styles["record__cover--secondary"]
                    }`
              }
            >
              <img
                className={styles.record__img}
                src={release.images[key].uri}
                alt={release.title}
              />
            </div>
          ))
      ) : (
        <p>No images found</p>
      )}
    </div>
    <article className={styles.record__details}>
      <h1 className={styles.record__artist}>
        {release.artists ? release.artists[0].name : "Unknown artist"}
      </h1>
      <h2 className={styles.record__title}>{release.title}</h2>
      <ul className={styles.record__songs}>
        {release.tracklist && release.tracklist.length ? (
          Object.keys(release.tracklist).map(key => (
            <li key={key} className={styles.record__song}>
              {release.tracklist[key].position} {release.tracklist[key].title}
            </li>
          ))
        ) : (
          <li className={styles.record__song}>No songs found</li>
        )}
      </ul>
      <p>
        {release.year ? `Released in ${release.year} - ` : ""}
        {release.labels ? `${release.labels[0].name}` : "Unknown record label"}
      </p>
    </article>
  </div>
);

Record.propTypes = {
  release: PropTypes.object.isRequired
};

export default Record;
