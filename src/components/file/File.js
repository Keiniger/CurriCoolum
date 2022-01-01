import {useContext} from "react";
import styles from "./File.module.css";
import {windowActionContext, languageContext} from "../../App";

export default function File({ file }) {
  const windowAction = useContext(windowActionContext);
  const [language, setLanguage] = useContext(languageContext);

  return (
    <button className={styles.file} onClick={()=>windowAction("make-open", file.id)}>
      <div className={styles.fileIcon}>{file.icon}</div>
      <p className={styles.fileText}>{file.title[language]}</p>
    </button>
  );
}
