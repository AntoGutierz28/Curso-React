/*const element = document.createElement("h1");
element.textContent = "Hello Anker!!";

const container = document.getElementById("app");
container.appendChild(element);*/

import React from "react";
import ReactDOM from "react-dom";

//const element = <h1> Hello anker, React</h1>;
/*const element = React.createElement(
  "a",
  { href: "https://www.google.com.pe" },
  "Ir a Google"
);*/
const name = "Anker";
//const element = React.createElement("h1", {}, `Hola soy ${name}`);
const jsx = (
  <div>
    <h1>Hola Anker</h1>
    <p>Introduccion a React</p>
  </div>
);
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola Anker"),
  React.createElement("p", {}, "Introduccion a React")
);
const container = document.getElementById("app");

ReactDOM.render(element, container);
