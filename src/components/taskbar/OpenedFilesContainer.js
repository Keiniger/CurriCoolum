import React from "react";
import OpenedFile from "./OpenedFile";
import styles from "./OpenedFilesContainer.module.css";

export default function OpenedFilesContainer({ files }) {
  return (
    <div className={styles.container}>
      {files
        .filter((file) => file.isOnTaskbar)
        .sort((a, b) => a.x_index - b.x_index)
        .map((file) => (
          <OpenedFile file={file} key={file.id} />
        ))}
    </div>
  );
}
