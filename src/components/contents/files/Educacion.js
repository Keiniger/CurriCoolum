import React from "react";
import { browserLang, defaultLang, translations } from "../../../App";
import { useParams } from "react-router-dom";

export const EducacionTitle = {
  en: "Education",
  es: "Educación",
  it: "Educazione",
  de: "Bildung",
};

export default function Educacion() {
  const { lang } = useParams();
  const language = lang || browserLang || defaultLang;

  return (
    <>
      <h2>Universidad Tecnológica Nacional</h2>
      <h3>
        {" "}
        {translations(
          "Engineering of Information Systems",
          "Ingeniería en Sistemas de Información",
          "Ingegneria informatica",
          "Ingenieurinformatik",
          language
        )}
      </h3>
      <p>
        <div style={{ fontStyle: "italic" }}>
          {translations(
            "March 2017 - March 2022, Buenos Aires",
            "Marzo 2017 - Marzo 2022, Buenos Aires",
            "Marzo 2017 - Marzo 2022, Buenos Aires",
            "Marsch 2017 - Marsch 2022, Buenos Aires",
            language
          )}
        </div>
      </p>
      <p>
        {" "}
        {translations(
          "Buenos Aires, Almagro",
          "Buenos Aires, Almagro",
          "Buenos Aires, Almagro",
          "Buenos Aires, Almagro",
          language
        )}
      </p>
      <ul>
        <li>
          {translations(
            "Major in Engineering of Information Systems (GPA 8.1)",
            "Especialización en Ingeniería de Sistemas de Información (Promedio de calificaciones: 8.1)",
            "Magistrale in Ingegneria dei Sistemi Informativi (media voti 8.1)",
            "Hauptfach Informationssystemtechnik (Durchschnittsnote 8,1)",
            language
          )}
        </li>
        <li>
          {translations(
            "Teaching Assistant for the annual subject Programming Paradigms",
            "Asistente de enseñanza para la asignatura anual Paradigmas de Programación",
            "Assistente didattico per la materia annuale Paradigmi di Programmazione",
            "Lehrassistent für das jährliche Fach Programmierparadigmen",
            language
          )}
        </li>
      </ul>
      <br />
      <hr />
      <br />
      <h2>Colegio Tarbut</h2>
      <h3>
        {translations(
          "Elementary school and high school",
          "Primaria y secundaria",
          "Scuola elementare e scuola superiore",
          "Grundschule und Gymnasium",
          language
        )}
      </h3>
      <p>
        <div style={{ fontStyle: "italic" }}>
          {translations(
            "December 2006 - February 2017, Buenos Aires",
            "Diciembre 2006 - Febrero de 2017, Sede Rosales 3019",
            "Dicembre 2006 - Febbraio 2017, Buenos Aires",
            "Dezember 2006 - Februar 2017, Buenos Aires",
            language
          )}
        </div>
      </p>
      <p>
        {translations(
          "Bilingual bachelor in Economics and Business Management",
          "Bachiller Integral Biligüe con orientación en Economía y Gestión de las Organizaciones",
          "Laurea breve bilingue in economia e gestione aziendale",
          "Bilingualer Bachelor in Volkswirtschaftslehre und Betriebswirtschaftslehre",
          language
        )}
        <br />
        {translations(
          "Buenos Aires, Olivos",
          "Buenos Aires, Olivos",
          "Buenos Aires, Olivos",
          "Buenos Aires, Olivos",
          language
        )}
        <br />
      </p>
    </>
  );
}
