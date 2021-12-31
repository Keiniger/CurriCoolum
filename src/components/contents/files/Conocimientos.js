export default function textoConocimientos() {
  return (
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
              <li> Functional Components </li>
              <li> Class Components</li>
              <li> Redux </li>
              <li> React Router </li>
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
  );
}