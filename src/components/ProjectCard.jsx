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
            <a href={props.github} target="_blank" className="githubLink">Github <i>→</i></a>
            {props.demo && <a href={props.demo} target="_blank" className="githubLink">Demo <i>→</i></a> }
           </div>

           <div className="viewMore">
            <button onClick={() => props.openLearnMore(props)}>Learn More</button>
           </div>
        </div>
    )
}

export default ProjectCard