import { useEffect, useState } from "react";
import styles from "./Taskbar.module.css";

export default function Taskbar() {
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
        <button className={styles.time}> {date?.curTime} </button>
      </div>
    </>
  );
}
