import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const textIcon = <FontAwesomeIcon icon={faFileAlt} />;
const files = [
  {
    id: 1,
    x_index: 1,
    z_index: 1,
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
    x_index: 2,
    z_index: 2,
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
    x_index: 3,
    z_index: 3,
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

export default files;