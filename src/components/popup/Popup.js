import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Popup.module.css";
import files from "../contents/Contents";

export default function Popup() {
  let { lang, id } = useParams();
  let file = null;

  for (var i = 1; i <= files.length; i++) {
    if (files[i]?.id == id) {
      file = files[i];
      break;
    }
  }

  return file.content.text !== undefined ? (
    <div className={styles.container}>{file.content.text}</div>
  ) : file.content.image !== undefined ? (
    file.content.image
  ) : (
    "Error"
  );
}
