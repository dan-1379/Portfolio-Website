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

    const openLearnMore = (project) => setLearnMore(project);
    const closeLearnMore = () => setLearnMore(null);

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projectCards">
                {ProjectInfo.map((project, index) => (
                    <ProjectCard key = {index} {...project} openLearnMore = {openLearnMore} />
                ))}
            </div>

            {learnMore && <ProjectModal project={learnMore} onClose={closeLearnMore} />}
        </section>
    )
}

export default Projects