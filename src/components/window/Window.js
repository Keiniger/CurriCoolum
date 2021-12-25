import { useState, useRef, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import WindowButtons from "./WindowButtons";

export default function Window({ file, toggle, windowAction }) {
  const rnd = useRef(null);
  const [wasMaximized, setWasMaximized] = useState(false);
  const [prevSize, setPrevSize] = useState({ width: 0, height: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const { maxHeight, maxWidth } = useWindowDimensions();

  function toTop() {
    windowAction("open", file.id);
    windowAction("select", file.id);

  }

  function getCurrentSize() {
    return {
      width: rnd.current.resizable.state.width,
      height: rnd.current.resizable.state.height,
    };
  }

  function getCurrentPosition() {
    return rnd.current.originalPosition;
  }
  
  useEffect(() => {
    function maximize() {
      rnd.current.updateSize({
        width: maxWidth,
        height: maxHeight - 34,
      });
      rnd.current.updatePosition({
        x: 0,
        y: 0,
      });
    }
    function demaximize(size, position) {
      rnd.current.updateSize(size);
      rnd.current.updatePosition(position);
    }

    if (file.isMaximized) {
      let currentSize = getCurrentSize();
      let currentPosition = getCurrentPosition();

      setPrevSize(currentSize);
      setPrevPosition(currentPosition);
      maximize();
      setWasMaximized(true);
    } else if (wasMaximized) {
      demaximize(prevSize, prevPosition);
      setWasMaximized(false);
    }
  }, [file.isMaximized, maxHeight, maxWidth]);

  return (
    <Rnd
      className={file.isSelected? styles.RndSelected : styles.Rnd}
      bounds="window"
      minHeight="200"
      minWidth="200"
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      default={{
        y: file.y * maxHeight,
        x: file.x * maxWidth,
        height: file.height * maxHeight,
        width: file.width * maxWidth,
      }}
      ref={rnd}
      disableDragging={file.isMaximized}
      enableResizing={!file.isMaximized}
      style={{ visibility: file.isVisible ? "visible" : "hidden" }}
      onMouseDown={toTop}
    >
      <div>
        <WindowButtons
          file={file}
          toggle={toggle}
          windowAction={windowAction}
        />
        <h2>{file.text}</h2>
      </div>
    </Rnd>
  );
}
