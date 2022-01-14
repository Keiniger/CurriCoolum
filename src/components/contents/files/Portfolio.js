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

// todo: turn all the information into an object and display it with a .map()

const sites = {
  tp_diseño: {
    website: "",
    github: "https://github.com/Nacho-Keiniger/Trabajo-Pr-ctico-C-",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Trabajo-Pr-ctico-C-/main/Homepage.png",
  },
  moneylog: {
    website: "https://moneylog-tracker.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/Moneylog",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Moneylog/main/Moneylog.png",
  },
  neon_homepage: {
    website: "https://neon-homepage.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/Neon-Homepage",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Neon-Homepage/master/NeonHomepage.png",
  },
  geoc: {
    website: "https://geoc.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/GEOC",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/GEOC/main/GEOC.png",
  },
  quotery: {
    website: "https://quotery.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/Quotery",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Quotery/main/Quotery.png",
  },
  project_chaos: {
    website: "https://project-chaos.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/Project-Chaos",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Project-Chaos/main/Project-Chaos.png",
  },
  foodies: {
    website: "https://foodies-delivery.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/Foodies",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Foodies/main/Foodies.png",
  },
  aesthetic_os: {
    website: "https://aesthetic-os.netlify.app/",
    github: "https://github.com/Nacho-Keiniger/Aesthetic-OS",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Aesthetic-OS/main/Aesthetic-OS.png",
  },
  tp_gbd: {
    website: "",
    github: "https://github.com/Nacho-Keiniger/TP-SO",
    image:
      "https://raw.githubusercontent.com/Nacho-Keiniger/Trabajo-Pr-ctico-SQL/main/TP-SQL.png",
  },
  tp_so: {
    website: "",
    github: "https://github.com/Nacho-Keiniger/TP-SO",
    image: "https://raw.githubusercontent.com/Nacho-Keiniger/TP-SO/main/SO.png",
  },
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
    <div style={{ display: "inline-block", margin: "0px 15px 0px 10px" }}>
      |
    </div>
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

  switch (language) {
    case "es":
      {
        return (
          <>
            <Title>Trabajo práctico de Diseño de Sistemas (UTN)</Title>
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
              Hecho con C#, HTML, Bootstrap, Javascript y MySQL. Es
              completamente responsive. Fue un trabajo práctico anual, elaborado
              con un equipo de 5 personas. Me encargué principalmente del front
              end con Razor Pages y Bootstrap, de la parte del Backend con
              Entity Framework y MySQL, de la interacción entre la aplicación y
              Mercadolibre mediante APIs REST y también estuve involucrado en el
              sistema de logins.
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
            <img
              className={styles.image}
              alt="moneylog"
              src={sites.moneylog.image}
            />
            <p>
              Hecha con React. Es una página para registrar gastos mensuales.
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
              Una de mis primeras páginas. Está hecha con Sass para los estilos
              y HTML para todo lo demás. Es completamente responsive. Fue
              pensada para ser una página de inicio para cualquier navegador.
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
              Hecho con Bootstrap y Javascript puro. También, es completamente
              responsive. Fue pensada como mockup para una empresa que requiere
              un sistema de registros para la materia anual Diseño de Sistemas
              de la UTN.
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
            <img
              className={styles.image}
              alt="quotery"
              src={sites.quotery.image}
            />
            <p>
              Hecho con React, React-Router y Firebase. Es una página en la que
              se pueden subir frases, citas, aforismos, etc.
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
              Hecho con Angular y Firebase como base de datos. Es un juego de
              cartas de dos jugadores en tiempo real.
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
            <img
              className={styles.image}
              alt="foodies"
              src={sites.foodies.image}
            />
            <p>
              Hecho con React, Redux y Firebase. Es una interfaz gráfica para
              pedir deliverys.
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
              Hecho con React. Es una página que desarrollé con la intención de
              emular la interfaz de un sistema operativo en el navegador.
            </p>
            <br />
            <hr />
            <br />
            <Title>Trabajo práctico de Gestión de Bases de Datos (UTN)</Title>
            <Subtitle>
              <a href={sites.tp_gbd.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="tp_gbd"
              src={sites.tp_gbd.image}
            />
            <p>
              Hecho con SQL Server y PL-SQL. Fue un trabajo práctico
              cuatrimestral, elaborado con un equipo de 4 personas. Me encargué
              de la parte del diseño de la nueva base de datos, la migración y
              del scripting PL-SQL
            </p>
            <br />
            <hr />
            <br />
            <Title>Trabajo práctico de Sistemas Operativos (UTN)</Title>
            <Subtitle>
              <a href={sites.tp_so.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img className={styles.image} alt="tp_so" src={sites.tp_so.image} />
            <p>
              Hecho con C, Makefiles y Linux Scripting. Fue un trabajo práctico
              cuatrimestral, elaborado con un equipo de 5 personas. Me encargué
              del desarrollo de código asíncrono entre procesos por medio de
              semáforos, y de la detección de deadlock de esos mismos procesos.
            </p>
            <br />
            <hr />
            <br />
            <Title>Este curriculum</Title>
            <p>Hecho con React, React-Router, Rnd-React y mucho amor {"<3"}</p>
            <br />
          </>
        );
      }
      break;
    case "en":
      {
        return (
          <>
            <Title>Assignment for the subject "System Design" (UTN)</Title>
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
              Made with C#, HTML, Bootstrap, Javascript and MySQL. It's
              completely responsive. It was the result of a year-long
              assignment, developed with a 5 person team. I was involved in the
              Front End using Razor Pages and Bootstrap, the Back End, using
              Entity Framework and MySQL. I developed the interaction between
              Mercadolibre and REST APIs, and I was also involved in the login
              system.
            </p>
            <br />
            <hr />
            <br />
            <Title>Moneylog</Title>
            <Subtitle>
              <a href={sites.moneylog.github} target="_blank">
                Github {openIcon}
              </a>
              <VerticalLine />
              <a href={sites.moneylog.website} target="_blank">
                Website {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="moneylog"
              src={sites.moneylog.image}
            />
            <p>
              Made with React. It's a website that helps you track monthly
              expenditures.
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
              One of my fist websites. It was written with Sass for the styling
              and HTML for everything else. It's completely responsive and it's
              thought out to be a Homepage for any browser.
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
              Made with Bootstrap and vanilla Javascript. It's also completely
              responsive. It was designed as a mockup for a business in the need
              of a registry UI, and it was a college assignment.
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
            <img
              className={styles.image}
              alt="quotery"
              src={sites.quotery.image}
            />
            <p>
              Made with React, React-Router and Firebase. It's a website in
              which one can upload quotes, phrases, aphorisms, etc.
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
              Made with Angular and Firebase as a database. It's a real-time
              multiplayer card game that can be played directly on the browser.
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
            <img
              className={styles.image}
              alt="foodies"
              src={sites.foodies.image}
            />
            <p>
              Made with React, Redux and Firebase. It's a dummy UI for a food
              delivery app.
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
              Made with React. It's a website I developed with the intention of
              emulating an operating system's interface in the browser.
            </p>
            <br />
            <hr />
            <br />
            <Title>
              Assignment for the subject "Database Management" (UTN)
            </Title>
            <Subtitle>
              <a href={sites.tp_gbd.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="tp_gbd"
              src={sites.tp_gbd.image}
            />
            <p>
              Made with SQL Server and PL-SQL. It was a four month long
              assignment developed with four people. I was in charge of the
              design of the database, the migration and the PL-SQL scripting.
            </p>
            <br />
            <hr />
            <br />
            <Title>Assignment for the subject "Operating Systems" (UTN)</Title>
            <Subtitle>
              <a href={sites.tp_so.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img className={styles.image} alt="tp_so" src={sites.tp_so.image} />
            <p>
              Made with C, Makefiles and Linux Scripting. It was a four month
              assignment, developed with a group of five people. I was in charge
              of the asynchronous code between processes through semaphores, and
              the deadlock detection of those same processes.
            </p>
            <br />
            <hr />
            <br />
            <Title>This resumé</Title>
            <p>
              Made with React, React-Router, Rnd-React and lots of love {"<3"}
            </p>
            <br />
          </>
        );
      }
      break;
    case "it":
      {
        return (
          <>
            <Title>
              Lavoro per la materia "Progettazione dei Sistemi" (UTN)
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
              Realizzato con C#, HTML, Bootstrap, Javascript e MySQL. È
              completamente reattivo. È stato il risultato di un incarico di un
              anno, sviluppato con una squadra di cinque persone. Sono stato
              coinvolto nel Frontend utilizzando Razor Pages e Bootstrap, nel
              Backend, usando Entity Framework e MySQL. Ho sviluppato
              l'interazione tra Mercadolibre e una API REST, ed ero anche
              coinvolto nel sistema di login.
            </p>
            <br />
            <hr />
            <br />
            <Title>Moneylog</Title>
            <Subtitle>
              <a href={sites.moneylog.github} target="_blank">
                Github {openIcon}
              </a>
              <VerticalLine />
              <a href={sites.moneylog.website} target="_blank">
                Website {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="moneylog"
              src={sites.moneylog.image}
            />
            <p>
              Realizzato con React. È un sitio web che serve per tenere traccia
              delle spese mensili.
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
              Uno dei miei primi siti web. È stato scritto con Sass per lo
              styling e HTML per tutto il resto. È completamente reattivo ed è
              pensato per essere una homepage per qualsiasi browser.
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
              Realizzato con bootstrap e JavaScript puro. È anche completamente
              reattivo. È stato progettato come un mockup per un'azienda nella
              necessità di un UI per i registri, ed è stato un incarico della
              mia facoltà.
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
            <img
              className={styles.image}
              alt="quotery"
              src={sites.quotery.image}
            />
            <p>
              Realizzatoo con React, React-Router e Firebase. È un sito web in
              cui si può caricare citazioni, frasi, aforismi, ecc.
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
              Realizzato con Angular e Firebase come database. È un gioco di
              carte multiplayer in tempo reale che può essere giocato
              direttamente sul browser.
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
            <img
              className={styles.image}
              alt="foodies"
              src={sites.foodies.image}
            />

            <p>
              Realizzato con React, Redux e Firebase. È un dummy UI per un'app
              di consegna alimentare.
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
              Fatto con React. È un sito web che ho sviluppato con l'intenzione
              di emulare l'interfaccia di un sistema operativo nel browser.
            </p>
            <br />
            <hr />
            <br />
            <Title>Lavoro per la materia "Gestione di Database" (UTN)</Title>
            <Subtitle>
              <a href={sites.tp_gbd.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="tp_gbd"
              src={sites.tp_gbd.image}
            />
            <p>
              Realizzato con SQL Server e PL-SQL. Era un incarico di quattro
              messi sviluppato con una squadra di quattro persone. Ero
              responsabile della progettazione del database, della migrazione e
              dello scripting PL-SQL.
            </p>
            <br />
            <hr />
            <br />
            <Title>Lavoro per la materia "Sistemi Operativi" (UTN)</Title>
            <Subtitle>
              <a href={sites.tp_so.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img className={styles.image} alt="tp_so" src={sites.tp_so.image} />
            <p>
              Realizzato con C, Makefiles e scripting Linux. Era un incarico di
              quattro mesi, sviluppato con un gruppo di cinque persone. Ero
              responsabile del codice asincrono tra i processi attraverso
              semafori e il rilevamento del deadlock di quegli stessi processi.
            </p>
            <br />
            <hr />
            <br />
            <Title>Questo curriculum</Title>
            <p>
              Realizzato con React, React-Router, Rnd-React e molto amore {"<3"}
            </p>
            <br />
          </>
        );
      }
      break;
    case "de":
      {
        return (
          <>
            <Title>Zuordnung für das Studienfach "Systemdesign" (UTN)</Title>
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
              Hergestellt mit C#, HTML, Bootstrap, Javascript und MySQL. Es ist
              völlig ansprechend. Es war das Ergebnis einer jahrelangen Aufgabe,
              entwickelt mit einem Fünf-Personen-Team. Ich war an dem vorderen
              Ende mit Razor Pages und Bootstrap, dem Backende, mit Entity
              Framework und MySQL beteiligt. Ich entwickelte die Wechselwirkung
              zwischen Mercadolibre und Rest APIs, und ich war auch an dem
              Login-System beteiligt.
            </p>
            <br />
            <hr />
            <br />
            <Title>Moneylog</Title>
            <Subtitle>
              <a href={sites.moneylog.github} target="_blank">
                Github {openIcon}
              </a>
              <VerticalLine />
              <a href={sites.moneylog.website} target="_blank">
                Website {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="moneylog"
              src={sites.moneylog.image}
            />
            <p>
              Hergestellt mit React. Es ist eine Website, die Ihnen hilft,
              monatliche Ausgaben zu verfolgen.
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
              Eine meiner Faust-Websites. Es wurde mit Sass für das Styling und
              HTML für alles andere geschrieben. Es ist völlig ansprechend und
              es ist angenommen, dass es für einen Browser eine Homepage ist.
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
              Gemacht mit Bootstrap und Vanille Javascript. Es ist auch völlig
              ansprechend. Es wurde als Modell für ein Unternehmen in der
              Notwendigkeit einer Registrierungs-Benutzeroberfläche konzipiert,
              und es war eine Uni-Aufgabe.
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
            <img
              className={styles.image}
              alt="quotery"
              src={sites.quotery.image}
            />
            <p>
              Hergestellt mit React, React-Router und Firebase. Es ist eine
              Website, in der man Anführungszeichen, Phrasen, Aphorismen usw.
              hochladen kann.
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
              Gemacht mit Angular und Firebase als Datenbank. Es ist ein
              Echtzeit-Multiplayer-Kartenspiel, das direkt auf dem Browser
              abgespielt werden kann.
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
            <img
              className={styles.image}
              alt="foodies"
              src={sites.foodies.image}
            />
            <p>
              Hergestellt mit React, Redux und Firebase. Es ist eine
              Dummy-Benutzeroberfläche für eine Food-Delivery-App.
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
              Gemacht mit React. Es ist eine Website, die ich mit der Absicht
              entwickelt habe, die Schnittstelle eines Betriebssystems im
              Browser zu emulieren.
            </p>
            <br />
            <hr />
            <br />
            <Title>
              Zuordnung für das Studienfach "Datenbankverwaltung" (UTN)
            </Title>
            <Subtitle>
              <a href={sites.tp_gbd.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img
              className={styles.image}
              alt="tp_gbd"
              src={sites.tp_gbd.image}
            />
            <p>
              Gemacht mit SQL Server und PL-SQL. Es war eine viermonatige
              Aufgabe, die mit vier Personen entwickelt wurde. Ich war
              verantwortlich für das Design der Datenbank, der Migration und der
              PL-SQL Scripting.
            </p>
            <br />
            <hr />
            <br />
            <Title>Zuordnung für das Studienfach "Betriebssysteme" (UTN)</Title>
            <Subtitle>
              <a href={sites.tp_so.github} target="_blank">
                Github {openIcon}
              </a>
            </Subtitle>
            <img className={styles.image} alt="tp_so" src={sites.tp_so.image} />
            <p>
              Hergestellt mit C, Makefiles und Linux Scripting. Es war ein
              viermonatiger Auftrag, der mit einer Gruppe von fünf Personen
              entwickelt wurde. Ich hatte den asynchronen code zwischen
              Prozessen über Semaphore und der Deadlock-Nachweis derselben
              Prozesse zuständig.
            </p>
            <br />
            <hr />
            <br />
            <Title>Diese Lebenszeit</Title>
            <p>
              Hergestellt mit React, React-Router, Rnd-React und viel Liebe{" "}
              {"<3"}
            </p>
            <br />
          </>
        );
      }
      break;
  }
}
