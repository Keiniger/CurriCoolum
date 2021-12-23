import React from "react";
import styles from "./WindowButtons.module.css";

export default function WindowButtons({ file, toggle }) {
  function toggleHide() {
    toggle("visible", file.id);
  }
  return (
    <div className={styles.windowButtonsContainer}>
      <p className={styles.windowTitle}> {file.title} </p>
      <button className={styles.windowButton}> m </button>
      <button className={styles.windowButton}> M </button>
      <button className={styles.windowButton} onClick={toggleHide}>
        X
      </button>
    </div>
  );
}
