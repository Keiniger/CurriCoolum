import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";
import { defaultLang } from "../../App";

export default function Taskbar({ files }) {
  const { lang } = useParams();
  const language = lang || defaultLang;

  const start = {
    es: "Inicio",
    en: "Start",
    it: "Inizio",
    de: "Anfang",
  };

  const time = {
    es: "es-AR",
    en: "en-US",
    it: "it-IT",
    de: "de-DE",
  };

  const [date, setDate] = useState(new Date().toLocaleString(time[language]));

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString(time[language]));
    }, 1000);
  });

  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.taskbar}>
        <div className={styles.start}> {start[language]} </div>
        <OpenedFilesContainer className={styles.openedFiles} files={files} />
        <div className={styles.time}> {date} </div>
      </div>
    </>
  );
}
