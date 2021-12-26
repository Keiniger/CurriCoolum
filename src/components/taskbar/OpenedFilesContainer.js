import React from "react";
import OpenedFile from "./OpenedFile";
import styles from "./OpenedFilesContainer.module.css"

export default function OpenedFilesContainer({ files, toggle, windowAction }) {
  return (
    <div className={styles.container}>
    {files.filter(file=>(
        file.isOnTaskbar
      )).sort((a,b)=>(
        a.index-b.index
      )).map((file) =>(
        <OpenedFile file={file} toggle={toggle} windowAction={windowAction} key={file.title.toString()}/>
      ))}
    </div>
  );
}
