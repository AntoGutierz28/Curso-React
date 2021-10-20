import React from "react";
import "./styles/badge.css";
import img from "./image/LOGO2.png";

let imagen =
  "https://thumbs.dreamstime.com/b/dise%C3%B1os-tribales-del-lobo-del-tatuaje-71019149.jpg";

class Badge extends React.Component {
  render() {
    //const name = "Anker";
    //const surnme = "Gutierz";
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={img}></img>
        </div>
        <div className="Badge__section-name">
          <img src={imagen} className="Badge__avatar"></img>
          <h1>
            {this.props.name}
            <br /> {this.props.surname}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>Ingeniero de Sistemas</p>
          <p>@anker</p>
        </div>
        <div className="Badge__footer">#coderlife</div>
      </div>
    );
  }
}

export default Badge;
