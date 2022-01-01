import React from "react";
import File from "./File";
import styles from "./FileContainer.module.css";

export default function FileContainer({ files }) {
  return (
    <div className={styles.container}>
      {Array.isArray(files) &&
        files
          .filter((file) => file.isOnDesktop === true)
          .sort((a, b) => b.id - a.id)
          .map((file) => <File file={file} key={file.id} />)}
    </div>
  );
}
