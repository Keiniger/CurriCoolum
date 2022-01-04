import { useEffect, useState } from "react";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";

export default function Taskbar({files}) {
  const [date, setDate] = useState( new Date().toLocaleString("es-AR") );

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString("es-AR"));
    }, 1000);
  });

  return (
    <>
      <hr className={styles.hr}/>
      <div className={styles.taskbar}>
        <div className={styles.start}> Start </div>
        <OpenedFilesContainer className={styles.openedFiles} files={files} />
        <div className={styles.time}> {date} </div>
      </div>
    </>
  );
}
