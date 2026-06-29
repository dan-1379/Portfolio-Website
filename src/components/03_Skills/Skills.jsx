import SkillCard from "./SkillCard"
import { ai, frameworks, languages, tools } from "./SkillsInfo";

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <h3>Languages</h3>
            <div className="languages">
                {languages.map((item, index) => (
                    <SkillCard key={index} {...item}/>
                ))}
            </div>
          
            <h3>Frameworks</h3>
            <div className="frameworks">
                {frameworks.map((item, index) => (
                    <SkillCard key={index} {...item}/>
                ))}
            </div>

            <h3>Tools</h3>
            <div className="tools">
                {tools.map((item, index) => (
                    <SkillCard key={index} {...item}/>
                ))}
            </div>

            <h3>Artificial Intelligence</h3>
            <div className="ai">
                {ai.map((item, index) => (
                    <SkillCard key={index} {...item}/>
                ))}
            </div>
        </section>
    )
}


export default Skills