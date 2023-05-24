import "./Description.css";

function Description() {
  return (
    <div className="descript-container" id="about">
      <div className="descript-box">
        <h1>Breve descrição sobre mim..</h1>
        <p>
          <span className="change">Brasileiro</span>, nascido no município de
          Içara-SC, aos 5 anos mudei-me{" "}
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
    </div>
  );
}

export default Description;
