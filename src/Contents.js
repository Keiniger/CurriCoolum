import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contents.module.css";

const textIcon = <FontAwesomeIcon icon={faFileAlt} />;
const files = [
  {
    id: 1,
    x_index: 1,
    z_index: 1,
    icon: textIcon,
    title: "Portfolio.js",
    text: <h2> Aca van proyectos de mi portfolio. </h2>,
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: true,
    isSelected: false,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
  {
    id: 2,
    x_index: 2,
    z_index: 2,
    icon: textIcon,
    title: "Conocimientos.doc",
    text: <h2>Aca van lenguajes, frameworks, etc.</h2>,
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: true,
    isSelected: false,
    width: 0.5,
    height: 0.6,
    x: 0.05,
    y: 0.2,
  },
  {
    id: 3,
    x_index: 3,
    z_index: 3,
    icon: textIcon,
    title: "Intereses.txt",
    text: <h2>Aca van mis pasatiempos.</h2>,
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: true,
    isSelected: true,
    width: 0.5,
    height: 0.6,
    x: 0.2,
    y: 0.3,
  },
  {
    id: 4,
    x_index: 4,
    z_index: 4,
    icon: textIcon,
    title: "Sobre_mi.exe",
    text: (
      <>
        <h2>
          Villa Martelli · Vicente Lopez · 54 9 11 3505-6434 ·
          <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
        </h2>
        <p>
          Tengo 21 años y soy aspirante a desarrollador Full Stack. Amo aprender
          sobre nuevas tecnologías y resolver problemas. Estoy interesado en la
          programación funcional, el procesamiento de lenguajes naturales,
          blockchain, criptomonedas y machine learning.
        </p>
      </>
    ),
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: false,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
];

export default files;
