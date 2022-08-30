import React from "react";
import { browserLang, defaultLang, translations } from "../../../App";
import profile_pic from "../../../assets/profile_pic.jpg";
import { useParams } from "react-router-dom";

const linkContainer = {
  display: "flex",
  marginTop: "20px",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const profile = {
  margin: "15px 0",
  height: "160px",
  maxHeight: "80%",
  borderRadius: "50%",
};

const Link = ({ href, text }) => (
  <a
    style={{ textDecoration: "none", display: "flex", alignContent: "center" }}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <span
      style={{ margin: "0 6px 0 10px", alignSelf: "center" }}
      class="iconify"
      data-icon={"simple-icons:" + text.toLowerCase()}
      data-inline="false"
    />
    <div style={{ marginTop: "3px", alignSelf: "center" }}>{text}</div>
  </a>
);

export const SobreMiTitle = {
  en: "About me",
  es: "Sobre mi",
  it: "Su di me",
  de: "Über mich",
};

export default function SobreMi() {
  const { lang } = useParams();
  const language = lang || browserLang || defaultLang;

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <img src={profile_pic} alt="Profile" style={profile} />
        <div style={{ textAlign: "center" }}>
          <h1>
            {translations(
              `Andrew I. Keiniger`,
              `Ignacio André Keiniger`,
              `Ignazio Andrea Keiniger`,
              `Ignatz Andreas Keiniger`,
              language
            )}
          </h1>
          <h2>
            {translations(
              `Argentina · Buenos Aires · +54 9 11 3505-6434`,
              `Villa Martelli · Vicente Lopez · +54 9 11 3505-6434`,
              `Argentina · Buenos Aires · +54 9 11 3505-6434`,
              `Argentina · Buenos Aires · +54 9 11 3505-6434`,
              language
            )}
            <br />
            <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
            <div style={linkContainer}>
              <Link
                href="https://www.linkedin.com/in/ikeiniger/"
                text="Linkedin"
              />
              <Link href="https://github.com/Keiniger" text="Github" />
              <Link
                href="https://www.duolingo.com/profile/IKeiniger"
                text="Duolingo"
              />
            </div>
          </h2>
        </div>
        <p style={{ textAlign: "justify", width: "70&", maxWidth: "675px" }}>
          {translations(
            `I'm a 23 year old Full Stack developer. I love learning new technologies 
            and problem solving. I'm interested in natural language processing, 
            blockchain technologies, functional programming and machine learning. 
            Currently, I'm in the fourth year of a five year program at Universidad 
            Tecnológica Nacional, and my major is Computer Science.
            `,

            `Tengo 23 años y soy desarrollador Full Stack. Amo aprender sobre 
          nuevas tecnologías y resolver problemas. Estoy interesado en el 
          procesamiento del lenguaje natural, las tecnologías blockchain, programación 
          funcional y machine learning.`,

            `Ho 23 anni e sono uno sviluppatore fullstack. Amo imparare nuove 
          tecnologie e risolvere problemi. Sono interessato all'elaborazione 
          del linguaggio naturale, le tecnologie blockchain, programazione 
          funzionale e machine learning.`,

            `Ich bin ein 23-jähriger Full Stack Entwickler. Ich liebe es, neue 
          Technologien zu lernen und Probleme zu lösen. Ich interessiere mich 
          für Computerlinguistik, Blockchain-Technologien, funktionale 
          Programmierung und maschinelles Lernen.`,
            language
          )}
          <br />
          {translations(
            `Currently, I'm in the fourth year of a five year program at Universidad Tecnológica Nacional, and my major is Computer Science.`,
            `Actualmente estoy cursando 4to año de la carrera de Ingeniería en Sistemas en la UTN`,
            `Attualmente, sto nel quarto anno di università alla Universidad Tecnológica Nacional, facendo la carriera Ingegneria dell'informazione.`,
            `Derzeit bin ich in meinem vierten Jahr an der Universidad Tecnológica Nacional und mein Bürgermeister ist Informatik.`,
            language
          )}
        </p>
      </div>
    </>
  );
}
