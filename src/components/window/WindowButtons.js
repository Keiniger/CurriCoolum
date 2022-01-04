import { useState, useContext } from "react";
import styles from "./WindowButtons.module.scss";
import { windowActionContext, languageContext } from "../../App";
import minimize from "./icons/MinimizeIcon.png";
import maximize from "./icons/MaximizeIcon.png";
import close from "./icons/CloseIcon.png";
import minimizeHover from "./icons/MinimizeIconHover.png";
import maximizeHover from "./icons/MaximizeIconHover.png";
import closeHover from "./icons/CloseIconHover.png";

const reset = {
  minimize: false,
  maximize: false,
  close: false,
};

export default function WindowButtons({ file, popup }) {
  const windowAction = useContext(windowActionContext);
  const [language, setLanguage] = useContext(languageContext);
  const [hover, setHover] = useState(reset);

  return (
    <div className={styles.windowHeader}>
      <p className={styles.windowTitle} onClick={popup}>
        {file.title[language]}
      </p>
      <div className={styles.windowButtonsContainer}>
        <img
          src={hover.minimize ? minimizeHover : minimize}
          className={styles.windowButton}
          id="minimize"
          onClick={() => windowAction("make-minimize", file.id)}
          onMouseEnter={() => {
            setHover({ minimize: true });
            windowAction("make-open", file.id);
          }}
          onMouseLeave={() => setHover(reset)}
        />
        <img
          src={hover.maximize ? maximizeHover : maximize}
          className={styles.windowButton}
          id="maximize"
          onClick={() => windowAction("toggle-maximize", file.id)}
          onMouseEnter={() => {
            setHover({ maximize: true });
            windowAction("make-open", file.id);
          }}
          onMouseLeave={() => setHover(reset)}
        />
        <img
          src={hover.close ? closeHover : close}
          className={styles.windowButton}
          id="close"
          onClick={() => windowAction("make-close", file.id)}
          onMouseEnter={() => {
            setHover({ close: true });
            windowAction("make-open", file.id);
          }}
          onMouseLeave={() => setHover(reset)}
        />
      </div>
    </div>
  );
}
