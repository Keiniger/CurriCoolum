import { useEffect, useState } from "react";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";

export default function Taskbar({files, toggle, windowAction}) {
  const [date, setDate] = useState( new Date().toLocaleString("es-AR") );

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString("es-AR"));
    }, 1000);
  });

  return (
    <>
      <hr />
      <div className={styles.taskbar}>
        <button className={styles.start}> Start </button>
        <OpenedFilesContainer className={styles.openedFiles} files={files} toggle={toggle} windowAction={windowAction}/>
        <button className={styles.time}> {date} </button>
      </div>
    </>
  );
}
