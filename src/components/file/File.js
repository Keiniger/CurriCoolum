import {useContext} from "react";
import styles from "./File.module.css";
import {windowActionContext} from "../../App";

export default function File({ file }) {
  const windowAction = useContext(windowActionContext);
  function openWindowHandler() {
    windowAction("make-open", file.id);
  }
  return (
    <button className={styles.file} onClick={openWindowHandler}>
      <div className={styles.fileIcon}>{file.icon}</div>
      <p className={styles.fileText}>{file.title}</p>
    </button>
  );
}
