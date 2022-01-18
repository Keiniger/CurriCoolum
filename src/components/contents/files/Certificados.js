/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { windowActionContext } from "../../../App";
import styles from "../Contents.module.css";
import {  defaultLang, browserLang } from "../../../App";

export const CertificadosTitle = {
  en: "Certificates",
  es: "Certificados",
  it: "Certificati",
  de: "Zertifikate",
};

export default function Certificados({ CaC, IA }) {
  const { lang } = useParams();
  const windowAction = useContext(windowActionContext);
  const language = lang || browserLang || defaultLang;

  switch (language) {
    case "es":
      {
        return (
          <>
            <ul>
              <li>
                P.E.T. (Preliminary English Test) de la Universidad de
                Cambridge.
              </li>
              <li>
                I.G.C.S.E. (International General Certificate of Secondary
                Education) de la Universidad de Cambridge.
              </li>
              <li>I.B. (International Baccaulaureate).</li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", CaC)}
                >
                  Certificado del Programa Codo a Codo 4.0 de Python fullstack
                  con Django y Bootstrap
                </div>
              </li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", IA)}
                >
                  Certificado del curso de capacitación Introducción a la
                  Inteligencia Artificial
                </div>
              </li>
            </ul>
          </>
        );
      }
    case "en":
      {
        return (
          <>
            <ul>
              <li>
                P.E.T. (Preliminary English Test) provided by Cambridge
                University.
              </li>
              <li>
                I.G.C.S.E. (International General Certificate of Secondary
                Education) provided by Cambridge University.
              </li>
              <li>I.B. (International Baccalaureate).</li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", CaC)}
                >
                  Codo a Codo 4.0 program certificate, granted by completing the
                  Python fullstack with Django and Bootstrap course.
                </div>
              </li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", IA)}
                >
                  "Introduction to Artificial Intelligence"(Introducción a la
                  Inteligencia Artificial) course completion certificate.
                </div>
              </li>
            </ul>
          </>
        );
      }
    case "it":
      {
        return (
          <>
            <ul>
              <li>
                P.E.T. (Preliminary English Test) fornito dall'università di
                Cambridge.
              </li>
              <li>
                I.G.C.S.E. (International General Certificate of Secondary
                Education) fornito dall'università di Cambridge.
              </li>
              <li>I.B. (International Baccaulaureate).</li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", CaC)}
                >
                  Certificato del programa Codo a Codo 4.0, concesso per
                  completare il corso di Python fullstack con Django e
                  Bootstrap.
                </div>
              </li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", IA)}
                >
                  Certificato di completamento del corso "Introduzione
                  all'Intelligenza Artificiale"(Introducción a la Inteligencia
                  Artificial).
                </div>
              </li>
            </ul>
          </>
        );
      }
    case "de":
      {
        return (
          <>
            <ul>
              <li>
                P.E.T. (Preliminary English Test) bereitgestellt von der
                Universität Cambridge
              </li>
              <li>
                I.G.C.S.E. (International General Certificate of Secondary
                Education) bereitgestellt von der Universität Cambridge.
              </li>
              <li>I.B. (International Baccaulaureate).</li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", CaC)}
                >
                  Codo a Codo 4.0 Programmzertifikat, das durch den Abschluss
                  des Python fullstack mit Django und Bootstrap Kurses verliehen
                  wird.
                </div>
              </li>
              <li>
                <div
                  className={styles.certificateLink}
                  onClick={() => windowAction("make-open", IA)}
                >
                  "Einführung in die Künstliche Intelligenz"(Introducción a la
                  Inteligencia Artificial) Kurs Abschlusszertifikat.
                </div>
              </li>
            </ul>
          </>
        );
      }
  }
}
