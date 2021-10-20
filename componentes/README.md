# Componentes

- Bloques de construccion que se uytilizan para construir un website
- Es la unidad basica en React

## Crear componente

- El componente es una clase que hereda de **React.component**
- Todo componente requiere de un metodo esencial, que es **render**.

```
class Badge extends React.Component {
  render() {
    return <h1>Badge</h1>;
  }
}

export default Badge;
```

- Se debe importar el componente y agregar en el renderizado principal, siempre invocado como un tag

```
import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/badge";

const container = document.getElementById("app");

ReactDOM.render(<Badge />, container);
```

- Se pueden crear variable que van dentro de llaver al utilizar

```
let imagen =
  "https://thumbs.dreamstime.com/b/dise%C3%B1os-tribales-del-lobo-del-tatuaje-71019149.jpg";
class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={imagen}></img>
        </div>
        <div>
          <h1>
            Anker
            <br /> Gutierz
          </h1>
        </div>
        <div>
          <p>Ingeniero de Sistemas</p>
          <p>@anker</p>
        </div>
        <div>#coderlife</div>
      </div>
    );
  }
}
```

- Para usar una clase de estilos se usa el atributo className

```
<div className="Badge">
```

- Se puede instalar **Bootstrap** con npm

```
npm install bootstrap
```

- Se pueden crear hojas de estilos globales

```
import "./global.css";
```
