import React from "react";
import styles from "./OpenedFile.module.css"

export default function OpenedFile({ file, toggle }) {
  function makeVisible(){
    toggle("visible",file.id);
  }

  return (
    <button className={styles.fileOnTaskbar} onClick={makeVisible}>
    <div className={styles.icon}>{file.icon} </div><div className={styles.title}>{file.title}</div>
    </button>
  );
}
