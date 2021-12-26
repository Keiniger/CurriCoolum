import { useState } from "react";
import "./App.css";
import background from "./assets/tron.mp4";
import FileContainer from "./components/file/FileContainer";
import Taskbar from "./components/taskbar/Taskbar";
import Window from "./components/window/Window";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const textIcon = <FontAwesomeIcon icon={faFileAlt} />
const files = [
  {
    id: 1,
    index: Date.now() + 1,
    title: "Portfolio.js",
    icon: textIcon,
    text: <h2> Aca van proyectos de mi portfolio. </h2>,
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: false,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
  {
    id: 2,
    index: Date.now() + 2,
    title: "Conocimientos.doc",
    icon: textIcon,
    text: <h2>Aca van lenguajes, frameworks, etc.</h2>,
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: false,
    width: 0.5,
    height: 0.6,
    x: 0.05,
    y: 0.2,
  },
  {
    id: 3,
    index: Date.now() + 3,
    title: "Intereses.txt",
    icon: textIcon,
    text: <h2>Aca van mis pasatiempos.</h2>,
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: true,
    width: 0.5,
    height: 0.6,
    x: 0.2,
    y: 0.3,
  },
];

function App() {
  const [filesState, setFilesState] = useState(files);
  const [date, setDate] = useState(Date.now());

  function getElement(id) {
    return filesState.find((file) => file.id === id);
  }

  // Returns new list without that element
  function removeElement(id) {
    return filesState.filter((file) => file.id !== id);
  }

  function toggle(type, id) {
    var element = getElement(id);
    var listWithoutElement = removeElement(id);
    switch (type) {
      case "maximize":{
          const newElement = { ...element, isMaximized: !element.isMaximized };
          setFilesState([...listWithoutElement, newElement]);
        } break;
      case "visible":{
          const newElement = { ...element, isVisible: !element.isVisible };
          setFilesState([...listWithoutElement, newElement]);
        } break;
      case "onTaskbar":{
          const newElement = { ...element, isOnTaskbar: !element.isOnTaskbar };
          setFilesState([...listWithoutElement, newElement]);
        } break;
      default: console.log("Toggle error.");
    }
  }

  function windowAction(type, id){
    var element = getElement(id);
    var listWithoutElement = removeElement(id);
    switch(type){
      case "close":{
        const newElement = { ...element, isVisible: false, isOnTaskbar: false };
        setFilesState([...listWithoutElement, newElement]);
      } break;
      case "open":{
        const newElement = { ...element, isVisible: true, isOnTaskbar: true };
        setFilesState([...listWithoutElement, newElement]);
      } break;
      case "minimize":{
        const newElement = { ...element, isVisible: false, isOnTaskbar: true };
        setFilesState([...listWithoutElement, newElement]);
      } break;
      case "maximize":{
        if(element.isMaximized){
          listWithoutElement.forEach(file=>toggle("visible", file.id));
        } else {
          listWithoutElement.forEach(file=>windowAction("minimize", file.id));  
        }
        toggle("maximize", element.id)
      } break;
      case "updateTimestamp":{
        setDate(Date.now())
        const newElement = { ...element, index: Date.now() };
        setFilesState([...listWithoutElement, newElement]);
      } break;
      case "select":{
        listWithoutElement = listWithoutElement.map((file) => ({...file, isSelected: false}))
        const newElement = { ...element, isSelected: true };
        setFilesState([...listWithoutElement, newElement]);
      } break;
      default: console.log("Action error.");
    }
  }

  let windows = <div />;
  if (Array.isArray(filesState)) {
    windows = filesState.map((file) => (
        <Window file={file} 
        windowAction={windowAction}
        key={file.id.toString()} />
      ));
  }

  return (
    <div className="App">
      <video src={background} playsInline autoPlay muted loop id="bgvid" />
      <FileContainer files={filesState} windowAction={windowAction}/>
      {windows}
      <Taskbar files={filesState} toggle={toggle} windowAction={windowAction}/>
    </div>
  );
}

export default App;
