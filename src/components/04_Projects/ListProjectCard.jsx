import { ChevronRight, ExternalLink, TramFront, HandCoins, PiggyBank, ListChecks, Skull, Database, LibraryBig } from 'lucide-react';
import propTypes from "prop-types";

const projectIcon = {
    libraryBig: LibraryBig,
    database: Database,
    skull: Skull,
    listChecks: ListChecks, 
    piggyBank: PiggyBank,
    handCoins: HandCoins,
    tramFront: TramFront,
}

/**
 * Displays a project with details in card format
 * 
 * @param {Object} props 
 * @param {React.ReactNode} props.icon - Icon element displayed
 * @param {string} props.progress - Project progress (In Progress / Complete)
 * @param {string} props.name - Project name
 * @param {string} props.description - Project description
 * @param {string[]} props.tech - Technology names used
 * @param {string} props.github - GitHub repository URL
 * @param {string} props.demo - Live demo URl
 * @param {Function} props.openLearnMore - Callback to open the learn more card
 * @returns Project Card
 */
const ListProjectCard = (props) => {
    const ProjectIcon = projectIcon[props.icon];

    return (
        <div className="listProjectCard">
            <div className="listProjectCardInfo">
                <div className="listProjectCardIcon">
                    <ProjectIcon className="listProjectIcon" />
                </div>

                <div className="listProjectCardContent">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>

                    <div className="techStack">
                        {props.tech.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>

                {/* <div className="externalLinks">
                    <a href={props.github} target="_blank" rel="noopener noreferrer" className="githubLink">Github <ExternalLink className="externalLinkIcon" /></a>
                    {props.demo && <a href={props.demo} target="_blank" rel="noopener noreferrer" className="githubLink">Demo <ExternalLink className="externalLinkIcon"/></a> }
                </div> */}
            </div>

            <div className="viewMore">
                <button onClick={() => props.openLearnMore(props)}>Learn More <ChevronRight className="learnMoreArrow" /></button>
            </div>
        </div>
    )
}

ListProjectCard.propTypes = {
    icon: propTypes.node.isRequired,
    progress: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    tech: propTypes.arrayOf(propTypes.string).isRequired,
    github: propTypes.string.isRequired,
    demo: propTypes.string,
    openLearnMore: propTypes.func.isRequired
}

export default ListProjectCard