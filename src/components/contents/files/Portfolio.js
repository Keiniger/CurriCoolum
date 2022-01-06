import React, { useContext } from "react";
import { defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export const PortfolioTitle = {
  en: "Portfolio",
  es: "Portfolio",
  it: "Portfolio",
  de: "Portfolio",
};

export default function Portfolio() {
  const { lang, id } = useParams();
  const language = lang || defaultLang;

  switch (language) {
    case "es":
      {
        return (
          <>
            <h2> Trabajo práctico anual de Diseño de Sistemas (UTN)</h2>
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
            <h2>Food ordering</h2>
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
            <h2>
              Trabajo práctico cuatrimestral de Gestión de Bases de Datos (UTN)
            </h2>
            <p>
              Hecho con SQL Server y PL-SQL. Fue un trabajo práctico
              cuatrimestral, elaborado con un equipo de 4 personas. Me encargué
              de la parte del diseño de la nueva base de datos, la migración y
              del scripting PL-SQL
            </p>
            <br />
            <hr />
            <br />
            <h2>Trabajo práctico cuatrimestral de Sistemas Operativos (UTN)</h2>
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
            <h2>Este curriculum</h2>
            <p>
              Hecho con React, React-Router, Rnd-React y mucho amor `${"<3"}`
            </p>
            <br />
          </>
        );
      }
      break;
    case "en":
      {
        return (
          <>
            <h2> Year-long assignment for the subject "System Design" (UTN)</h2>
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
              Made with Angular.js and Firebase as a database. It's a real-time
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
            <h2>Food ordering</h2>
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
              emulating a OS interface in the browser.
            </p>
            <br />
            <hr />
            <br />
            <h2>
              Four-month assignment for the subject "Database Management" (UTN)
            </h2>
            <p>
              Made with SQL Server and PL-SQL. It was a four month long
              assignment developed with four people. I was in charge of the
              design of the database, the migration and the PL-SQL scripting.
            </p>
            <br />
            <hr />
            <br />
            <h2>
              Four-month assignment for the subject "Operating Systems" (UTN)
            </h2>
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
            <h2>This resumé</h2>
            <p>
              Made with React, React-Router, Rnd-React and lots of love `${"<3"}
              `
            </p>
            <br />
            <br />
          </>
        );
      }
      break;
    case "it":
      {
        return <>"Placeholder"</>;
      }
      break;
    case "de":
      {
        return <>"Placeholder"</>;
      }
      break;
  }
}
