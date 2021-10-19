# ReactDOM render

React y ReactDOM trabajarán en conjunto.

- React como análogo a createElement
- ReactDOM a appendChild

## Funcion render

Recibe dos parametros:

1. Que se va a renderizar
2. Donde se va a renderizar

## JSX

Permite utilizar etiquetas en un formato js. Siempre se debe import React

```
import React from "react";
```

En REact existen dos formas de crear elementos:

```
const element = <h1> Hello anker, React</h1>;
```

o **createElement** que posee tres paramentros (tipo, atributos,contenido)

```
const element = React.createElement(
  "a",
  { href: "https://www.google.com.pe" },
  "Google"
);

```

### Agregar una variable

Se agrea con la comilla simple entre llaves despues de simbolo de $

```
const name = "Anker";
const element = React.createElement("h1", {}, `Hola soy ${name}`);

```

con jsx se realiza de la siguiente forma:

```
const jsx = <h1> Hola {name}!!</h1>;
```

Tambien se puede colocar expresiones entre las llaves como operaciones o funciones. Para introducir un fragmento de codigo hmtl se realiza de la siguiente manera

```
const jsx = (
  <div>
    <h1>Hola Anker</h1>
    <p>Introduccion a React</p>
  </div>
);
```

Tambien se puede realizar

```
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola Anker"),
  React.createElement("p", {}, "Introduccion a React")
);
```
