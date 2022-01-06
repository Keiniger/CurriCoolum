import React from "react";
import { useState, createContext } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import background from "./assets/tron.mp4";
import FileContainer from "./components/file/FileContainer";
import Taskbar from "./components/taskbar/Taskbar";
import Window from "./components/window/Window";
import files from "./components/contents/Contents";

const windowActionContext = createContext();
const languageContext = createContext();

const defaultLang = "es";

const title = {
  es: "Curriculum" ,
  en: "Résumé",
  it: "Curriculum",
  de: "Lebenslauf",
} 

const name = {
  es: "Ignacio Keiniger" ,
  en: "Andrew Keiniger",
  it: "Ignazio Keiniger",
  de: "Ignatz Keiniger",
}

function App() {
  const { lang } = useParams();
  const [language, setLanguage] = useState(lang || defaultLang);
  document.title = `${title[language]} - ${name[language]}`;
  document.documentElement.setAttribute("lang", language);

  const [filesState, setFilesState] = useState(files);

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
      case "toggle-popup":
        {
          setFilesState([
            ...listWithoutElement,
            { ...element, isPopup: !element.isPopup },
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
              isMaximized: false,
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
    <windowActionContext.Provider value={windowAction}>
      <languageContext.Provider value={[language, setLanguage]}>
        <div className={styles.App}>
          <video
            /**/
            className={styles.bgvid}
            src={background}
            /**/
            playsInline
            autoPlay
            muted
            loop
          />
          <FileContainer files={filesState} />
          {Array.isArray(filesState) &&
            filesState.map((file) => <Window file={file} key={file.id} />)}
          <Taskbar files={filesState} />
        </div>
      </languageContext.Provider>
    </windowActionContext.Provider>
  );
}

export default App;
export { windowActionContext, languageContext, defaultLang, name };
