import React from "react";
import styles from "./WindowButtons.module.css";

export default function WindowButtons({ file, windowAction, popup }) {
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
      <p className={styles.windowTitle} onClick={popup}>
        {file.title}
      </p>
      <div className={styles.windowButtonsContainer}>
        <img id="minimize" onClick={minimizeHandler} />
        <img id="maximize" onClick={maximizeHandler} />
        <img id="close" onClick={closeHandler} />
      </div>
    </div>
  );
}
