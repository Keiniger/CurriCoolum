import styles from "./Contents.module.css";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";


// Content components
import CodoACodo from "./CodoACodo.png";
import InteligenciaArtificial from "./InteligenciaArtificial.png";
import Certificados from "./files/Certificados";
import Educacion from "./files/Educacion";
import Conocimientos from "./files/Conocimientos";
import SobreMi from "./files/SobreMi";

const textIcon       = <FontAwesomeIcon icon={faFileAlt} />;
const graduationIcon = <FontAwesomeIcon icon={faGraduationCap} />;
const universityIcon = <FontAwesomeIcon icon={faUniversity} />;
const idCardIcon     = <FontAwesomeIcon icon={faIdCard} />;
const folderIcon     = <FontAwesomeIcon icon={faFolder} />;
const gamepadIcon    = <FontAwesomeIcon icon={faGamepad} />;
const scrollIcon     = <FontAwesomeIcon icon={faScroll} />;
const imageIcon      = <FontAwesomeIcon icon={faFileImage} />;

const textoIntereses = <h2>Aca van mis pasatiempos.</h2>;


const idSobreMi                = 8;
const idConocimientos          = 7;
const idPortfolio              = 6;
const idIntereses              = 5;
const idEducacion              = 4;
const idCertificados           = 3;
const idCodoACodo              = 2;
const idInteligenciaArtificial = 1;

const files = [
  {
    id: idPortfolio,
    x_index: idPortfolio,
    z_index: idPortfolio,
    icon: folderIcon,
    title: "Portfolio",
    content: { text: <h2> Aca van proyectos de mi portfolio. </h2> },
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: false,
    isOnDesktop: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.3,
    y: 0.02,
  },
  {
    id: idConocimientos,
    x_index: idConocimientos,
    z_index: idConocimientos,
    icon: graduationIcon,
    title: "Conocimientos",
    content: {
      text: <Conocimientos />,
    },
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: false,
    isOnDesktop: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.4,
    y: 0.3,
  },
  {
    id: idIntereses,
    x_index: idIntereses,
    z_index: idIntereses,
    icon: gamepadIcon,
    title: "Intereses",
    content: { text: textoIntereses },
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: false,
    isSelected: false,
    isOnDesktop: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.2,
    y: 0.3,
  },
  {
    id: idSobreMi,
    x_index: idSobreMi,
    z_index: idSobreMi,
    icon: idCardIcon,
    title: "Sobre_mi",
    content: {
      text: <SobreMi />,
    },
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: true,
    isOnDesktop: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
  {
    id: idEducacion,
    x_index: idEducacion,
    z_index: idEducacion,
    icon: universityIcon,
    title: "Educación",
    content: {
      text: <Educacion />,
    },
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: false,
    isSelected: false,
    isOnDesktop: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
  {
    id: idCertificados,
    x_index: idCertificados,
    z_index: idCertificados,
    icon: scrollIcon,
    title: "Certificados",
    content: {
      text: <Certificados CaC={7} IA={8} />,
    },
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: false,
    isSelected: false,
    isOnDesktop: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
  {
    id: idCodoACodo,
    x_index: idCodoACodo,
    z_index: idCodoACodo,
    icon: imageIcon,
    title: "Codo_a_Codo.png",
    content: { image: CodoACodo, alt: "CodoACodo.png" },
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: false,
    isSelected: false,
    isOnDesktop: false,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.2,
    y: 0.3,
  },
  {
    id: idInteligenciaArtificial,
    x_index: idInteligenciaArtificial,
    z_index: idInteligenciaArtificial,
    icon: imageIcon,
    title: "InteligenciaArtificial.png",
    content: {
      image: InteligenciaArtificial,
      alt: "InteligenciaArtificial.png",
    },
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: false,
    isSelected: false,
    isOnDesktop: false,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.2,
    y: 0.3,
  },
];

export default files;
