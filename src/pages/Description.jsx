import "./Description.css";

function Description() {
  return (
    <div className="descript-container" id="about">
      <div className="descript-box">
        <h1>Breve descrição sobre mim..</h1>
        <p>
          <span className="change">Brasileiro</span>, nascido no município de
          Içara-SC em 1992. Aos 5 anos vim para{" "}
          <span className="change">
            Tramandaí (uma cidade litorania do Rio Grande do Sul)
          </span>
          . Em 2020 com foco em crescimento pessoal e familiar comecei a me
          interessar pelo desenvolvimento web, com 6 meses de pratica em
          html/css/bootstrap, resolvi que precisava de um apoio mais{" "}
          <strong>profissional</strong>, então em junho de 2022 ingressei na{" "}
          <a target="_blank" href="https://www.betrybe.com/">
            <strong>Trybe</strong>{" "}
          </a>
          uma escola que te ensina a trabalhar e crescer nessa área. Em 2023
          pretendo estar formado e trabalhando.
        </p>
      </div>
    </div>
  );
}

export default Description;
