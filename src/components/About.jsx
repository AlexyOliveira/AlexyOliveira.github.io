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
          <span style={{ color: "white" }}>Sobre</span>{" "}<span>Mim</span>
        </h2>
        <h3>
          <span>Desenvolvedor Web Full-Stack</span>
        </h3>
        <p>
          <span className="change">Nome:</span> Alexandre Oliveira <br />
          <span className="change">Local de nascimento:</span> Içara, Santa
          Catarina, Brasil <br />{" "}
          <span className="change">Localização atual:</span> Rio Grande do Sul, Brasil <br />
          <br />  
"Sou um apaixonado por tecnologia e um entusiasta incansável do desenvolvimento de aplicações inovadoras. Com mais de 2 anos de experiência em projetos desafiadores, sendo os últimos 10 meses dedicados a iniciativas independentes, e mais de 1 ano e 2 meses de formação intensiva na renomada escola <a target="_blank" href="https://www.betrybe.com/">
            <strong>Trybe</strong>
          </a>{" "}, onde me tornei um desenvolvedor web full stack.

Na Trybe, mergulhei em projetos estimulantes, tanto individuais quanto em equipe, trabalhando com tecnologias líderes de mercado. Durante esse período, adquiri conhecimento prático em metodologias ágeis, além de aprimorar minhas habilidades sociais, tornando-me não apenas um especialista técnico, mas também um colaborador eficaz em ambientes de equipe dinâmicos 🚀🚀.

Minhas habilidades abrangem o desenvolvimento full stack, com expertise em tecnologias essenciais, como React.js, React Native, JavaScript, Redux, HTML, CSS, Jest/RTL, TypeScript, MySQL, Bootstrap, Node.js e Python. Atualmente, estou imerso no universo do desenvolvimento de aplicativos utilizando React Native, explorando os limites da criação de experiências mobile envolventes e eficientes.

Estou sempre em busca de desafios estimulantes e oportunidades para aplicar minha paixão pelo desenvolvimento de software, contribuindo para projetos inovadores e impactantes. Se você procura um profissional dedicado, criativo e comprometido com resultados excepcionais, estou pronto para fazer a diferença no seu time!"
          <br />
        </p>
      </div>
    </section>
  );
}
