import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Popup.module.css";

export default function Popup({ files }) {
  let { id } = useParams();
  let file = files[id - 1];

  return file.content.text !== undefined ? (
    <div className={styles.container}>{file.text}</div>
  ) : file.content.image !== undefined ? (
    file.content.image
  ) : (
    "Error"
  );
}
