import { useState, useEffect } from "react";
import "./App.css";
import background from "./assets/tron.mp4";
import FileContainer from "./components/file/FileContainer";
import Taskbar from "./components/taskbar/Taskbar";
import Window from "./components/window/Window";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const textIcon = <FontAwesomeIcon icon={faFileAlt} />
  const files = [
    {
      id: 1,
      title: "Portfolio.js",
      icon: textIcon,
      text: "Aca van proyectos de mi portfolio.",
      isMaximized: false,
      isVisible: true,
      isOnTaskbar: true,
    },
    {
      id: 2,
      title: "Conocimientos.doc",
      icon: textIcon,
      text: "Aca van lenguajes, frameworks, etc.",
      isMaximized: false,
      isVisible: true,
      isOnTaskbar: true,
    },
    {
      id: 3,
      title: "Intereses.txt",
      icon: textIcon,
      text: "Aca van mis pasatiempos.",
      isMaximized: false,
      isVisible: true,
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
    switch (type) {
      case "maximize":
        {
          const newElement = { ...element, isMaximized: !element.isMaximized };
          setFilesState((prevState) => [...removeElement(id), newElement]);
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
          console.log("Toggle error.");
        }
        break;
    }
  }

  function closeWindow(id){
    var element = getElement(id);
    const newElement = { ...element, isVisible: false, isOnTaskbar: false };
    setFilesState((prevState) => [...removeElement(id), newElement]);
  }

  function openWindow(id){
    var element = getElement(id);
    const newElement = { ...element, isVisible: true, isOnTaskbar: true };
    setFilesState((prevState) => [...removeElement(id), newElement]);
  }

  function minimizeWindow(id){
    var element = getElement(id);
    const newElement = { ...element, isVisible: false, isOnTaskbar: true };
    setFilesState((prevState) => [...removeElement(id), newElement]);
  }

  //Sin terminar
  function maximizeWindow(id){
    var element = getElement(id);
    const newElement = { ...element, isMaximized: true};
    setFilesState((prevState) => [...removeElement(id), newElement]);
  }

  let windows = <div />;
  if (Array.isArray(filesState)) {
    windows = filesState.filter((file) => (
        file.isVisible === true
      )).map((file) => (
        <Window file={file} 
        closeWindow={closeWindow} 
        openWindow={openWindow}
        minimizeWindow={minimizeWindow}
        maximizeWindow={maximizeWindow}
        key={file.id} />
      ));
  }

  return (
    <div className="App">
      <video src={background} playsInline autoPlay muted loop id="bgvid" />
      <FileContainer files={filesState} />
      {windows}
      <Taskbar files={filesState} toggle={toggle}/>
    </div>
  );
}

export default App;
