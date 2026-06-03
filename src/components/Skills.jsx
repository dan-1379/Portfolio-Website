import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <h3>Languages</h3>
            <div className="languages">
                <SkillCard icon = "devicon-html5-plain" name = "HTML5" color = "#f16529"/>
                <SkillCard icon = "devicon-css3-plain" name = "CSS3" color = "#32A9DC"/>
                <SkillCard icon = "devicon-javascript-plain" name = "JS" color = "#F0DB4F"/>

                <SkillCard icon = "devicon-python-plain" name = "Python" color = "#3873A3"/>
                <SkillCard icon = "devicon-java-plain" name = "Java" color = "#e92d2e"/>
                <SkillCard icon = "devicon-php-plain" name = "PHP" color = "#545894"/>
                
                <SkillCard icon = "devicon-csharp-plain" name = "C#" color = "#68217a"/>
            </div>
          
            <h3>Frameworks</h3>
            <div className="frameworks">
                <SkillCard icon = "devicon-react-original" name = "React" color = "#60dafb"/>
                <SkillCard icon = "devicon-tailwindcss-original" name = "Tailwind" color = "#39bdf8"/>
            </div>

            <h3>Tools</h3>
            <div className="tools">
                <SkillCard icon = "devicon-figma-plain" name = "Figma" color = "#ff7262"/>
                <SkillCard icon = "devicon-github-original" name = "Github" color = "#fff"/>
                <SkillCard icon = "devicon-git-plain" name = "Git" color = "#f35028"/>

                <SkillCard icon = "devicon-intellij-plain" name = "IntelliJ" color = "#0a7cfa"/>
                <SkillCard icon = "devicon-jupyter-plain" name = "Jupyter" color = "#f27726"/>
                <SkillCard icon = "devicon-mariadb-plain" name = "MariaDB" color = "#003545"/>

                <SkillCard icon = "devicon-sqldeveloper-plain" name = "SQLDeveloper" color = "#d1d1d1"/>
                <SkillCard icon = "devicon-vscode-plain" name = "VSCode" color = "#2babf3"/>
                <SkillCard icon = "devicon-vscodium-plain" name = "VSCodium" color = "#296cbf"/>
            </div>
        </section>
    )
}

export default Skills