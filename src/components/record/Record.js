import React from "react";
import styles from "./Record.module.css";

const Record = ({ release }) => (
  <div className={styles.record}>
    <div className={styles.record__covers}>
      {release.images &&
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
          ))}
    </div>
    <article className={styles.record__details}>
      <h1 className={styles.record__artist}>
        {release.artists && release.artists[0].name}
      </h1>
      <h2 className={styles.record__title}>{release.title}</h2>
      <ul className={styles.record__songs}>
        {release.tracklist &&
          Object.keys(release.tracklist).map(key => (
            <li key={key} className={styles.record__song}>
              {release.tracklist[key].position} {release.tracklist[key].title}
            </li>
          ))}
      </ul>
      <p>
        {release.year ? `Released in ${release.year} - ` : ""}
        {release.labels ? `${release.labels[0].name}` : ""}
      </p>
    </article>
  </div>
);

export default Record;
