import {useContext} from "react";
import styles from "./OpenedFile.module.css";
import {windowActionContext} from "../../App";

export default function OpenedFile({ file}) {
  const windowAction = useContext(windowActionContext);
  function handleClick() {
    if(file.isVisible) {
      if(!file.isSelected){
        windowAction("make-open", file.id);
      } else {
        windowAction("make-minimize", file.id);
      }
    } else {
      windowAction("make-open", file.id);
    }
  }

  return (
    <button
      className={
        file.isSelected ? styles.fileOnTaskbarSelected : styles.fileOnTaskbar
      }
      onClick={handleClick}
    >
      <div className={styles.icon}>{file.icon} </div>
      <div className={styles.title}>{file.title}</div>
    </button>
  );
}
