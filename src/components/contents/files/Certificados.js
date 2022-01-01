import { useContext } from "react";
import { windowActionContext } from "../../../App";
import styles from "../Contents.module.css";

export default function Certificados({ CaC, IA }) {
  const windowAction = useContext(windowActionContext);

  return (
    <>
      <h1> Certificados </h1>
      <ul>
        <li>
          P.E.T. (Preliminary English Test) de la Universidad de Cambridge de
          Inglaterra.
        </li>
        <li>
          I.G.C.S.E. (International General Certificate of Secondary Education)
          de la Universidad de Cambridge de Inglaterra. I.B. (International
          Baccaulaureate) de Ginebra, Suiza.
        </li>
        <li>
          <div
            className={styles.certificateLink}
            onClick={() => windowAction("make-open", CaC)}
          >
            Certificado del Programa Codo a Codo 4.0 de Python fullstack con
            Django & Bootstrap
          </div>
        </li>
        <li>
          <div
            className={styles.certificateLink}
            onClick={() => windowAction("make-open", IA)}
          >
            Certificado del curso de capacitación Introducción a la Inteligencia
            Artificial
          </div>
        </li>
      </ul>
    </>
  );
}
