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
          "Sede Olivos, Rosales 3019",
          "Buenos Aires, Olivos",
          "Buenos Aires, Olivos",
          language
        )}
        <br />
      </p>
      <br />
      <hr />
      <br />
      <h2>Universidad Tecnológica Nacional</h2>
      <h3>
        {" "}
        {translations(
          "Computer Science(4th year)",
          "Ingeniería en Sistemas de Información (4to año)",
          "Ingegneria informatica (4to anno)",
          "Ingenieurinformatik (4te Jahr)",
          language
        )}
      </h3>
      <p>
        <div style={{ fontStyle: "italic" }}>
          {translations(
            "March 2017 - Now, Buenos Aires",
            "Marzo 2017 - Actualmente, Sede Medrano 951/Mozart 2300",
            "Marzo 2017 - Adesso, Buenos Aires",
            "Marsch 2017 - Jetzt, Buenos Aires",
            language
          )}
        </div>
      </p>
      <p>
        {" "}
        {translations(
          "Buenos Aires, Almagro",
          "Sede Almagro, Medrano 951",
          "Buenos Aires, Almagro",
          "Buenos Aires, Almagro",
          language
        )}
      </p>
    </>
  );
}
