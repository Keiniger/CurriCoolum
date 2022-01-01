import React, { useContext } from "react";
import { defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export let IdiomasTitle = {
  en: "Languages",
  es: "Idiomas",
  it: "Lingue",
  de: "Sprache",
};
export default function Idiomas() {
  const { lang, id } = useParams();
  const language =  lang || defaultLang;
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
            <li>Escrito: fluido</li>
            <li>Oral: fluido</li>
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
