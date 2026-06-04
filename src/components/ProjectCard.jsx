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

           <div className="externalLinks">
            <a href={props.github} target="_blank" className="githubLink">Github <i>→</i></a>
            {props.demo && <a href={props.demo} target="_blank" className="githubLink">Demo <i>→</i></a> }
           </div>
        </div>
    )
}

export default ProjectCard