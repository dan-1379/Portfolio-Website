const ProjectCard = (props) => {
    return (
        <div className="projectCard">
           <h3>{props.name}</h3>
           <p>{props.description}</p>
           <div className="techStack">
            {props.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
            ))}
           </div>
           <a href={props.github} target="_blank" className="githubLink">Github →</a>
        </div>
    )
}

export default ProjectCard