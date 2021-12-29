import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import background from "./assets/tron.mp4";
import FileContainer from "./components/file/FileContainer";
import Taskbar from "./components/taskbar/Taskbar";
import Window from "./components/window/Window";
import Popup from "./components/popup/Popup";
import files from "./Contents";


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

  function windowAction(type, id) {
    let element = getElement(id);
    let listWithoutElement = removeElement(id);
    switch (type) {
      case "toggle-maximize":
        {
          /*
          if (element.isMaximized) {
            listWithoutElement.forEach((file) =>
              windowAction("toggle-visible", file.id)
            );
          } else {
            listWithoutElement.forEach((file) =>
              windowAction("make-minimize", file.id)
            );
          }*/
          setFilesState([
            ...listWithoutElement,
            { ...element, isMaximized: !element.isMaximized },
          ]);
        }
        break;
      case "toggle-visible":
        {
          let properties = { isVisible: !element.isVisible };

          if (!element.isVisible) {
            properties = { ...properties, isSelected: true };
            listWithoutElement = listWithoutElement.map((file) => ({
              ...file,
              isSelected: false,
            }));
          }
          setFilesState([...listWithoutElement, { ...element, ...properties }]);
        }
        break;
      case "make-close":
        {
          setFilesState([
            ...listWithoutElement,
            {
              ...element,
              isVisible: false,
              isOnTaskbar: false,
            },
          ]);
        }
        break;
      case "make-visible":
        {
          let max_z =
            Math.max.apply(
              Math,
              filesState.map((file) => {
                return file.z_index;
              })
            ) + 1;

          listWithoutElement = listWithoutElement.map((file) => ({
            ...file,
            isSelected: false,
          }));
          setFilesState([
            ...listWithoutElement,
            {
              ...element,
              isSelected: true,
              isVisible: true,
              isOnTaskbar: true,
              z_index: max_z,
            },
          ]);
        }
        break;
      case "make-open":
        {
          listWithoutElement = listWithoutElement.map((file) => ({
            ...file,
            isSelected: false,
          }));

          let max_z =
            Math.max.apply(
              Math,
              filesState.map((file) => {
                return file.z_index;
              })
            ) + 1;
          let indexProperties = {
            z_index: max_z,
          };

          if (!element.isOnTaskbar) {
            let max_x =
              Math.max.apply(
                Math,
                filesState.map((file) => {
                  return file.x_index;
                })
              ) + 1;
            indexProperties = {
              ...indexProperties,
              x_index: max_x,
            };
          }
          setFilesState([
            ...listWithoutElement,
            {
              ...element,
              isSelected: true,
              isVisible: true,
              isOnTaskbar: true,
              ...indexProperties,
            },
          ]);
        }
        break;
      case "make-minimize":
        {
          setFilesState([
            ...listWithoutElement,
            {
              ...element,
              isVisible: false,
              isOnTaskbar: true,
            },
          ]);
        }
        break;
      default:
        console.log("Action error.");
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <video src={background} playsInline autoPlay muted loop id="bgvid" />
              <FileContainer files={filesState} windowAction={windowAction} />
              {Array.isArray(filesState) &&
                filesState.map((file) => (
                  <Window
                    file={file}
                    windowAction={windowAction}
                    key={file.id}
                  />
                ))}
              <Taskbar files={filesState} windowAction={windowAction} />
            </div>
          }
        />
        <Route path="popup/:id" element={<Popup files={filesState} windowAction={windowAction}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
