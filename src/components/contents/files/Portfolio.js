import React, { useContext } from "react";
import styles from "./Portfolio.module.css";
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

export const PortfolioTitle = {
  en: "Portfolio",
  es: "Portfolio",
  it: "Portfolio",
  de: "Portfolio",
};

const sites = {
  tp_diseño: {
    website: "",
    github: "https://github.com/Keiniger/TP-Diseno-de-Sistemas",
    image:
      "https://raw.githubusercontent.com/Keiniger/TP-Diseno-de-Sistemas/main/Homepage.png",
  },
  moneylog: {
    website: "https://moneylog-tracker.netlify.app/",
    github: "https://github.com/Keiniger/Moneylog",
    image:
      "https://raw.githubusercontent.com/Keiniger/Moneylog/main/Moneylog.png",
  },
  neon_homepage: {
    website: "https://neon-homepage.netlify.app/",
    github: "https://github.com/Keiniger/Neon-Homepage",
    image:
      "https://raw.githubusercontent.com/Keiniger/Neon-Homepage/master/NeonHomepage.png",
  },
  geoc: {
    website: "https://geoc.netlify.app/",
    github: "https://github.com/Keiniger/GEOC",
    image: "https://raw.githubusercontent.com/Keiniger/GEOC/main/GEOC.png",
  },
  quotery: {
    website: "https://quotery.netlify.app/",
    github: "https://github.com/Keiniger/Quotery",
    image:
      "https://raw.githubusercontent.com/Keiniger/Quotery/main/Quotery.png",
  },
  project_chaos: {
    website: "https://project-chaos.netlify.app/",
    github: "https://github.com/Keiniger/Project-Chaos",
    image:
      "https://raw.githubusercontent.com/Keiniger/Project-Chaos/main/Project-Chaos.png",
  },
  foodies: {
    website: "https://foodies-delivery.netlify.app/",
    github: "https://github.com/Keiniger/Foodies",
    image:
      "https://raw.githubusercontent.com/Keiniger/Foodies/main/Foodies.png",
  },
  aesthetic_os: {
    website: "https://aesthetic-os.netlify.app/",
    github: "https://github.com/Keiniger/Aesthetic-OS",
    image:
      "https://raw.githubusercontent.com/Keiniger/Aesthetic-OS/main/Aesthetic-OS.png",
  },
  tp_gbd: {
    website: "",
    github: "https://github.com/Keiniger/TP-Gestion-de-Datos",
    image:
      "https://raw.githubusercontent.com/Keiniger/TP-Gestion-de-Datos/main/TP-SQL.png",
  },
  tp_so: {
    website: "",
    github: "https://github.com/Keiniger/TP-Sistemas-Operativos",
    image:
      "https://raw.githubusercontent.com/Keiniger/TP-Sistemas-Operativos/main/SO.png",
  },
  este_curriculum: {
    website: "",
    github: "https://github.com/Keiniger/CurriCoolum",
  }
};

function Links({ list }) {
  console.log(list);
  return (
    <h3 style={{ textAlign: "center" }}>
      {list.map((el, index) => {
        <>
          <a href={el.href} target="_blank">
            {" "}
            {el.to} {openIcon}{" "}
          </a>
        </>;
      })}
    </h3>
  );
}

function VerticalLine() {
  return (
    <div style={{ display: "inline-block", margin: "0px 15px 0px 10px" }} />
  );
}

function Title({ children }) {
  return <h2 style={{ textAlign: "center" }}> {children} </h2>;
}

function Subtitle({ children }) {
  return <h3 style={{ textAlign: "center" }}> {children} </h3>;
}

export default function Portfolio() {
  const { lang, id } = useParams();
  const language = lang || browserLang || defaultLang;

  return (
    <>
      <Title>
        {translations(
          "Assignment for the subject 'System Design' (UTN)",
          "Trabajo práctico de Diseño de Sistemas (UTN)",
          "Lavoro per la materia 'Progettazione dei Sistemi' (UTN)",
          "Zuordnung für das Studienfach 'Systemdesign' (UTN)",
          language
        )}
      </Title>
      <Subtitle>
        <a href={sites.tp_diseño.github} target="_blank">
          {" "}
          Github {openIcon}
        </a>
      </Subtitle>
      <img
        className={styles.image}
        alt="tp_diseño"
        src={sites.tp_diseño.image}
      />
      <p>
        {translations(
          `Made with C#, HTML, Bootstrap, Javascript and MySQL. It's
          completely responsive. It was the result of a year-long
          assignment, developed with a 5 person team. I was involved in the
          Front End using Razor Pages and Bootstrap, the Back End, using
          Entity Framework and MySQL. I developed the interaction between
          Mercadolibre and REST APIs, and I was also involved in the login
          system.`,

          `Hecho con C#, HTML, Bootstrap, Javascript y MySQL. Es completamente
          responsive. Fue un trabajo práctico anual, elaborado con un equipo de 5
          personas. Me encargué principalmente del front end con Razor Pages y
          Bootstrap, de la parte del Backend con Entity Framework y MySQL, de la
          interacción entre la aplicación y Mercadolibre mediante APIs REST y
          también estuve involucrado en el sistema de logins.`,

          `Realizzato con C#, HTML, Bootstrap, Javascript e MySQL. È
          completamente reattivo. È stato il risultato di un incarico di un
          anno, sviluppato con una squadra di cinque persone. Sono stato
          coinvolto nel Frontend utilizzando Razor Pages e Bootstrap, nel
          Backend, usando Entity Framework e MySQL. Ho sviluppato
          l'interazione tra Mercadolibre e una API REST, ed ero anche
          coinvolto nel sistema di login.`,

          `Hergestellt mit C#, HTML, Bootstrap, Javascript und MySQL. Es ist
          völlig ansprechend. Es war das Ergebnis einer jahrelangen Aufgabe,
          entwickelt mit einem Fünf-Personen-Team. Ich war an dem vorderen
          Ende mit Razor Pages und Bootstrap, dem Backende, mit Entity
          Framework und MySQL beteiligt. Ich entwickelte die Wechselwirkung
          zwischen Mercadolibre und Rest APIs, und ich war auch an dem
          Login-System beteiligt.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      <h2 style={{ textAlign: "center" }}>Moneylog</h2>
      <Subtitle>
        <a href={sites.moneylog.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.moneylog.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img className={styles.image} alt="moneylog" src={sites.moneylog.image} />
      <p>
        {translations(
          `Made with React. It's a website that helps you track 
          monthly expenditures.`,

          `Hecha con React. Es una página para registrar gastos
           mensuales.`,

          `Realizzato con React. È un sitio web che serve per tenere 
          traccia delle spese mensili.`,

          `Hergestellt mit React. Es ist eine Website, die Ihnen 
          hilft, monatliche Ausgaben zu verfolgen.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      {/*
      <Title>Neon-Homepage</Title>
      <Subtitle>
        <a href={sites.neon_homepage.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.neon_homepage.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img
        className={styles.image}
        alt="neon_homepage"
        src={sites.neon_homepage.image}
      />
      <p>
        {translations(
          `One of my fist websites. It was written with Sass for the styling
          and HTML for everything else. It's completely responsive and it's
          thought out to be a Homepage for any browser.`,

          `Una de mis primeras páginas. Está hecha con Sass para los estilos
          y HTML para todo lo demás. Es completamente responsive. Fue
          pensada para ser una página de inicio para cualquier navegador.`,

          `Uno dei miei primi siti web. È stato scritto con Sass per lo
          styling e HTML per tutto il resto. È completamente reattivo ed è
          pensato per essere una homepage per qualsiasi browser.`,

          `Eine meiner Faust-Websites. Es wurde mit Sass für das Styling und
          HTML für alles andere geschrieben. Es ist völlig ansprechend und
          es ist angenommen, dass es für einen Browser eine Homepage ist.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      */}
      <Title>GEOC</Title>
      <Subtitle>
        <a href={sites.geoc.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.geoc.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img className={styles.image} alt="geoc" src={sites.geoc.image} />
      <p>
        {translations(
          `Made with Bootstrap and vanilla Javascript. It's also completely
          responsive. It was designed as a mockup for a business in the need
          of a registry UI, and it was a college assignment.`,

          `Hecho con Bootstrap y Javascript puro. También, es completamente
          responsive. Fue pensada como mockup para una empresa que requiere un
          sistema de registros para la materia anual Diseño de Sistemas de la UTN.`,

          `Realizzato con bootstrap e JavaScript puro. È anche completamente
          reattivo. È stato progettato come un mockup per un'azienda nella
          necessità di un UI per i registri, ed è stato un incarico della
          mia facoltà.`,

          `Gemacht mit Bootstrap und Vanille Javascript. Es ist auch völlig
          ansprechend. Es wurde als Modell für ein Unternehmen in der
          Notwendigkeit einer Registrierungs-Benutzeroberfläche konzipiert,
          und es war eine Uni-Aufgabe.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      <Title>Quotery</Title>
      <Subtitle>
        <a href={sites.quotery.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.quotery.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img className={styles.image} alt="quotery" src={sites.quotery.image} />
      <p>
        {translations(
          `Made with React, React-Router and Firebase. It's a website in
          which one can upload quotes, phrases, aphorisms, etc.`,

          `Hecho con React, React-Router y Firebase. Es una página en la que se
          pueden subir frases, citas, aforismos, etc.`,

          `Realizzatoo con React, React-Router e Firebase. È un sito web in
          cui si può caricare citazioni, frasi, aforismi, ecc.`,

          `Hergestellt mit React, React-Router und Firebase. Es ist eine
          Website, in der man Anführungszeichen, Phrasen, Aphorismen usw.
          hochladen kann.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      {/*
      <Title>Project Chaos</Title>
      <Subtitle>
        <a href={sites.project_chaos.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.project_chaos.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img
        className={styles.image}
        alt="project_chaos"
        src={sites.project_chaos.image}
      />
      <p>
        {translations(
          `Made with Angular and Firebase as a database. It's a real-time
          multiplayer card game that can be played directly on the browser.`,

          `Hecho con Angular y Firebase como base de datos. Es un juego de
          cartas de dos jugadores en tiempo real.`,

          `Realizzato con Angular e Firebase come database. È un gioco di
          carte multiplayer in tempo reale che può essere giocato
          direttamente sul browser.`,

          `Gemacht mit Angular und Firebase als Datenbank. Es ist ein
          Echtzeit-Multiplayer-Kartenspiel, das direkt auf dem Browser
          abgespielt werden kann.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      */}
      <Title>Foodies Delivery</Title>
      <Subtitle>
        <a href={sites.foodies.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.foodies.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img className={styles.image} alt="foodies" src={sites.foodies.image} />
      <p>
        {translations(
          `Made with React, Redux and Firebase. It's a dummy UI for a food
          delivery app.`,

          `Hecho con React, Redux y Firebase. Es una interfaz gráfica para pedir
          deliverys.`,

          `Realizzato con React, Redux e Firebase. È un dummy UI per un'app
          di consegna alimentare.`,

          `Hergestellt mit React, Redux und Firebase. Es ist eine
          Dummy-Benutzeroberfläche für eine Food-Delivery-App.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      <Title>Aesthetic OS</Title>
      <Subtitle>
        <a href={sites.aesthetic_os.github} target="_blank">
          Github {openIcon}
        </a>
        <VerticalLine />
        <a href={sites.aesthetic_os.website} target="_blank">
          Website {openIcon}
        </a>
      </Subtitle>
      <img
        className={styles.image}
        alt="aesthetic_os"
        src={sites.aesthetic_os.image}
      />
      <p>
        {translations(
          `Made with React. It's a website I developed with the intention of
           emulating an operating system's interface in the browser.`,

          `Hecho con React. Es una página que desarrollé con la intención de emular
          la interfaz de un sistema operativo en el navegador.`,

          `Fatto con React. È un sito web che ho sviluppato con l'intenzione
          di emulare l'interfaccia di un sistema operativo nel browser.`,

          `Gemacht mit React. Es ist eine Website, die ich mit der Absicht
          entwickelt habe, die Schnittstelle eines Betriebssystems im
          Browser zu emulieren.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      <Title>
        {translations(
          "Assignment for the subject 'Database Management' (UTN)",
          "Trabajo práctico de la materia 'Gestión de Bases de Datos' (UTN)",
          "Lavoro per la materia 'Gestione di Database' (UTN)",
          "Zuordnung für das Studienfach 'Datenbankverwaltung' (UTN)",
          language
        )}
      </Title>
      <Subtitle>
        <a href={sites.tp_gbd.github} target="_blank">
          Github {openIcon}
        </a>
      </Subtitle>
      <img className={styles.image} alt="tp_gbd" src={sites.tp_gbd.image} />
      <p>
        {translations(
          `Made with SQL Server and PL-SQL. It was a four month long
           assignment developed with four people. I was in charge of the
           design of the database, the migration and the PL-SQL scripting.`,

          `Hecho con SQL Server y PL-SQL. Fue un trabajo práctico cuatrimestral,
          elaborado con un equipo de 4 personas. Me encargué de la parte del
          diseño de la nueva base de datos, la migración y del scripting PL-SQL.`,

          `Realizzato con SQL Server e PL-SQL. Era un incarico di quattro
          messi sviluppato con una squadra di quattro persone. Ero
          responsabile della progettazione del database, della migrazione e
          dello scripting PL-SQL.`,

          `Gemacht mit SQL Server und PL-SQL. Es war eine viermonatige
          Aufgabe, die mit vier Personen entwickelt wurde. Ich war
          verantwortlich für das Design der Datenbank, der Migration und der
          PL-SQL Scripting.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      <Title>
        {translations(
          "Assignment for the subject 'Operating Systems' (UTN)",
          "Trabajo práctico de la materia 'Sistemas Operativos' (UTN)",
          "Lavoro per la materia 'Sistemi Operativi' (UTN)",
          "Zuordnung für das Studienfach 'Betriebssysteme' (UTN)",
          language
        )}
      </Title>
      <Subtitle>
        <a href={sites.tp_so.github} target="_blank">
          Github {openIcon}
        </a>
      </Subtitle>
      <img className={styles.image} alt="tp_so" src={sites.tp_so.image} />
      <p>
        {translations(
          `Made with C, Makefiles and Linux Scripting. It was a four month
          assignment, developed with a group of five people. I was in charge
          of the asynchronous code between processes through semaphores, and
          the deadlock detection of those same processes.`,

          `Hecho con C, Makefiles y Linux Scripting. Fue un trabajo práctico
          cuatrimestral, elaborado con un equipo de 5 personas. Me encargué del
          desarrollo de código asíncrono entre procesos por medio de semáforos, y
          de la detección de deadlock de esos mismos procesos.`,

          `ealizzato con C, Makefiles e scripting Linux. Era un incarico di
          quattro mesi, sviluppato con un gruppo di cinque persone. Ero
          responsabile del codice asincrono tra i processi attraverso
          semafori e il rilevamento del deadlock di quegli stessi processi.`,

          `Hergestellt mit C, Makefiles und Linux Scripting. Es war ein
          viermonatiger Auftrag, der mit einer Gruppe von fünf Personen
          entwickelt wurde. Ich hatte den asynchronen code zwischen
          Prozessen über Semaphore und der Deadlock-Nachweis derselben
          Prozesse zuständig.`,
          language
        )}
      </p>
      <br />
      <hr />
      <br />
      <Title>
        {translations(
          "This résumé",
          "Este curriculum",
          "Questo curriculum",
          "Diese Lebenszeit",
          language
        )}
      </Title>
      <Subtitle>
        <a href={sites.este_curriculum.github} target="_blank">
          Github {openIcon}
        </a>
      </Subtitle>
      <p>
        {translations(
          `Made with React, React-Router, Rnd-React and lots of love <3`,
          `Hecho con React, React-Router, Rnd-React y mucho amor <3`,
          `Realizzato con React, React-Router, Rnd-React e molto amore <3`,
          `Hergestellt mit React, React-Router, Rnd-React und viel Liebe <3`,
          language
        )}
      </p>
      <br />
    </>
  );
}
