import React from "react";
import OpenedFile from "./OpenedFile";
import styles from "./OpenedFilesContainer.module.css"

export default function OpenedFilesContainer({ files, toggle }) {
  return (
    <div className={styles.container}>
    {files.filter((file)=> file.isOnTaskbar === true).map((file) => <OpenedFile file={file} toggle={toggle} key={file.id} />)}
    </div>
  );
}
