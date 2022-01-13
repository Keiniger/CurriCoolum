import React, { useContext } from "react";
import { browserLang, defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export const SobreMiTitle = {
  en: "About me",
  es: "Sobre mi",
  it: "Su di me",
  de: "Über mich",
};

export default function SobreMi() {
  const { lang, id } = useParams();
  const language = lang || browserLang || defaultLang;

  switch (language) {
    case "es":
      {
        return (
          <>
            <h1>Ignacio André Keiniger</h1>
            <h2>
              Villa Martelli · Vicente Lopez · +54 9 11 3505-6434 ·
              <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
            </h2>
            <p>
              Tengo 22 años y soy desarrollador Full Stack. Amo aprender sobre
              nuevas tecnologías y resolver problemas. Estoy interesado en
              criptomonedas, tecnologías blockchain, contratos inteligentes,
              programación funcional y machine learning.
              <br />
              Actualmente estoy cursando 4to año de la carrera de Ingeniería en
              Sistemas en la UTN
            </p>
          </>
        );
      }
      break;
    case "en":
      {
        return (
          <>
            <h1>Andrew I. Keiniger</h1>
            <h2>
              Argentina · Buenos Aires · +54 9 11 3505-6434 ·
              <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
            </h2>
            <p>
              I'm a 22 year old Full Stack developer. I love learning new
              technologies and problemsolving. I'm interested in
              cryptocurrencies, blockchain technologies, smart contracts,
              functional programming and machine learning.
              <br />
              Currently, I'm in my fourth year at Universidad Tecnológica
              Nacional, and my major is Computer Science.
            </p>
          </>
        );
      }
      break;
    case "it":
      {
        return (
          <>
            <h1>Ignazio Andrea Keiniger</h1>
            <h2>
              Argentina · Buenos Aires · +54 9 11 3505-6434 ·
              <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
            </h2>
            <p>
              Ho 22 anni e sono uno sviluppatore fullstack. Amo imparare nuove
              technologie e risolvere problemi. Sono interessato in
              criptovalute, technologie blockchain, contrati inteligenti e
              machine learning.
              <br />
              Attualmente, sto nel quarto anno di università alla Universidad
              Tecnológica Nacional, facendo la carriera Ingegneria
              dell'informazione.
            </p>
          </>
        );
      }
      break;
    case "de":
      {
        return (
          <>
            <h1>Ignatz Andreas Keiniger</h1>
            <h2>
              Argentina · Buenos Aires · +54 9 11 3505-6434 ·
              <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
            </h2>
            <p>
              Ich bin ein 22-jähriger Full-Stack-Entwickler. Ich liebe es, neue
              Technologien zu lernen und Probleme zu lösen. Ich interessiere
              mich für Kryptowährungen, Blockchain-Technologien, Smart
              Contracts, funktionale Programmierung und maschinelles Lernen.
              <br />
              Derzeit bin ich in meinem vierten Jahr an der Universidad
              Tecnológica Nacional und mein Bürgermeister ist Informatik.
            </p>
          </>
        );
      }
      break;
  }
}
