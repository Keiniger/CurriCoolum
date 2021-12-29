import { useState, useRef, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import WindowButtons from "./WindowButtons";
import ReactDOMServer from "react-dom/server";

export default function Window({ file, windowAction }) {
  const rnd = useRef(null);
  const [wasMaximized, setWasMaximized] = useState(false);
  const [prevSize, setPrevSize] = useState({ width: 0, height: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [disableDragging, setDisableDragging] = useState(false);
  const { browserHeight, browserWidth } = useWindowDimensions();

  /*
  // Handles window reposition and resizing when browser size changes, can't make it work :()
  const [beforeAfterRatio, setBeforeAfterRatio] = useState({
    height: 1,
    width: 1,
    ratio_x: 1,
    ratio_y: 1,
  });
  useEffect(() => {
    console.log(beforeAfterRatio);

    let currentSize = getCurrentSize();
    let currentPosition = getCurrentPosition();
    
    setBeforeAfterRatio((prevState) => ({
      height: browserHeight,
      width: browserWidth,
      ratio_x: prevState.height/browserHeight,
      ratio_y: prevState.width/browserWidth,
    }));
    
    rnd.current.updateSize({
      width: currentSize.width * beforeAfterRatio.ratio_x,
      height: currentSize.height * beforeAfterRatio.ratio_y,
    });
    rnd.current.updatePosition({
      x: currentPosition.x * beforeAfterRatio.ratio_x,
      y: currentPosition.y * beforeAfterRatio.ratio_y,
    });
  }, [browserHeight, browserWidth]);
*/

  function toTop() {
    windowAction("make-open", file.id);
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

  function maximize() {
    rnd.current.updateSize({
      width: browserWidth,
      height: browserHeight - 34,
    });
    rnd.current.updatePosition({
      x: 0,
      y: 0,
    });
    setWasMaximized(true);
  }

  function demaximize(size, position) {
    rnd.current.updateSize(size);
    rnd.current.updatePosition(position);
    setWasMaximized(false);
  }

  useEffect(() => {
    if (file.isMaximized) {
      let currentSize = getCurrentSize();
      let currentPosition = getCurrentPosition();
      setPrevSize(currentSize);
      setPrevPosition(currentPosition);
      maximize();
    } else if (wasMaximized) {
      demaximize(prevSize, prevPosition);
    }
  }, [file.isMaximized, browserHeight, browserWidth]);

  function popup() {
    windowAction("make-minimize", file.id);
    let currentSize = getCurrentSize();
    let currentPosition = getCurrentPosition();

    let popupWindow = window.open(
      `${window.location.origin}/popup/${file.id}`,
      file.title,
      `width=${currentSize.width},height=${currentSize.height - 32},left=${
        currentPosition.x - 7
      },top=${
        currentPosition.y + 33 + 7
      },location=no,menubar=no,status=no,titlebar=no`
    );

    popupWindow.onbeforeunload = function () {
      windowAction("make-open", file.id);
      if (!file.isMaximized) {
        rnd.current.updatePosition({
          x: popupWindow.screenX,
          y: popupWindow.screenY,
        });
        rnd.current.updateSize({
          width: popupWindow.innerWidth,
          height: popupWindow.innerHeight,
        });
      }
    };

    console.log(popupWindow);
  }

  return (
    <Rnd
      className={
        file.isMaximized
          ? styles.RndMaximized
          : file.isSelected
          ? styles.RndSelected
          : styles.Rnd
      }
      bounds="window"
      minHeight="300"
      minWidth="300"
      maxHeight={browserHeight}
      maxWidth={browserWidth}
      default={{
        y: file.y * browserHeight,
        x: file.x * browserWidth,
        height: file.height * browserHeight,
        width: file.width * browserWidth,
      }}
      ref={rnd}
      disableDragging={file.isMaximized || disableDragging}
      enableResizing={!file.isMaximized}
      style={{
        visibility: file.isVisible ? "visible" : "hidden",
        zIndex: file.z_index,
      }}
      onDragStart={toTop}
      onResizeStart={toTop}
    >
      <WindowButtons file={file} windowAction={windowAction} popup={popup} />
      <div
        className={styles.contents}
        onMouseEnter={() => setDisableDragging(true)}
        onMouseLeave={() => setDisableDragging(false)}
        onMouseDown={toTop}
      >
        {file.text}
      </div>
    </Rnd>
  );
}
