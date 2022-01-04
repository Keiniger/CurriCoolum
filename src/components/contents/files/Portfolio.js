import React, { useContext } from "react";
import { defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export let PortfolioTitle = {
  en: "Portfolio",
  es: "Portfolio",
  it: "Portfolio",
  de: "Portfolio",
};
export default function Portfolio() {
  const { lang, id } = useParams();
  const language = lang || defaultLang;
  return (
    <>
      <h2> Trabajo práctico anual de Diseño de Sistemas (UTN)</h2>
      <p>
        Hecho con C#, HTML, Bootstrap, Javascript y MySQL. Es completamente
        responsive. Fue un trabajo práctico anual, elaborado con un equipo de 5
        personas. Me encargué principalmente del front end con Razor Pages y
        Bootstrap, de la parte del Backend con Entity Framework y MySQL, de la
        interacción entre la aplicación y Mercadolibre mediante APIs REST y
        también estuve involucrado en el sistema de logins.
      </p>
      <br />
      <hr />
      <br />
      <h2>Homepage</h2>
      <p>
      Una de mis primeras páginas. Está hecha con Sass para los estilos y HTML
      para todo lo demás. Es completamente responsive. Fue pensada para ser una
      página de inicio para el navegador.
      </p>
      <br />
      <hr />
      <br />
      <h2>GEOC</h2>
      <p>
      Hecho con Bootstrap y Javascript puro. También, es completamente
      responsive. Fue pensada como mockup para una empresa que requiere un
      sistema de registros para la materia anual Diseño de Sistemas de la UTN.
      </p>
      <br />
      <hr />
      <br />
      <h2>React Quotes</h2>
      <p>
      Hecho con React, React-Router y Firebase. Es una página en la que se
      pueden subir frases, citas, aforismos, etc.
      </p>
      <br />
      <hr />
      <br />
      <h2>Chaos project</h2>
      <p>
      Hecho con Angular y Firebase como base de datos. Es un juego de cartas de
      dos jugadores en tiempo real.
      </p>
      <br />
      <hr />
      <br />
      <h2>Este curriculum</h2>
      <p>
      Hecho con React. Utilicé las librerías React-Router, y Rnd-React.
      </p>
      <br />
      <hr />
      <br />
      <h2>Meetups</h2>
      <p>
      Hecho con React y Next.js. Es una página para administrar la convocatoria
      a eventos.
      </p>
      <br />
      <hr />
      <br />
      <h2>Food ordering</h2>
      <p>
      Hecho con React, Redux y Firebase. Es una interfaz gráfica para pedir
      deliverys.
      </p>
      <br />
      <hr />
      <br />
      <h2>Floating</h2>
      <p>
      Hecho con React. Es una página que desarrollé con la intención de emular
      la interfaz de un sistema operativo en el navegador.
      </p>
      <br />
      <hr />
      <br />
      <h2>Trabajo práctico cuatrimestral de Gestión de Bases de Datos (UTN)</h2>
      <p>
      Hecho con SQL Server y PL-SQL. Fue un trabajo práctico cuatrimestral,
      elaborado con un equipo de 4 personas. Me encargué de la parte del diseño
      de la nueva base de datos, la migración y del scripting PL-SQL
      </p>
      <br />
      <hr />
      <br />
      <h2>Trabajo práctico cuatrimestral de Sistemas Operativos (UTN)</h2>
      <p>
      Hecho con C, Makefiles y Linux Scripting. Fue un trabajo práctico
      cuatrimestral, elaborado con un equipo de 5 personas. Me encargué del
      desarrollo de código asíncrono entre procesos por medio de semáforos, y de
      la detección de deadlock de esos mismos procesos.
      </p>
      <br />
      <hr />
      <br />
      <h2>Moevius</h2>
      <p>
      Una de mis primeras páginas, solo contiene HTML y CSS. Fue un trabajo
      práctico para un curso Fullstack de Codo a Codo.
      </p>
      <br />
    </>
  );
}
