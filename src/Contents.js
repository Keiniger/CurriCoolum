import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contents.module.css";

const textIcon = <FontAwesomeIcon icon={faFileAlt} />;
const files = [
  {
    id: 1,
    x_index: 1,
    z_index: 1,
    icon: textIcon,
    title: "Portfolio.js",
    text: <h2> Aca van proyectos de mi portfolio. </h2>,
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: true,
    isSelected: false,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
  {
    id: 2,
    x_index: 2,
    z_index: 2,
    icon: textIcon,
    title: "Habilidades.doc",
    text: (
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
                <li>PostgressSQL</li>
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
                <li> SASS/CSS </li>
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
                <li> Functional components </li>
                <li> Class components</li>
                <li> Redux </li>
                <li> React Router </li>
                <li> Next.js </li>
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
            <li> Mobile-First, Diseño Responsive </li>
            <li> Teamwork </li>
            <li> Agile development y Scrum </li>
          </ul>
          <h2> Conocimientos varios </h2>
          <ul>
            <li> Git/Github </li>
            <li> Adobe Photoshop </li>
            <li> Adobe XD </li>
            <li> Adobe Illustrator </li>
            <li>
              Linux
              <ul>
                <li> Bash Scripting </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ),
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: true,
    isSelected: false,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.05,
    y: 0.2,
  },
  {
    id: 3,
    x_index: 3,
    z_index: 3,
    icon: textIcon,
    title: "Intereses.txt",
    text: <h2>Aca van mis pasatiempos.</h2>,
    isMaximized: false,
    isVisible: false,
    isOnTaskbar: true,
    isSelected: true,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.2,
    y: 0.3,
  },
  {
    id: 4,
    x_index: 4,
    z_index: 4,
    icon: textIcon,
    title: "Sobre_mi.exe",
    text: (
      <>
        <h1>Ignacio André Keiniger</h1>
        <h2>
          Villa Martelli · Vicente Lopez · 54 9 11 3505-6434 ·
          <a href="mailto:nkeiniger@gmail.com">nkeiniger@gmail.com</a>
        </h2>
        <p>
          Tengo 21 años y soy aspirante a desarrollador Full Stack. Amo aprender
          sobre nuevas tecnologías y resolver problemas. Estoy interesado en la
          programación funcional, el procesamiento de lenguajes naturales,
          blockchain, criptomonedas y machine learning.
        </p>
      </>
    ),
    isMaximized: false,
    isVisible: true,
    isOnTaskbar: true,
    isSelected: false,
    isPopup: true,
    width: 0.5,
    height: 0.6,
    x: 0.1,
    y: 0.1,
  },
];

export default files;
