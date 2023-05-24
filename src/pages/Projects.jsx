import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Projects.css";
import recippImg from "../images/recipes-app.png";
import primeTunesImg from "../images/prime-tunes.png";
import trybeWallet from "../images/wallet.png";
import onlineStore from "../images/online-store.jpg";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="cards">
        <Card className="cardStyle" style={{ width: "15rem" }}>
          <Card.Img variant="top" src={primeTunesImg} />
          <Card.Body>
            <Card.Title>Prime Tunes</Card.Title>
            <Card.Text>
              Uma aplicação capaz de reproduzir músicas das mais variadas bandas
              e artistas, criar uma lista de músicas favoritas e editar o perfil
              da pessoa usuária logada.
            </Card.Text>
            <Button target="_blank" href="https://prime-tunes.vercel.app/">
              WebSite
            </Button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/AlexyOliveira/prime-tunes/tree/main"
              className="btn btn-dark m-1"
            >
              GitHub
            </a>
          </Card.Body>
        </Card>
        <Card className="cardStyle" style={{ width: "15rem" }}>
          <Card.Img variant="top" src={recippImg} />
          <Card.Body>
            <Card.Title>Recipes App</Card.Title>
            <Card.Text>
              Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o
              progresso de preparação de receitas de comidas e bebidas!
              <br />
              <br />
            </Card.Text>
            <Button target="_blank" href="https://recipes-app-one.vercel.app/">
              WebSite
            </Button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/AlexyOliveira/recipes-app/tree/main"
              className="btn btn-dark m-1"
            >
              GitHub
            </a>
          </Card.Body>
        </Card>
        <Card className="cardStyle" style={{ width: "15rem" }}>
          <Card.Img variant="top" src={onlineStore} />
          <Card.Body>
            <Card.Title>Online Store</Card.Title>
            <Card.Text>
            Uma loja com milhares de produtos e suas categorias.
             Tudo que você precisa para efetuar a compra de um bom produto, desde a escolha ao pagamento.
            </Card.Text>
            <Button target="_blank" href="https://online-store-smoky-one.vercel.app/">
              WebSite
            </Button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/AlexyOliveira/online-store"
              className="btn btn-dark m-1"
            >
              GitHub
            </a>
          </Card.Body>
        </Card>
        <Card className="cardStyle" style={{ width: "15rem" }}>
          <Card.Img variant="top" src={trybeWallet} />
          <Card.Body>
            <Card.Title>Trybe Wallet</Card.Title>
            <Card.Text>
              Nessa aplicação você tem uma carteira de controle de gastos com
              conversor de moedas podendo adicionar remover, vizualizar
              tabela...
              <br />
              <br />
            </Card.Text>
            <Button
              target="_blank"
              href="https://trybewallet-navy-gamma.vercel.app/"
            >
              WebSite
            </Button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/AlexyOliveira/trybewallet/tree/main"
              className="btn btn-dark m-1"
            >
              GitHub
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
