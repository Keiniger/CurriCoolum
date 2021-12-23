import { useEffect, useState } from "react";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";

export default function Taskbar({files, toggle}) {
  const [date, setDate] = useState({
    curTime: new Date().toLocaleString(),
  });

  useEffect(function () {
    setInterval(() => {
      setDate({
        curTime: new Date().toLocaleString("es-AR"),
      });
    }, 1000);
  });

  return (
    <>
      <hr />
      <div className={styles.taskbar}>
        <button className={styles.start}> Start </button>
        <OpenedFilesContainer files={files} toggle={toggle}/>
        <button className={styles.time}> {date?.curTime} </button>
      </div>
    </>
  );
}
