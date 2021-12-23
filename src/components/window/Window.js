import React from "react";
import { useState } from "react";
import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import WindowButtons from "./WindowButtons";

export default function Window({file, toggle}) {
  return (
    <Rnd
      className={styles.Rnd}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <WindowButtons file={file} toggle={toggle}/>
      <h2>{file.text}</h2>
    </Rnd>
  );
}
