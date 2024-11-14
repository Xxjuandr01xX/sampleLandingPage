import React, { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Header } from "./components/Header.jsx";
import { Outstanding } from "./components/Outstanding.jsx";
import { ItemsSection } from "./components/ItemsSection.jsx";
import { Skills } from "./components/Skills.jsx";
import { SpecialOutsidingservices } from "./components/SpecialOutsidingservices.jsx";

import { Fade } from "react-reveal";

/**
 * Bootstrap
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/site.css";

function App() {
  const [menuOptions, setMenuOptions] = useState([
    "Principal",
    "Nosotros",
    "Servicios",
    "Productos",
  ]);

  const [itemsSection, setitemsSection] = useState([
    { icon: "bi bi-search", puntaje: "50", descripcion: "Buscar" },
    { icon: "bi bi-award-fill", puntaje: "70", descripcion: "Premiar" },
    { icon: "bi bi-bank2", puntaje: "80", descripcion: "Guardamos" },
    {
      icon: "bi bi-bar-chart-line-fill",
      puntaje: "90",
      descripcion: "Optimizar",
    },
    {
      icon: "bi bi-wrench-adjustable-circle-fill",
      puntaje: "100",
      descripcion: "Configurar",
    },
  ]);

  return (
    <div className="container-fluid">
      <Navbar options={menuOptions} />

      <Header />

      <Outstanding />
      <ItemsSection items={itemsSection} />

      <Fade>
        <Skills />
        <SpecialOutsidingservices />
      </Fade>
    </div>
  );
}

export default App;
