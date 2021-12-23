import React from "react";
import File from "./File";
import styles from "./FileContainer.module.css";

export default function FileContainer({ files, windowAction }) {
  let filesIcons = <div />;
  if (Array.isArray(files)) {
    filesIcons = files.map((file) => (
      <File file={file} windowAction={windowAction} key={file.id} />
    ));
  }
  return <div className={styles.container}>{filesIcons}</div>;
}
