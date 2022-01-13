import React, { useContext } from "react";
import { browserLang, defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export const EducacionTitle = {
  en: "Education",
  es: "Educación",
  it: "Educazione",
  de: "Bildung",
};

export default function Educacion() {
  const { lang, id } = useParams();
  const language = lang || browserLang || defaultLang;

  switch (language) {
    case "es":
      {
        return (
          <>
            <h2>Colegio Tarbut</h2>
            <h3>Primaria y secundaria</h3>
            <p>
              Bachiller Integral Biligüe con orientación en Economía y Gestión
              de las Organizaciones
              <br />
              Sede Olivos, Rosales 3019
            </p>
            <br />
            <hr />
            <br />
            <h2>Universidad Tecnológica Nacional</h2>
            <h3>Ingeniería en Sistemas de Información (4to año)</h3>
            <p>Sede Almagro, Medrano 951</p>
          </>
        );
      }
      break;
    case "en":
      {
        return (
          <>
            <h2>Colegio Tarbut</h2>
            <h3>Elementary school and high school</h3>
            <p>
              Billingual bachelor in Economics and Business Management
              <br />
              Buenos Aires, Olivos
            </p>
            <br />
            <hr />
            <br />
            <h2>Universidad Tecnológica Nacional</h2>
            <h3>Computer Science(4th year)</h3>
            <p>Buenos Aires, Almagro</p>
          </>
        );
      }
      break;
    case "it":
      {
        return (
          <>
            <h2>Colegio Tarbut</h2>
            <h3>Scuola elementare e scuola superiore</h3>
            <p>
              Laurea breve bilingue in economia e gestione aziendale
              <br />
              Buenos Aires, Olivos
            </p>
            <br />
            <hr />
            <br />
            <h2>Universidad Tecnológica Nacional</h2>
            <h3>Ingegneria informatica (4to anno)</h3>
            <p>Buenos Aires, Almagro</p>
          </>
        );
      }
      break;
    case "de":
      {
        return (
          <>
            <h2>Colegio Tarbut</h2>
            <h3>Grundschule und Gymnasium</h3>
            <p>
              Bilingualer Bachelor in Volkswirtschaftslehre und Betriebswirtschaftslehre
              <br />
              Buenos Aires, Olivos
            </p>
            <br />
            <hr />
            <br />
            <h2>Universidad Tecnológica Nacional</h2>
            <h3>Ingenieurinformatik (4te Jahr)</h3>
            <p>Buenos Aires, Almagro</p>
          </>
        );
      }
      break;
  }
}
