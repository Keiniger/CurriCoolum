import React from "react";
import styles from "./WindowButtons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSquare, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const closeIcon = <FontAwesomeIcon icon={faTimes} />;
const maximizeIcon = <FontAwesomeIcon icon={faSquare} />;
const minimizeIcon = <FontAwesomeIcon icon={faAngleDown} />;

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
      <p className={styles.windowTitle}> {file.title} </p>
      <div className={styles.windowButtonsContainer}>
        <button className={styles.windowButton} onClick={minimizeHandler}> {minimizeIcon} </button>
        <button className={styles.windowButton} onClick={maximizeHandler}> {maximizeIcon} </button>
        <button className={styles.windowButton} onClick={closeHandler}> {closeIcon} </button>
      </div>
    </div>
  );
}
