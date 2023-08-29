import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import recippImg from "../images/recipes-app.png";
import primeTunesImg from "../images/prime-tunes.png";
import trybeWallet from "../images/wallet.png";
import onlineStore from "../images/online-store.jpg";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="heading">
        <span style={{ color: "white" }}>Últimos</span> <span>Projetos</span>
      </h2>

      <div className="portfolio-container">
        <Carousel className="carousel">
          <Carousel.Item className="item">
            <Card className="cardStyle">
              <Card.Img variant="top" src={primeTunesImg} />
              <Card.Body>
                <Card.Title>
                  <h4 style={{ color: "rgb(2, 89, 160)" }}>Prime Tunes</h4>
                </Card.Title>
                <Card.Text>
                  Uma aplicação capaz de reproduzir músicas das mais variadas
                  bandas e artistas, criar uma lista de músicas favoritas e
                  editar o perfil da pessoa usuária logada.
                </Card.Text>
                <Button
                  className="btn-lg"
                  target="_blank"
                  href="https://prime-tunes.vercel.app/"
                >
                  Deploy
                </Button>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/AlexyOliveira/prime-tunes/tree/main"
                  className="btn btn-lg btn-dark m-1"
                >
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item className="item">
            <Card className="cardStyle">
              <Card.Img variant="top" src={recippImg} />
              <Card.Body>
                <Card.Title>
                  <h4 style={{ color: "rgb(2, 89, 160)" }}>Recipes App</h4>
                </Card.Title>
                <Card.Text>
                  Nele é possível: ver, buscar, filtrar, favoritar e acompanhar
                  o progresso de preparação de receitas de comidas e bebidas!
                  <br />
                  <br />
                </Card.Text>
                <Button
                  className="btn-lg"
                  target="_blank"
                  href="https://recipes-app-one.vercel.app/"
                >
                  Deploy
                </Button>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/AlexyOliveira/recipes-app/tree/main"
                  className="btn btn-lg btn-dark m-1"
                >
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item className="item">
            <Card className="cardStyle">
              <Card.Img variant="top" src={onlineStore} />
              <Card.Body>
                <Card.Title>
                  <h4 style={{ color: "rgb(2, 89, 160)" }}>Online Store</h4>
                </Card.Title>
                <Card.Text>
                  Uma loja com milhares de produtos e suas categorias. Tudo que
                  você precisa para efetuar a compra de um bom produto, desde a
                  escolha ao pagamento.
                </Card.Text>
                <Button
                  className="btn-lg"
                  target="_blank"
                  href="https://online-store-smoky-one.vercel.app/"
                >
                  Deploy
                </Button>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/AlexyOliveira/online-store"
                  className="btn btn-lg btn-dark m-1"
                >
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item className="item">
            <Card className="cardStyle">
              <Card.Img variant="top" src={trybeWallet} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h4 style={{ color: "rgb(2, 89, 160)" }}>
                    Trybe Wallet
                  </h4>{" "}
                </Card.Title>
                <Card.Text>
                  Nessa aplicação você tem uma carteira de controle de gastos
                  com conversor de moedas podendo adicionar remover, vizualizar
                  tabela...
                  <br />
                  <br />
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://trybewallet-navy-gamma.vercel.app/"
                  className="btn-lg"
                >
                  Deploy
                </Button>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/AlexyOliveira/trybewallet/tree/main"
                  className="btn btn-lg btn-dark m-1"
                >
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
