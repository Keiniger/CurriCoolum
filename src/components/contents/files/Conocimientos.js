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
          <ul>
            <li> NodeJS </li>
            <li> Javascript/Typescript</li>
            <li> C# </li>
            <li> C/C++ </li>
            <li> PostgresQL </li>
            <li> Redis </li>
            <li> Elasticsearch </li>
            <li> Express </li>
            <li> Angular </li>
            <li> React </li>
            <li> React Native </li>
          </ul>
        </div>

        <div>
          <ul>
            <li> MongoDB </li>
            <li> Redux </li>
            <li> Rxjs </li>
            <li> Git </li>
            <li> Docker </li>
            <li> Amazon Web Services</li>
            <li> Amazon Lambda Functions</li>
            <li> Amazon S3 </li>
            <li> Jest </li>
            <li> Unit Testing </li>
            <li> NoSQL </li>
          </ul>
        </div>

        <div>
          <ul>
            <li> CI/CD </li>
            <li> OOP </li>
            <li> Functional Programming </li>
            <li> SEO </li>
            <li> Microservices </li>
            <li> Distributed Systems</li>
            <li> Frontend </li>
            <li> Backend </li>
            <li> Full-Stack </li>
          </ul>
        </div>
      </div>
    </>
  );
}
