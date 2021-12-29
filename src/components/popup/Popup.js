import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Popup.module.css";

export default function Popup({ files, windowAction }) {
  let { id } = useParams();
  let file = files[id - 1];

  return <div className={styles.popup}>{file.text}</div>;
}
