import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

/*const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola Anker"),
  React.createElement("p", {}, "Introduccion a React")
);*/
const container = document.getElementById("app");

ReactDOM.render(<Badge name="AnkerGH" surname="2898" />, container);
