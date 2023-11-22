import React from "react";
import { browserLang, defaultLang, translations } from "../../../App";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const openIcon = (
  <FontAwesomeIcon
    icon={faExternalLinkAlt}
    style={{ fontSize: "0.6em", margin: "3px 5px" }}
  />
);

export const ExperienciaTitle = {
  en: "Experience",
  es: "Experiencia",
  it: "Esperienza",
  de: "Erfahrung",
};

export default function Experiencia() {
  const { lang } = useParams();
  const language = lang || browserLang || defaultLang;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        <a href="https://www.vestua.com/" target="_blank">
          Vestua {openIcon}
        </a>
      </h2>
      <h3>
        {translations(
          "Software Engineer",
          "Ingeniero de Software",
          "Scuola elementare e scuola superiore",
          "Grundschule und Gymnasium",
          language
        )}
      </h3>
      <p>
        <div style={{ fontStyle: "italic" }}>
          {translations(
            "March 2022 - Currently, Santiago de Chile (Remote)",
            "Marzo 2022 - Actualmente, Santiago de Chile (Remoto)",
            "Marzo 2022 - Attualmente, Santiago del Cile (Remoto)",
            "März 2022 - Derzeit, Santiago de Chile (Remote)",
            language
          )}
        </div>
      </p>
      <p>
        <ul>
          <li>
            {translations(
              "Led the design and development of multiple fullstack enterprise-level features and applications, driving over 2 million dollars of revenue every year using the latest technologies of NodeJs, Express, Typescript, PostgresQL, Elasticsearch, Redis and Angular.",
              "Lideré el diseño y desarrollo de múltiples features y aplicaciones de nivel empresarial full stack, generando más de 2 millones de dólares en ingresos cada año mediante el uso de tecnologías de punta como NodeJs, Express, Typescript, PostgresQL, Elasticsearch, Redis y Angular.",
              "Ho guidato la progettazione e lo sviluppo di molteplici funzionalità e applicazioni di livello enterprise full-stack, generando oltre 2 milioni di dollari di entrate ogni anno utilizzando tecnologie all'avanguardia come Node.js, Express, TypeScript, PostgreSQL, Elasticsearch, Redis e Angular.",
              "Ich habe das Design und die Entwicklung mehrerer Funktionen und Anwendungen auf Enterprise-Niveau in Full-Stack geleitet, wodurch jedes Jahr über 2 Millionen Dollar Umsatz generiert wurden. Hierbei kamen modernste Technologien wie Node.js, Express, TypeScript, PostgreSQL, Elasticsearch, Redis und Angular zum Einsatz.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Designed and implemented scalable APIs for managing ecommerce interactions and third-party integrations with over 1 million monthly requests, using NodeJs, Typescript, Redis and Express, as well as Amazon Web Services, Amazon Lambda functions and Amazon S3.",
              "Diseñé e implementé APIs escalables para gestionar interacciones de comercio electrónico e integraciones de terceros con más de 1 millón de solicitudes mensuales, utilizando NodeJs, Typescript, Redis y Express, así como servicios web de Amazon, funciones Lambda de Amazon y Amazon S3.",
              "Ho progettato e implementato API scalabili per gestire interazioni di e-commerce e integrazioni di terze parti con oltre 1 milione di richieste mensili, utilizzando Node.js, TypeScript, Redis ed Express, nonché servizi web di Amazon, funzioni Lambda di Amazon e Amazon S3.",
              "Ich habe skalierbare APIs entworfen und implementiert, um E-Commerce-Interaktionen und Integrationen von Drittanbietern mit über 1 Million monatlichen Anfragen zu verwalten. Dabei nutzte ich Node.js, TypeScript, Redis und Express sowie Amazon Web Services, Amazon Lambda-Funktionen und Amazon S3.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Led the improvement of the entire web app SEO, from a lighthouse score of 12 to 96 almost doubling organic traffic, using Angular Universal, Redis and Amazon Lambda functions.",
              "Lideré la mejora del SEO de toda la aplicación web, aumentando la puntuación de Lighthouse de 12 a 96 y casi duplicando el tráfico orgánico, mediante el uso de Angular Universal, Redis y funciones Lambda de Amazon.",
              "Ho guidato il miglioramento dell'ottimizzazione SEO per l'intera applicazione web, aumentando il punteggio di Lighthouse da 12 a 96 e quasi raddoppiando il traffico organico, utilizzando Angular Universal, Redis e le funzioni Lambda di Amazon.",
              "Ich habe die Verbesserung des SEO für die gesamte Webanwendung geleitet, indem ich den Lighthouse-Wert von 12 auf 96 erhöhte und den organischen Traffic fast verdoppelte. Dies wurde durch die Verwendung von Angular Universal, Redis und den Amazon Lambda-Funktionen erreicht.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Led the design and development of the clothing revision and logistics, optimizing revision performance speed by almost and decreasing the average time on task of operators.",
              "Lideré el diseño y desarrollo de la revisión y logística de ropa, optimizando la velocidad de rendimiento de la revisión en casi un 50% y reduciendo el tiempo promedio en la tarea de los operadores de 1.5 minutos a 0.9.",
              "Ho guidato il design e lo sviluppo della revisione e logistica dell'abbigliamento, ottimizzando la velocità delle prestazioni della revisione di quasi il 50% e riducendo il tempo medio dell'operatore da 1,5 minuti a 0,9.",
              "Ich habe das Design und die Entwicklung von Kleiderprüfung und Logistik geleitet, wodurch die Überprüfungsgeschwindigkeit um fast 50 % optimiert und die durchschnittliche Aufgabenzeit der Operatoren von 1,5 Minuten auf 0,9 reduziert wurde.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Worked with UI/UX designers, transforming Figma wireframes into fully working front end interfaces following strict deadlines, style guidelines and code evaluation.",
              "Trabajé con diseñadores de UI/UX, transformando los wireframes de Figma en interfaces frontales completamente funcionales siguiendo plazos estrictos, pautas de estilo y evaluación de código.",
              "Ho lavorato con designer UI/UX, trasformando i wireframe di Figma in interfacce frontend completamente funzionali nel rispetto di scadenze rigorose, linee guida di stile e revisioni del codice.",
              "Ich habe mit UI/UX-Designern zusammengearbeitet und Figma-Entwürfe in voll funktionsfähige Frontend-Schnittstellen umgewandelt, wobei ich strenge Zeitpläne, Stilrichtlinien und Code-Reviews eingehalten habe.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Migrated NPS input from google forms to Angular Reactive Forms, saving the results to a PostgresQL database, improving data retrieval and connection and enabling customized forms for individual users.",
              "Migré la entrada de NPS de Google Forms a Angular Reactive Forms, guardando los resultados en una base de datos PostgresQL, mejorando la recuperación y conexión de datos y habilitando formularios personalizados para usuarios.",
              "Ho migrato l'input NPS da Google Forms a Angular Reactive Forms, salvando i risultati in un database PostgreSQL, migliorando il recupero e la connessione dei dati e abilitando forme personalizzate per gli utenti.",
              "Ich habe die NPS-Eingabe von Google Forms auf Angular Reactive Forms migriert, die Ergebnisse in einer PostgreSQL-Datenbank gespeichert, die Datenabfrage und -verbindung verbessert und benutzerdefinierte Formulare ermöglicht.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Utilized Google Analytics to track and analyze user behavior across multiple enterprise-level features and applications and Google Tag Manager to streamline the process of deploying and managing tags for various tracking and analytics tools.",
              "Utilicé Google Analytics para rastrear y analizar el comportamiento del usuario en múltiples features y aplicaciones a nivel empresarial, y Google Tag Manager para optimizar el proceso de gestión, análisis y seguimiento de features.",
              "Ho utilizzato Google Analytics per tracciare e analizzare il comportamento dell'utente su molteplici funzionalità e applicazioni di livello enterprise, e Google Tag Manager per ottimizzare il processo di gestione, analisi e tracciamento delle funzionalità.",
              "Ich habe Google Analytics genutzt, um das Nutzerverhalten in mehreren Unternehmensfunktionen und -anwendungen zu verfolgen und zu analysieren, sowie Google Tag Manager, um den Prozess der Verwaltung, Analyse und Nachverfolgung von Funktionen zu optimieren.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Adhered to the principles of Clean Code to enhance the maintainability, readability, and overall quality of the software. Followed best practices and coding standards to ensure that the codebase was easy to understand and modify. Followed a Clean Architecture approach to design and organize the software system.",
              "Adherí a los principios de Clean Code para mejorar la mantenibilidad, legibilidad y calidad general del software. Seguí las mejores prácticas y estándares de programación para asegurar que la base de código fuera fácil de entender y modificar. También seguí un enfoque de Clean Arquitectura para diseñar y organizar el software.",
              "Ho seguito i principi del Clean Code per migliorare la manutenibilità, la leggibilità e la qualità complessiva del software. Ho seguito le migliori pratiche e gli standard di programmazione per garantire che la base di codice fosse facile da comprendere e modificare. Inoltre, ho adottato un approccio di Clean Architecture per progettare e organizzare il software.",
              "Ich habe mich an die Prinzipien des Clean Code gehalten, um die Wartbarkeit, Lesbarkeit und die allgemeine Qualität der Software zu verbessern. Ich habe die besten Programmierpraktiken und Standards befolgt, um sicherzustellen, dass die Codebasis leicht verständlich und änderbar war. Darüber hinaus habe ich einen Clean-Architecture-Ansatz verfolgt, um die Software zu entwerfen und zu organisieren.",
              language
            )}
          </li>
          <br />
          <li>
            {translations(
              "Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews, load/stress testing, unit/integration testing.",
              "Integración continua/despliegue continuo, Pipeline integration, pull requests, revisiones de código, pruebas de carga/estrés, pruebas unitarias/integración.",
              "Integrazione continua/sviluppo continuo, Pipeline integration, pull requests, revisioni del codice, test di carico/stress, test unitari/integrazione.",
              "Kontinuierliche Integration/fortlaufende Bereitstellung, Pipeline-Integration, Pull-Requests, Code-Reviews, Last-/Stresstests, Unit-/Integrationstests.",
              language
            )}
          </li>
        </ul>
        <br />
      </p>
    </>
  );
}
