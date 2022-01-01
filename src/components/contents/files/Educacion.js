import React, { useContext } from "react";
import { defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export let EducacionTitle = {
  en: "Education",
  es: "Educación",
  it: "Educazione",
  de: "Bildung",
};

export default function Educacion() {
  const { lang, id } = useParams();
  const language =  lang || defaultLang;
  return (
    <>
      <h2>Colegio Tarbut</h2>
      <h3>Título primario, intermedio y secundario</h3>
      <p>
        Bachiller Integral Biligüe con orientación en Economía y Gestión de las
        Organizaciones
        <br />
        Sede Rosales 3019
      </p>
      <hr
        style={{
          boxShadow:
            "white 0 0 1px, white 0 0 2px, white 0 0 3px, white 0 0 4px",
        }}
      />
      <h2>Universidad Tecnológica Nacional</h2>
      <h3>Ingeniería en Sistemas de Información (4to año)</h3>
      <p>Sede Medrano 951 - Sede Mozart 2300</p>
    </>
  );
}
