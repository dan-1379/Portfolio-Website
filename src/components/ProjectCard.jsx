import { ChevronRight } from "lucide-react"
import propTypes from "prop-types"

/**
 * Displays a project with details in card format
 * 
 * @param {Object} props 
 * @param {React.ReactNode} props.icon - Icon element displayed
 * @param {string} props.name - Project name
 * @param {string} props.description - Project description
 * @param {string[]} props.tech - Technology names used
 * @param {string} props.github - GitHub repository URL
 * @param {string} props.demo - Live demo URl
 * @param {Function} props.openLearnMore - Callback to open the learn more card
 * @returns Project Card
 */
const ProjectCard = (props) => {
    return (
        <div className="projectCard">
            <div className="projectCardIcon">{props.icon}</div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className="techStack">
                {props.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>

            <div className="externalLinks">
                <a href={props.github} target="_blank" rel="noopener noreferrer" className="githubLink">Github <i>→</i></a>
                {props.demo && <a href={props.demo} target="_blank" rel="noopener noreferrer" className="githubLink">Demo <i>→</i></a> }
            </div>

            <div className="viewMore">
                <button onClick={() => props.openLearnMore(props)}>Learn More <ChevronRight className="learnMoreArrow" /></button>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    icon: propTypes.node.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    tech: propTypes.arrayOf(propTypes.string).isRequired,
    github: propTypes.string.isRequired,
    demo: propTypes.string,
    openLearnMore: propTypes.func.isRequired
}

export default ProjectCard