import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ALexandre Oliveira</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#me">Eu</Nav.Link>
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#stacks">Tech Stacks</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#footer">Contato</Nav.Link>
              <NavDropdown title="Projetos" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  target="_blank"
                  href="https://prime-tunes.vercel.app/"
                >
                  PRIMETUNES
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://alexyoliveira.github.io/recipes-app/"
                >
                  RECIPES APP
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://alexyoliveira.github.io/shopping-cart/"
                >
                  SHOPPING CART
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  target="_blank"
                  href="https://alexyoliveira.github.io/trybewallet/"
                >
                  TRYBE WALLET
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
