import React, { useContext } from "react";
import { browserLang, defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export const PortfolioTitle = {
  en: "Portfolio",
  es: "Portfolio",
  it: "Portfolio",
  de: "Portfolio",
};

export default function Portfolio() {
  const { lang, id } = useParams();
  const language = lang || browserLang || defaultLang;

  switch (language) {
    case "es":
      {
        return (
          <>
            <h2>Trabajo práctico de Diseño de Sistemas (UTN)</h2>
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
            <h2>Homepage</h2>
            <p>
              Una de mis primeras páginas. Está hecha con Sass para los estilos
              y HTML para todo lo demás. Es completamente responsive. Fue
              pensada para ser una página de inicio para cualquier navegador.
            </p>
            <br />
            <hr />
            <br />
            <h2>GEOC</h2>
            <p>
              Hecho con Bootstrap y Javascript puro. También, es completamente
              responsive. Fue pensada como mockup para una empresa que requiere
              un sistema de registros para la materia anual Diseño de Sistemas
              de la UTN.
            </p>
            <br />
            <hr />
            <br />
            <h2>React Quotes</h2>
            <p>
              Hecho con React, React-Router y Firebase. Es una página en la que
              se pueden subir frases, citas, aforismos, etc.
            </p>
            <br />
            <hr />
            <br />
            <h2>Chaos project</h2>
            <p>
              Hecho con Angular y Firebase como base de datos. Es un juego de
              cartas de dos jugadores en tiempo real.
            </p>
            <br />
            <hr />
            <br />
            <h2>Meetups</h2>
            <p>
              Hecho con React y Next.js. Es una página para administrar la
              convocatoria a eventos.
            </p>
            <br />
            <hr />
            <br />
            <h2>Foodies Delivery</h2>
            <p>
              Hecho con React, Redux y Firebase. Es una interfaz gráfica para
              pedir deliverys.
            </p>
            <br />
            <hr />
            <br />
            <h2>Floating</h2>
            <p>
              Hecho con React. Es una página que desarrollé con la intención de
              emular la interfaz de un sistema operativo en el navegador.
            </p>
            <br />
            <hr />
            <br />
            <h2>Trabajo práctico de Gestión de Bases de Datos (UTN)</h2>
            <p>
              Hecho con SQL Server y PL-SQL. Fue un trabajo práctico
              cuatrimestral, elaborado con un equipo de 4 personas. Me encargué
              de la parte del diseño de la nueva base de datos, la migración y
              del scripting PL-SQL
            </p>
            <br />
            <hr />
            <br />
            <h2>Trabajo práctico de Sistemas Operativos (UTN)</h2>
            <p>
              Hecho con C, Makefiles y Linux Scripting. Fue un trabajo práctico
              cuatrimestral, elaborado con un equipo de 5 personas. Me encargué
              del desarrollo de código asíncrono entre procesos por medio de
              semáforos, y de la detección de deadlock de esos mismos procesos.
            </p>
            <br />
            <hr />
            <br />
            <h2>Moevius</h2>
            <p>
              Una de mis primeras páginas, solo contiene HTML y CSS. Fue un
              trabajo práctico para un curso Fullstack de Codo a Codo.
            </p>
            <br />
            <hr />
            <br />
            <h2>Este curriculum</h2>
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
            <h2>Assignment for the subject "System Design" (UTN)</h2>
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
            <h2>Homepage</h2>
            <p>
              One of my fist websites. It was written with Sass for the styling
              and HTML for everything else. It's completely responsive and it's
              thought out to be a Homepage for any browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>GEOC</h2>
            <p>
              Made with Bootstrap and vanilla Javascript. It's also completely
              responsive. It was designed as a mockup for a business in the need
              of a registry UI, and it was a college assignment.
            </p>
            <br />
            <hr />
            <br />
            <h2>React Quotes</h2>
            <p>
              Made with React, React-Router and Firebase. It's a website in
              which one can upload quotes, phrases, aphorisms, etc.
            </p>
            <br />
            <hr />
            <br />
            <h2>Chaos project</h2>
            <p>
              Made with Angular and Firebase as a database. It's a real-time
              multiplayer card game that can be played directly on the browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>Meetups</h2>
            <p>
              Made with React and Next.js. It's a website made for planning
              meetups.
            </p>
            <br />
            <hr />
            <br />
            <h2>Foodies Delivery</h2>
            <p>
              Made with React, Redux and Firebase. It's a dummy UI for a food
              delivery app.
            </p>
            <br />
            <hr />
            <br />
            <h2>Floating</h2>
            <p>
              Made with React. It's a website I developed with the intention of
              emulating an operating system's interface in the browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>Assignment for the subject "Database Management" (UTN)</h2>
            <p>
              Made with SQL Server and PL-SQL. It was a four month long
              assignment developed with four people. I was in charge of the
              design of the database, the migration and the PL-SQL scripting.
            </p>
            <br />
            <hr />
            <br />
            <h2>Assignment for the subject "Operating Systems" (UTN)</h2>
            <p>
              Made with C, Makefiles and Linux Scripting. It was a four month
              assignment, developed with a group of five people. I was in charge
              of the asynchronous code between processes through semaphores, and
              the deadlock detection of those same processes.
            </p>
            <br />
            <hr />
            <br />
            <h2>Moevius</h2>
            <p>
              One of my first websites. It entirely written in vanilla HTML and
              CSS. It was an assignment I had to hand in for a Fullstack course
              called "Codo a Codo".
            </p>
            <br />
            <hr />
            <br />
            <h2>This resumé</h2>
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
            <h2>Lavoro per la materia "Progettazione dei Sistemi" (UTN)</h2>
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
            <h2>Homepage</h2>
            <p>
              Uno dei miei primi siti web. È stato scritto con Sass per lo
              styling e HTML per tutto il resto. È completamente reattivo ed è
              pensato per essere una homepage per qualsiasi browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>GEOC</h2>
            <p>
              Realizzato con bootstrap e JavaScript puro. È anche completamente
              reattivo. È stato progettato come un mockup per un'azienda nella
              necessità di un UI per i registri, ed è stato un incarico della
              mia facoltà.
            </p>
            <br />
            <hr />
            <br />
            <h2>React Quotes</h2>
            <p>
              Realizzatoo con React, React-Router e Firebase. È un sito web in
              cui si può caricare citazioni, frasi, aforismi, ecc.
            </p>
            <br />
            <hr />
            <br />
            <h2>Chaos project</h2>
            <p>
              Realizzato con Angular e Firebase come database. È un gioco di
              carte multiplayer in tempo reale che può essere giocato
              direttamente sul browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>Meetups</h2>
            <p>
              Fatto con React e Next.js. È un sito web fatto per la
              pianificazione di meetup.
            </p>
            <br />
            <hr />
            <br />
            <h2>Foodies Delivery</h2>
            <p>
              Realizzato con React, Redux e Firebase. È un dummy UI per un'app
              di consegna alimentare.
            </p>
            <br />
            <hr />
            <br />
            <h2>Floating</h2>
            <p>
              Fatto con React. È un sito web che ho sviluppato con l'intenzione
              di emulare l'interfaccia di un sistema operativo nel browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>Lavoro per la materia "Gestione di Database" (UTN)</h2>
            <p>
              Realizzato con SQL Server e PL-SQL. Era un incarico di quattro
              messi sviluppato con una squadra di quattro persone. Ero
              responsabile della progettazione del database, della migrazione e
              dello scripting PL-SQL.
            </p>
            <br />
            <hr />
            <br />
            <h2>Lavoro per la materia "Sistemi Operativi" (UTN)</h2>
            <p>
              Realizzato con C, Makefiles e scripting Linux. Era un incarico di
              quattro mesi, sviluppato con un gruppo di cinque persone. Ero
              responsabile del codice asincrono tra i processi attraverso
              semafori e il rilevamento del deadlock di quegli stessi processi.
            </p>
            <br />
            <hr />
            <br />
            <h2>Moevius</h2>
            <p>
              Uno dei miei primi siti web. Completamente scritto in HTML e CSS
              puri. Era un incarico che ho dovuto consegnare per un corso
              Fullstack chiamato "Codo a Codo".
            </p>
            <br />
            <hr />
            <br />
            <h2>Questo curriculum</h2>
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
            <h2>Zuordnung für das Studienfach "Systemdesign" (UTN)</h2>
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
            <h2>Homepage</h2>
            <p>
              Eine meiner Faust-Websites. Es wurde mit Sass für das Styling und
              HTML für alles andere geschrieben. Es ist völlig ansprechend und
              es ist angenommen, dass es für einen Browser eine Homepage ist.
            </p>
            <br />
            <hr />
            <br />
            <h2>GEOC</h2>
            <p>
              Gemacht mit Bootstrap und Vanille Javascript. Es ist auch völlig
              ansprechend. Es wurde als Modell für ein Unternehmen in der
              Notwendigkeit einer Registrierungs-Benutzeroberfläche konzipiert,
              und es war eine Uni-Aufgabe.
            </p>
            <br />
            <hr />
            <br />
            <h2>React Quotes</h2>
            <p>
              Hergestellt mit React, React-Router und Firebase. Es ist eine
              Website, in der man Anführungszeichen, Phrasen, Aphorismen usw.
              hochladen kann.
            </p>
            <br />
            <hr />
            <br />
            <h2>Chaos project</h2>
            <p>
              Gemacht mit Angular und Firebase als Datenbank. Es ist ein
              Echtzeit-Multiplayer-Kartenspiel, das direkt auf dem Browser
              abgespielt werden kann.
            </p>
            <br />
            <hr />
            <br />
            <h2>Meetups</h2>
            <p>
              Gemacht mit React und Next.js. Es ist eine Website für Planung von
              Meetups.
            </p>
            <br />
            <hr />
            <br />
            <h2>Foodies Delivery</h2>
            <p>
              Hergestellt mit React, Redux und Firebase. Es ist eine
              Dummy-Benutzeroberfläche für eine Food-Delivery-App.
            </p>
            <br />
            <hr />
            <br />
            <h2>Floating</h2>
            <p>
              Gemacht mit React. Es ist eine Website, die ich mit der Absicht
              entwickelt habe, die Schnittstelle eines Betriebssystems im
              Browser zu emulieren.
            </p>
            <br />
            <hr />
            <br />
            <h2>Zuordnung für das Studienfach "Datenbankverwaltung" (UTN)</h2>
            <p>
              Gemacht mit SQL Server und PL-SQL. Es war eine viermonatige
              Aufgabe, die mit vier Personen entwickelt wurde. Ich war
              verantwortlich für das Design der Datenbank, der Migration und der
              PL-SQL Scripting.
            </p>
            <br />
            <hr />
            <br />
            <h2>Zuordnung für das Studienfach "Betriebssysteme" (UTN)</h2>
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
            <h2>Moevius</h2>
            <p>
              Einer meiner ersten Websites. Es ist vollständig in Vanille HTML
              und CSS geschrieben. Es war eine Aufgabe, die ich für einen
              Fullstack-Kurs mit dem Namen "Codo a Codo" eingeben musste.
            </p>
            <br />
            <hr />
            <br />
            <h2>Diese Lebenszeit</h2>
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