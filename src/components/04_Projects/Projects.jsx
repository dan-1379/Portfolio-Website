import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "./ProjectInfo";
import ProjectModal from "./ProjectModal";

/**
 * 
 * @returns Projects component
 */
const Projects = () => {
    const[learnMore, setLearnMore] = useState(null);
    const uniqueTechStack = [...new Set(ProjectInfo.map(info => info.tech[0]))];
    const [techSelected, setTechSelected] = useState("");

    const openLearnMore = (project) => setLearnMore(project);
    const closeLearnMore = () => setLearnMore(null);

    const filteredTech = techSelected
        ? ProjectInfo.filter(item => item.tech[0] === techSelected)
        : ProjectInfo;

    const filterTech = (tech) => {
        setTechSelected(tech);
    }

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projectFilterButtons">
                <button onClick={() => filterTech("")} className={techSelected === "" ? "activeFilter" : "inactiveFilter"}>All</button>

                {uniqueTechStack.sort().map((tech, index) => (
                    <button key={index} onClick={() => filterTech(tech)} className={techSelected === tech ? "activeFilter" : "inactiveFilter"}>{tech}</button>
                ))}
            </div>


            <div className="projectCards">
                {filteredTech.map((project, index) => (
                    <ProjectCard key = {index} {...project} openLearnMore = {openLearnMore} />
                ))}
            </div>

            {learnMore && <ProjectModal project={learnMore} onClose={closeLearnMore} />}
        </section>
    )
}

export default Projects