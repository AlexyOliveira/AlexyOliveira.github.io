// import myPicture from "../images/foto.png";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      {/* <div className="about-img">
        <img src={myPicture} alt="my-picture" className="my-picture" />
      </div> */}

      <div className="about-content">
        <h2 className="heading">
        <span style={{color: "white"}}>Sobre</span><span>Mim</span>
        </h2>
        <h3><span>Desenvolvedor Web Full-Stack</span></h3>
        <p>
          <span className="change">Brasileiro</span>, nascido no município de
          Içara-SC, aos 5 anos mudei-me para{" "}
          <span className="change">
            Tramandaí, uma cidade litorânia do Rio Grande do Sul.
          </span>{" "}
          Em 2021, após 6 meses de estudos por conta própria, adquiri uma boa
          base em HTML/CSS/Bootstrap/JS. Hoje, em 05/08/2022, estou começando o
          curso de Desenvolvimento Web na{" "}
          <a target="_blank" href="https://www.betrybe.com/">
            <strong>Trybe.</strong>{" "}
          </a>
          A Trybe é uma escola de tecnologia que está genuinamente comprometida
          com o sucesso profissional de seus estudantes. Lá, desenvolvemos as
          tecnologias mais atualizadas do mercado, participando de vários
          projetos, tanto individualmente como em grupo. Além disso, aprendemos
          metodologias ágeis e as habilidades interpessoais tão importantes..
          🚀🚀.
        </p>
      </div>
    </section>
  );
}
