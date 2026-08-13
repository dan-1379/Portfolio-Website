import { useState } from "react";
import GridProjectCard from "./GridProjectCard";
import ProjectInfo from "./ProjectInfo.json";
import ProjectModal from "./ProjectModal";
import { TextAlignJustify, LayoutGrid } from "lucide-react";
import ListProjectCard from "./ListProjectCard";

/**
 * 
 * @returns Projects component
 */
const Projects = () => {
    const[learnMore, setLearnMore] = useState(null);
    const uniqueTechStack = [...new Set(ProjectInfo.map(info => info.tech[0]))];
    const [techSelected, setTechSelected] = useState("");
    const [certificationLayout, setCertificationLayout] = useState("grid");

    const openLearnMore = (project) => setLearnMore(project);
    const closeLearnMore = () => setLearnMore(null);

    const filteredTech = techSelected
        ? ProjectInfo.filter(item => item.tech[0] === techSelected)
        : ProjectInfo;

    const filterTech = (tech) => {
        setTechSelected(tech);
    }

    const handleLayoutChange = (layoutOption) => {
        setCertificationLayout(layoutOption);
    }

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="filterOptions">
                <div className="filterMenu">
                    <select name="certificationFilter" id="certificationFilter" onChange={(e) => filterTech(e.target.value)}>
                        <option value="">Filter All</option>

                        {uniqueTechStack.sort().map((org, index) => (
                            <option value={org} key={index}>{org}</option>
                        ))}
                    </select>
                </div>

                <div className="filterLayout">
                    <form action="">
                        <div className="filterLayoutOption">
                            <input type="radio" name="layoutOption" id="listLayout" checked={certificationLayout == "list"} onChange={() => handleLayoutChange("list")} />
                            <label htmlFor="listLayout"><TextAlignJustify size={15}/> List</label>
                        </div>

                        <div className="filterLayoutOption">
                            <input type="radio" name="layoutOption" id="gridLayout" checked={certificationLayout == "grid"} onChange={() => handleLayoutChange("grid")}/>
                            <label htmlFor="gridLayout"><LayoutGrid size={15}/> Grid</label>
                        </div>
                    </form>
                </div>
            </div>

            {/* <div className="projectFilterButtons">
                <button onClick={() => filterTech("")} className={techSelected === "" ? "activeFilter" : "inactiveFilter"}>All</button>

                {uniqueTechStack.sort().map((tech, index) => (
                    <button key={index} onClick={() => filterTech(tech)} className={techSelected === tech ? "activeFilter" : "inactiveFilter"}>{tech}</button>
                ))}
            </div> */}


            <div className={certificationLayout == "grid" ? "projectCards" : "projectCardsList"}>
                {certificationLayout === "grid" ? (
                    filteredTech.map((project, index) => (
                        <GridProjectCard key = {index} {...project} openLearnMore = {openLearnMore} />
                    ))
                ) : (
                    filteredTech.map((project, index) => (
                        <ListProjectCard key = {index} {...project} openLearnMore = {openLearnMore} />
                    ))
                )}
            </div>

            {learnMore && <ProjectModal project={learnMore} onClose={closeLearnMore} />}
        </section>
    )
}

export default Projects