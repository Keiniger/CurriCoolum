import {useContext} from "react";
import styles from "./WindowButtons.module.css";
import {windowActionContext} from "../../App";

export default function WindowButtons({ file, popup }) {
  const windowAction = useContext(windowActionContext);

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
        <img className={styles.windowButton} id="minimize" onClick={minimizeHandler} />
        <img className={styles.windowButton} id="maximize" onClick={maximizeHandler} />
        <img className={styles.windowButton} id="close" onClick={closeHandler} />
      </div>
    </div>
  );
}
