import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import programing from "../images/programing.gif";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg" className="header-nav">
        <Container className="p-3">
          <Navbar.Brand href="#home">
            <div className="container-name">
              <h2 className="first-name">Alexandre</h2>
              <h2 className="second-name">Oliveira</h2>
              <span className="square">
                <img src={programing} alt="programing" />
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#skills">Tech Stacks</Nav.Link>
              <Nav.Link href="#projects">Projetos</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
