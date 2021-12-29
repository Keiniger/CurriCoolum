import React from "react";
import styles from "./WindowButtons.module.css";
import minimizeIcon from "./icons/MinimizeIcon.png"
import maximizeIcon from "./icons/MaximizeIcon.png"
import closeIcon from "./icons/CloseIcon.png"

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
    <div className={styles.windowHeader} >
      <p className={styles.windowTitle}> {file.title} </p>
      <div className={styles.windowButtonsContainer}>
        <img id="minimize" src={minimizeIcon} onClick={minimizeHandler} />
        <img id="maximize" src={maximizeIcon} onClick={maximizeHandler} />
        <img id="close" src={closeIcon} onClick={closeHandler} />
      </div>
    </div>
  );
}