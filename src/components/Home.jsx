import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import picture from "../images/imagem.png";
import Curriculum from "../images/Curriculum.pdf";
import "./Home.css";

export default function Home() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3 style={{color: "black"}}>Olá, eu sou</h3>
        <h1>Alexandre Oliveira</h1>
        <h3  style={{color: "black"}}>
          Sou <span className="dev-full">Desenvolvedor Web Full-Stack</span>
        </h3>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/alexandre-oliveira-devweb/"
            className="social-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AlexyOliveira"
            className="social-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ale_oliverr/"
            className="social-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
         <a href={Curriculum} download type="button" className="btn-download">
          Download CV
        </a> 
      </div>

      <div className="home-img">
        <img src={picture} alt="picture" className="picture" />
      </div>
    </section>
  );
}
