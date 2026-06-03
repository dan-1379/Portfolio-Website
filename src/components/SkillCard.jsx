const SkillCard = (props) => {
    return (
        <div className="skillCard">
            <i class={props.icon} style={{color: props.color}}></i>
            <span>{props.name}</span>
        </div>
    )
}

export default SkillCard
