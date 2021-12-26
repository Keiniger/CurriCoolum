import React from "react";
import styles from "./WindowButtons.module.css";

export default function WindowButtons({ file, windowAction }) {
  function minimizeHandler() {
    windowAction("make-minimize", file.id);
  }

  function maximizeHandler() {
    windowAction("toggle-maximize", file.id);
  }

  function closeHandler() {
    windowAction("make-close", file.id);
  }

  return (
    <div className={styles.windowHeader}>
      <div>
        <p className={styles.windowTitle}> {file.title} </p>
      </div>
      <div className={styles.windowButtonsContainer}>
        <button className={styles.windowButton} onClick={minimizeHandler}> m </button>
        <button className={styles.windowButton} onClick={maximizeHandler}> M </button>
        <button className={styles.windowButton} onClick={closeHandler}> X </button>
      </div>
    </div>
  );
}
