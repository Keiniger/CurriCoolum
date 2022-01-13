import React, { useContext } from "react";
import { browserLang, defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export const IdiomasTitle = {
  en: "Languages",
  es: "Idiomas",
  it: "Lingue",
  de: "Sprache",
};

export default function Idiomas() {
  const { lang, id } = useParams();
  const language = lang || browserLang || defaultLang;

  switch (language) {
    case "es":
      {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2>Inglés (Nivel C2)</h2>
                <ul>
                  <li>Escrito: Fluido</li>
                  <li>Oral: Fluido</li>
                </ul>
              </div>
              <div>
                <h2>Italiano (Nivel B2-C1)</h2>
                <ul>
                  <li>Escrito: Avanzado</li>
                  <li>Oral: Intermedio</li>
                </ul>
              </div>
              <div>
                <h2>Alemán (Nivel A2-B1)</h2>
                <ul>
                  <li>Escrito: Intermedio</li>
                  <li>Oral: Elemental</li>
                </ul>
              </div>
            </div>
          </>
        );
      }
      break;
    case "en":
      {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2>Spanish (Native)</h2>
                <ul>
                  <li>Written: Native</li>
                  <li>Spoken: Native</li>
                </ul>
              </div>
              <div>
                <h2>English (C2 Level)</h2>
                <ul>
                  <li>Written: Fluent</li>
                  <li>Spoken: Fluent</li>
                </ul>
              </div>
              <div>
                <h2>Italian (B2-C1 Level)</h2>
                <ul>
                  <li>Written: Advanced</li>
                  <li>Spoken: Intermediate</li>
                </ul>
              </div>
              <div>
                <h2>German (A2-B1 Level)</h2>
                <ul>
                  <li>Written: Intermediate</li>
                  <li>Spoken: Basic</li>
                </ul>
              </div>
            </div>
          </>
        );
      }
      break;
    case "it":
      {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2>Italiano (Livello B2-C1)</h2>
                <ul>
                  <li>Scritto: Avanzato</li>
                  <li>Parlato: Intermedio</li>
                </ul>
              </div>
              <div>
                <h2>Spagnolo (Madrelingua)</h2>
                <ul>
                  <li>Scritto: Fluente</li>
                  <li>Parlato: Fluente</li>
                </ul>
              </div>
              <div>
                <h2>Inglese (Livello C2)</h2>
                <ul>
                  <li>Scritto: Fluente</li>
                  <li>Parlato: Fluente</li>
                </ul>
              </div>
              <div>
                <h2>Tedesco (A2-B1 Level)</h2>
                <ul>
                  <li>Scritto: Intermedio</li>
                  <li>Parlato: Essenziale</li>
                </ul>
              </div>
            </div>
          </>
        );
      }
      break;
    case "de":
      {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2>Deutsch (A2-B1 Niveau)</h2>
                <ul>
                  <li>Geschrieben: Intermediär</li>
                  <li>Gesprochen: Elementar</li>
                </ul>
              </div>
              <div>
                <h2>Spanisch (Muttersprachler)</h2>
                <ul>
                  <li>Geschrieben: Fließend</li>
                  <li>Gesprochen: Fließend</li>
                </ul>
              </div>
              <div>
              <div>
                <h2>Inglese (Livello C2)</h2>
                <ul>
                  <li>Geschrieben: Fließend</li>
                  <li>Gesprochen: Fließend</li>
                </ul>
              </div>
                <h2>Italiano (B2-C1 Niveau)</h2>
                <ul>
                  <li>Geschrieben: Hoch</li>
                  <li>Gesprochen: Intermediär</li>
                </ul>
              </div>
            </div>
          </>
        );
      }
      break;
  }
}
