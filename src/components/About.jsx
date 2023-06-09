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
          <span style={{ color: "white" }}>Sobre</span>
          <span>Mim</span>
        </h2>
        <h3>
          <span>Desenvolvedor Web Full-Stack</span>
        </h3>
        <p>
          "Olá, meu nome é <span className="change">Alexandre Oliveira</span> e
          sou <span className="change">brasileiro</span>. Nasci no município de
          Içara, em Santa Catarina, mas aos 5 anos de idade mudei-me para
          <span className="change"> Tramandaí</span>, uma bela cidade litorânea
          do Rio Grande do Sul. Desde cedo, desenvolvi um interesse apaixonado
          pelo mundo da tecnologia. Em 2021, decidi embarcar em uma jornada de
          aprendizado autodidata e dediquei seis meses ao estudo intensivo de
          HTML, CSS, Bootstrap e JavaScript. Essa experiência me proporcionou
          uma sólida base nessas tecnologias essenciais para o desenvolvimento
          web. Empolgado com meu progresso, decidi levar minha paixão pela
          tecnologia ao próximo nível e comecei o curso de Desenvolvimento Web
          na{" "}
          <a target="_blank" href="https://www.betrybe.com/">
            <strong>Trybe.</strong>
          </a>{" "}
          em 05/08/2022. Estou animado por fazer parte dessa renomada escola de
          tecnologia, que genuinamente se preocupa com o sucesso profissional de
          seus estudantes. Na Trybe, tenho a oportunidade de trabalhar com as
          tecnologias mais atualizadas do mercado e participar de projetos
          desafiadores, tanto individualmente como em equipe. Além do
          conhecimento técnico, também adquiro habilidades em metodologias ágeis
          e desenvolvo as competências interpessoais tão valorizadas no ambiente
          profissional. Estou ansioso para alavancar minhas habilidades e
          conhecimentos na área de desenvolvimento web, buscando oportunidades
          para aplicar soluções inovadoras e criar experiências online
          impactantes. Estou empenhado em construir uma carreira de sucesso
          nessa indústria em constante evolução. Vamos juntos nessa jornada de
          aprendizado e crescimento!" 🚀🚀
        </p>
      </div>
    </section>
  );
}
