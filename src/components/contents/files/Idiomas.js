import React from "react";

export default function Idiomas() {
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
          <h2>Inglés (Nivel C2)</h2>
          <ul>
            <li>Escrito: fluido</li>
            <li>Oral: fluido</li>
          </ul>
        </div>
        <div>
          <h2>Italiano (Nivel B2-C1)</h2>
          <ul>
            <li>Escrito: Avanzado</li>
            <li>Oral: Intermedio</li>
          </ul>
        </div>
        <div>
          <h2>Alemán (Nivel A2-B1)</h2>
          <ul>
            <li>Escrito: Intermedio</li>
            <li>Oral: Elemental</li>
          </ul>
        </div>
      </div>
    </>
  );
}
