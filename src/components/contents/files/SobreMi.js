import React, { useContext } from "react";
import { defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export let SobreMiTitle = {
  en: "About me",
  es: "Sobre mi",
  it: "Su di me",
  de: "Über mich",
};
export default function SobreMi() {
  const { lang, id } = useParams();
  const language =  lang || defaultLang;
  // import useContext(languageContext)
  // Add switch statement for languages
  return (
    <>
      <h1>Ignacio André Keiniger</h1>
      <h2>
        Villa Martelli · Vicente Lopez · 54 9 11 3505-6434 · 
        <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
      </h2>
      <p>
        Tengo 21 años y soy desarrollador Full Stack. Amo aprender sobre nuevas
        tecnologías y resolver problemas. Estoy interesado en la programación
        funcional, el procesamiento de lenguajes naturales, blockchain,
        criptomonedas y machine learning.
        <br />
        Actualmente estoy cursando 4to año de la carrera de Ingeniería en
        Sistemas en la UTN
      </p>
    </>
  );
}
