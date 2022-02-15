import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Taskbar.module.css";
import OpenedFilesContainer from "./OpenedFilesContainer";
import { languageContext, translations } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Taskbar({ files }) {
  const [language, changeLanguage] = useContext(languageContext);
  const [startMenuIsVisible, setStartMenuIsVisible] = useState(false);

  function toggleStartMenu() {
    setStartMenuIsVisible(!startMenuIsVisible);
  }

  return (
    <>
      {startMenuIsVisible && (
        <StartMenu setStartMenuIsVisible={setStartMenuIsVisible} />
      )}
      <hr className={styles.hr} />
      <div className={styles.taskbar}>
        <div className={styles.start} onClick={toggleStartMenu}>
          {" "}
          {translations("Start", "Inicio", "Inizio", "Anfang", language)}{" "}
        </div>
        <OpenedFilesContainer className={styles.openedFiles} files={files} />
        <Time language={language} />
      </div>
    </>
  );
}

function StartMenu({ setStartMenuIsVisible }) {
  const [language, changeLanguage] = useContext(languageContext);
  const [languageMenuIsShown, setLanguageMenuIsShown] = useState(false);
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
    changeLanguage(lang);
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
    <div
      styles={{ display: "flex" }}
      onMouseEnter={() => setStartMenuIsVisible(true)}
      onMouseLeave={() => setStartMenuIsVisible(false)}
    >
      <ul className={styles.startMenu}>
        <li onClick={toggleFullScreen}>
          {translations(
            "Fullscreen",
            "Pantalla completa",
            "Sschermo intero",
            "Vollbild",
            language
          )}
        </li>
        <li
          onMouseEnter={() => setLanguageMenuIsShown(true)}
          onMouseLeave={() => setLanguageMenuIsShown(false)}
        >
          {translations(
            "Change Language",
            "Cambiar idioma",
            "Cambia lingua",
            "Sprache ändern",
            language
          )}
        </li>
        {/*
        <li>
          <a
            href={`${translations(
              "Rèsumè - Andrew Keiniger (en)",
              "Curriculum Vitae - Ignacio Keiniger (es)",
              "Curriculum Vitae - Ignazio Keiniger (it)",
              "Lebenslauf - Ignatz Keiniger (de)",
              language
            )}.pdf`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecorationLine: "none",
            }}
          >
            {translations(
              "Download résumé",
              "Descargar curriculum",
              "Scarica curriculum",
              "Lebenslauf herunterladen",
              language
            )}
          </a>
        </li>
        */}
      </ul>
      {languageMenuIsShown && (
        <ul
          onMouseEnter={() => {
            setStartMenuIsVisible(true);
            setLanguageMenuIsShown(true);
          }}
          onMouseLeave={() => {
            setLanguageMenuIsShown(false);
          }}
          className={styles.languagesMenu}
        >
          {langList[language]}
        </ul>
      )}
    </div>
  );
}

const time = {
  es: "es-AR",
  en: "en-US",
  it: "it-IT",
  de: "de-DE",
};
function getDate(lang) {
  return new Date().toLocaleString(time[lang]);
}
function Time() {
  const [language, changeLanguage] = useContext(languageContext);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const startTimer = setInterval(() => {
      setDate(getDate(language));
    }, 1000);

    return function cleanup() {
      clearInterval(startTimer);
    };
  }, [language]);

  return <div className={styles.time}> {date} </div>;
}
