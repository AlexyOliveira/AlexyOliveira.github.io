// import myPicture from "../images/foto.png";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      {/* <div className="about-img">
        <img src={myPicture} alt="my-picture" className="my-picture" />
      </div> */}

      <div className="about-content">
        <div className="adf">
          <h2 className="heading">
            <span style={{ color: "white" }}>Sobre</span> <span>Mim</span>
          </h2>
        </div>

        <p>
          Sou apaixonado por tecnologia e desenvolvimento de aplicações
          inovadoras. Tenho mais de 2 anos de experiência em projetos
          desafiadores, incluindo 10 meses em iniciativas independentes e mais
          de 1 ano de formação intensiva na{" "}
          <a target="_blank" href="https://www.betrybe.com/">
            <strong>Trybe</strong>
          </a>{" "}
          , onde me tornei desenvolvedor web full stack. Na Trybe, trabalhei em
          projetos individuais e em equipe com tecnologias líderes de mercado,
          adquirindo conhecimento prático em metodologias ágeis e habilidades
          sociais.
        </p>
        <p>
          Minhas habilidades abrangem desenvolvimento full stack com React.js,
          React Native, JavaScript, Redux, HTML, CSS, Jest/RTL, TypeScript,
          MySQL, Bootstrap, Node.js e Python. Atualmente, estou focado no
          desenvolvimento de aplicativos mobile usando React Native.
        </p>
        <p>
          Estou sempre em busca de desafios e oportunidades para aplicar minha
          paixão pelo desenvolvimento de software em projetos inovadores e
          impactantes. Se você procura um profissional dedicado e comprometido
          com resultados excepcionais, estou pronto para fazer a diferença no
          seu time!
        </p>
      </div>
    </section>
  );
}
