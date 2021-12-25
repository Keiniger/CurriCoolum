import { useEffect, useState } from "react";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function Taskbar({files, toggle}) {
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
        <button className={styles.start} onClick={useForceUpdate}> Start </button>
        <OpenedFilesContainer className={styles.openedFiles} files={files} toggle={toggle} useForceUpdate={useForceUpdate}/>
        <button className={styles.time}> {date} </button>
      </div>
    </>
  );
}
