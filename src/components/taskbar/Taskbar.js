import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";
import { languageContext } from "../../App";
import { useNavigate } from "react-router-dom";

const start = {
  es: "Inicio",
  en: "Start",
  it: "Inizio",
  de: "Anfang",
};

// todo: move time to another component
export default function Taskbar({ files }) {
  const [language, setLanguage] = useContext(languageContext);
  const [startMenuIsVisible, setStartMenuIsVisible] = useState(false);

  function toggleStartMenu() {
    setStartMenuIsVisible(!startMenuIsVisible);
  }

  return (
    <>
      {startMenuIsVisible && <StartMenu />}
      <hr className={styles.hr} />
      <div className={styles.taskbar}>
        <div className={styles.start} onClick={toggleStartMenu}>
          {" "}
          {start[language]}{" "}
        </div>
        <OpenedFilesContainer className={styles.openedFiles} files={files} />
        <Time language={language} />
      </div>
    </>
  );
}

function StartMenu() {
  const [language, setLanguage] = useContext(languageContext);
  const navigate = useNavigate();

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function handleLanguageChange(lang) {
    navigate(`/${lang}`);
    setLanguage(lang);
  }

  const langList = {
    en: (
      <>
        <li onClick={() => handleLanguageChange("es")}>Spanish</li>
        <li onClick={() => handleLanguageChange("it")}>Italian</li>
        <li onClick={() => handleLanguageChange("de")}>German</li>
      </>
    ),
    es: (
      <>
        <li onClick={() => handleLanguageChange("en")}>Inglés</li>
        <li onClick={() => handleLanguageChange("it")}>Italiano</li>
        <li onClick={() => handleLanguageChange("de")}>Alemán</li>
      </>
    ),
    it: (
      <>
        <li onClick={() => handleLanguageChange("en")}>Inglese</li>
        <li onClick={() => handleLanguageChange("es")}>Spagnolo</li>
        <li onClick={() => handleLanguageChange("de")}>Tedesco</li>
      </>
    ),
    de: (
      <>
        <li onClick={() => handleLanguageChange("en")}>Englisch</li>
        <li onClick={() => handleLanguageChange("es")}>Spanisch</li>
        <li onClick={() => handleLanguageChange("it")}>Italienisch</li>
      </>
    ),
  };

  return (
    <div styles={{ display: "flex" }}>
      <ul className={styles.startMenu}>
        <li onClick={toggleFullScreen}>Toggle fullscreen</li>
        <li>Languages</li>
      </ul>
      <ul className={styles.languagesMenu}>{langList[language]}</ul>
    </div>
  );
}

const time = {
  es: "es-AR",
  en: "en-US",
  it: "it-IT",
  de: "de-DE",
};
function Time() {
  const [language, setLanguage] = useContext(languageContext);
  const [date, setDate] = useState(new Date().toLocaleString(time[language]));
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString(time[language]));
    }, 1000);
  });
  return <div className={styles.time}> {date} </div>;
}
