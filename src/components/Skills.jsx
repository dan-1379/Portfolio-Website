import SkillCard from "./SkillCard"

import html from "../assets/svg_icons/html-5.svg";
import css from "../assets/svg_icons/css.svg";
import js from "../assets/svg_icons/javascript.svg";

import python from "../assets/svg_icons/python.svg";
import java from "../assets/svg_icons/java.svg";
import php from "../assets/svg_icons/php.svg";

import csharp from "../assets/svg_icons/c-sharp.svg";

import react from "../assets/svg_icons/react.svg";
import tailwind from "../assets/svg_icons/tailwindcss-icon.svg";

import figma from "../assets/svg_icons/figma.svg";
import github from "../assets/svg_icons/github-icon.svg";
import git from "../assets/svg_icons/git-icon.svg";

import intellij from "../assets/svg_icons/intellij-idea.svg";
import jupyter from "../assets/svg_icons/jupyter.svg";
import mariadb from "../assets/svg_icons/mariadb-icon.svg";

import vscode from "../assets/svg_icons/visual-studio-code.svg";
import vs from "../assets/svg_icons/visual-studio.svg";

import claude from "../assets/svg_icons/claude-icon.svg";
import openAi from "../assets/svg_icons/openai-icon.svg";

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <h3>Languages</h3>
            <div className="languages">
                <SkillCard icon = {html} name = "HTML5" />
                <SkillCard icon = {css} name = "CSS3" />
                <SkillCard icon = {js} name = "JS" />

                <SkillCard icon = {python} name = "Python" />
                <SkillCard icon = {java} name = "Java" />
                <SkillCard icon = {php} name = "PHP" />
                
                <SkillCard icon = {csharp} name = "C#" />
            </div>
          
            <h3>Frameworks</h3>
            <div className="frameworks">
                <SkillCard icon = {react} name = "React" />
                <SkillCard icon = {tailwind} name = "Tailwind" />
            </div>

            <h3>Tools</h3>
            <div className="tools">
                <SkillCard icon = {figma} name = "Figma"/>
                <SkillCard icon = {github} name = "Github" />
                <SkillCard icon = {git} name = "Git" />

                <SkillCard icon = {intellij} name = "IntelliJ" />
                <SkillCard icon = {jupyter} name = "Jupyter" />
                <SkillCard icon = {mariadb} name = "MariaDB" />

                <SkillCard icon = {vscode} name = "VSCode" />
                <SkillCard icon = {vs} name = "Visual Studio" />
            </div>

            <h3>Artificial Intelligence</h3>
            <div className="ai">
                <SkillCard icon = {claude} name = "Claude" />
                <SkillCard icon = {openAi} name = "Open AI" />
            </div>
        </section>
    )
}


export default Skills