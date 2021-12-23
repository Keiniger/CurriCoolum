import { useState, useEffect } from "react";
import "./App.css";
import background from "./assets/tron.mp4";
import FileContainer from "./components/file/FileContainer";
import Taskbar from "./components/taskbar/Taskbar";
import Window from "./components/window/Window";

function App() {
  const files = [
    {
      id: 1,
      title: "Portfolio.js",
      src: "",
      text: "Aca van proyectos de mi portfolio.",
      isMaximized: true,
      isWindowVisible: true,
      isOnTaskbar: true,
    },
    {
      id: 2,
      title: "Conocimientos.doc",
      src: "",
      text: "Aca van lenguajes, frameworks, etc.",
      isMaximized: true,
      isWindowVisible: true,
      isOnTaskbar: true,
    },
    {
      id: 3,
      title: "Intereses.txt",
      src: "",
      text: "Aca van mis pasatiempos.",
      isMaximized: true,
      isWindowVisible: true,
      isOnTaskbar: true,
    },
  ];
  const [filesState, setFilesState] = useState(files);

  function getElement(id) {
    return filesState.find((file) => file.id === id);
  }

  // Returns new list without that element
  function removeElement(id) {
    return filesState.filter((file) => file.id !== id);
  }

  function toggle(type, id) {
    var element = getElement(id);
    console.log(element);
    console.log(filesState);
    switch (type) {
      case "maximize":
        {
          const newElement = { ...element, isMaximized: !element.isMaximized };
          setFilesState((prevState) => [...removeElement(id), newElement]);
          console.log(newElement);
          console.log(filesState);
        }
        break;
      case "visible":
        {
          const newElement = { ...element, isVisible: !element.isVisible };
          setFilesState((prevState) => [...removeElement(id), newElement]);
        }
        break;
      case "onTaskbar":
        {
          const newElement = { ...element, isOnTaskbar: !element.isOnTaskbar };
          setFilesState((prevState) => [...removeElement(id), newElement]);
        }
        break;
      default:
        {
          console.log("Error al usar toggle");
        }
        break;
    }
  }

  let windows = <div />;
  if (Array.isArray(filesState)) {
    windows = filesState.map(
      (file) =>
        file.isVisible || <Window file={file} toggle={toggle} key={file.id} />
    );
  }

  return (
    <div className="App">
      <video src={background} playsInline autoPlay muted loop id="bgvid" />
      <FileContainer files={filesState} />
      {windows}
      <Taskbar />
    </div>
  );
}

export default App;
