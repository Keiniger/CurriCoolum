import React from "react";
import styles from "./File.module.css";

export default function File({ file, windowAction }) {
  function openWindowHandler(){
    if(!file.isOnTaskbar){
      windowAction("updateTimestamp", file.id)
    }
    windowAction("open", file.id);
  }
  return (
    <button className={styles.file} onClick={openWindowHandler}>
      <div className={styles.fileIcon}>{file.icon}</div>
      <p className={styles.fileText}>{file.title}</p>
    </button>
  );
}
