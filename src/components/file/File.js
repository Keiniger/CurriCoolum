import React from "react";
import styles from "./File.module.css";

export default function File({ file }) {
  return (
    <button className={styles.file}>
      <div className={styles.fileIcon}>{file.icon}</div>
      <p className={styles.fileText}>{file.title}</p>
    </button>
  );
}
