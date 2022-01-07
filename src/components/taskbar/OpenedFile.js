import {useContext} from "react";
import styles from "./OpenedFile.module.css";
import {windowActionContext, languageContext} from "../../App";

export default function OpenedFile({ file}) {
  const windowAction = useContext(windowActionContext);
  const [language, setLanguage] = useContext(languageContext);
  
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
    <div
      id="openedFile"
      className={
        file.isSelected ? styles.fileOnTaskbarSelected : styles.fileOnTaskbar
      }
      onClick={handleClick}
    >
      <div className={styles.icon}>{file.icon} </div>
      <div className={styles.title}>{file.title[language]}</div>
    </div>
  );
}
