import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { browserLang, defaultLang } from "../../../App";

export const ConocimientosTitle = {
  en: "Skills",
  es: "Conocimientos",
  it: "Abilità",
  de: "Fähigkeiten",
};

export default function Conocimientos() {
  const { lang, id } = useParams();
  const language = lang || browserLang || defaultLang;

  let conocimientosVarios, actualmenteAprendiendo;

  switch (language) {
    case "es":
      {
        conocimientosVarios = "Conocimientos varios";
      }
      break;
    case "en":
      {
        conocimientosVarios = "Other skills";
      }
      break;
    case "it":
      {
        conocimientosVarios = "Altre abilità";
      }
      break;
    case "de":
      {
        conocimientosVarios = "Andere Fähigkeiten";
      }
      break;
    default:
      {
        conocimientosVarios = "Other skills";
      }
      break;
  }

  switch (language) {
    case "es":
      {
        actualmenteAprendiendo = "Actualmente aprendiendo";
      }
      break;
    case "en":
      {
        actualmenteAprendiendo = "Currently learning";
      }
      break;
    case "it":
      {
        actualmenteAprendiendo = "attualmente imparando";
      }
      break;
    case "de":
      {
        actualmenteAprendiendo = "Learne gerade";
      }
      break;
    default:
      {
        actualmenteAprendiendo = "Currently learning";
      }
      break;
  }

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
          <h2>Backend</h2>
          <ul>
            <li>C/C++</li>
            <li>
              C#
              <ul>
                <li>Entity Framework</li>
                <li>ASP.NET Core</li>
                <li>Razor pages</li>
              </ul>
            </li>
            <li>
              SQL/PL-SQL
              <ul>
                <li>MYSQL</li>
                <li>SQL Server</li>
                <li>PostgreSQL</li>
              </ul>
            </li>
            <li>
              No-SQL
              <ul>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </li>
            <li>
              Python
              <ul>
                <li>Django</li>
              </ul>
            </li>
            <li>
              Node.js
              <ul>
                <li>Express</li>
              </ul>
            </li>
            <li>Haskell</li>
            <li>Prolog</li>
          </ul>
        </div>

        <div>
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>
              CSS
              <ul>
                <li> SASS/SCSS </li>
                <li> Bootstrap </li>
              </ul>
            </li>
            <li>
              Javascript
              <ul>
                <li> Jquery </li>
                <li> Typescript </li>
              </ul>
            </li>
            <li>
              React
              <ul>
                <li> Functional Components </li>
                <li> Class Components</li>
                <li> Redux </li>
                <li> React-Router </li>
                <li> Next.js </li>
                <li> Styled Components </li>
                <li> React Motion </li>
                <li> Formik </li>
              </ul>
            </li>
            <li>
              Vue
              <ul>
                <li> Vuex </li>
                <li> Nuxt.js </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2> Workflow </h2>
          <ul>
            <li> Teamwork </li>
            <li> Agile development & Scrum </li>
          </ul>
          <h2> {conocimientosVarios} </h2>
          <ul>
            <li> Git/Github </li>
            <li> REST APIs </li>
            <li>
              Adobe suite
              <ul>
                <li> Adobe Photoshop </li>
                <li> Adobe XD </li>
                <li> Adobe Illustrator </li>
              </ul>
            </li>
            <li>
              Linux
              <ul>
                <li> Bash Scripting </li>
              </ul>
            </li>
          </ul>
          <h2> {actualmenteAprendiendo} </h2>
          <ul>
            <li> Solidity </li>
            <li> React Native </li>
            <li> Angular </li>
          </ul>
        </div>
      </div>
    </>
  );
}
