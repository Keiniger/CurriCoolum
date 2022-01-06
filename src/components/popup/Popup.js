import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Popup.module.css";
import files from "../contents/Contents";
import { name } from "../../App";

export default function Popup() {
  let { lang, id } = useParams();
  let file = files.filter((file) => file.id == id)[0];
  console.log(file);
  document.documentElement.setAttribute("lang", lang);
  document.title = `${file.title[lang]} - ${name[lang]}`;

  return (
    <div className={styles.blur}>
      <div className={styles.container}>
        {file.content.text !== undefined ? (
          file.content.text
        ) : file.content.image !== undefined ? (
          <img
            src={file.content.image}
            alt={file.content.alt}
            styles={{ maxWidth: "100%", objectFit: "cover" }}
          />
        ) : (
          Error
        )}
      </div>
    </div>
  );
}
