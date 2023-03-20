import React from "react";
import profileImg from "../images/profile.png";
import "./Me.css";

function Me() {
  return (
    <div className="me" id="me">
      <h1 id="name">Alexandre Oliveira</h1>
      <div className="me-img">
        <img src={profileImg} alt="me" />
      </div>
      <h3 id="nameDescription">Olá, Seja bem vindo(a)</h3>
    </div>
  );
}

export default Me;
