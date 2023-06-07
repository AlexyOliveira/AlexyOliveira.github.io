import {} from "react-icons/di";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiExpress,
  SiDocker,
  SiSequelize,
  SiTypescript,
  SiPython,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Habili<span>dades</span>
      </h2>
      <div className="skills-content">
        <SiJavascript className="skill-icon"></SiJavascript>
        <SiHtml5 className="skill-icon" />
        <SiCss3 className="skill-icon" />
        <SiReact className="skill-icon" />
        <SiNodedotjs className="skill-icon" />
        <SiMysql className="skill-icon" />
        <SiExpress className="skill-icon" />
        <SiGit className="skill-icon" />
        <SiSequelize className="skill-icon" />
        <SiTypescript className="skill-icon" />
        <SiTypescript className="skill-icon" />
        <SiBootstrap className="skill-icon" />
        <SiPython className="skill-icon" />
      </div>
    </section>
  );
}
