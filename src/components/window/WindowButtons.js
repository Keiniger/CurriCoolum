import React from "react";
import styles from "./WindowButtons.module.css";

export default function WindowButtons({ file, toggle, windowAction }) {
  function minimizeHandler(){
    windowAction("minimize", file.id);
  }

  function maximizeHandler(){
    windowAction("maximize", file.id);
  }

  function closeHandler(){
    windowAction("close", file.id);
  }
  return (
    <div className={styles.windowButtonsContainer}>
      <p className={styles.windowTitle}> {file.title} </p>
      <button className={styles.windowButton} onClick={minimizeHandler}> m </button>
      <button className={styles.windowButton} onClick={maximizeHandler}> M </button>
      <button className={styles.windowButton} onClick={closeHandler}> X </button>
    </div>
  );
}
