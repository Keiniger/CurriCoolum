import React from "react";
import { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import WindowButtons from "./WindowButtons";

export default function Window({ file, toggle, windowAction }) {
  const { height, width } = useWindowDimensions();
  const defaultHeight = height*0.3, defaultWidth = width*0.3;

  return (
    <Rnd
      className={styles.Rnd}
      bounds="window"
      minHeight="200"
      minWidth="200"
      default={{
        y: Math.random() * (height-defaultHeight),
        x: Math.random() * (width-defaultWidth),
        height: defaultHeight,
        width: defaultWidth,
      }}
      style={{visibility:file.isVisible?"visible":"hidden"}}
    >
      <WindowButtons file={file} 
        toggle={toggle}
        windowAction={windowAction}
      />
      <h2>{file.text}</h2>
    </Rnd>
  );
}
