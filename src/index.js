import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./shared/globalStyle";
import Nav from "./app/Nav";
import Home from "./app/Home";
import About from "./app/About";
import Tech from "./app/Tech";
import Proyectos from "./app/Proyectos";
import Contacto from "./app/Contacto";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Nav />
    <Home />
    <About />
    <Tech />
    <Proyectos />
    <Contacto />
  </React.StrictMode>,
  document.getElementById("root")
);
