const ExperienceCard = (props) => {

    return (
        <div className="educationCard">
            <h4>{props.role}</h4>
            <p>{props.company} · {props.fromDate} - {props.toDate}</p>
        </div>
    )
}

export default ExperienceCard