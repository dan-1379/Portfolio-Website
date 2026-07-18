import SkillCard from "./SkillCard"
import skills from "./SkillsInfo.json";

const Skills = () => {
    return (
        <section id="skills">
            <div className="carousel">
                <div className="track">
                    {skills.languages.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}

                    {skills.frameworks.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}

                    {skills.tools.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}

                    {skills.ai.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}


                    {skills.languages.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}

                    {skills.frameworks.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}

                    {skills.tools.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}

                    {skills.ai.map((item, index) => (
                        <SkillCard key={index} {...item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Skills