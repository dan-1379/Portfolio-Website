const EducationCard = (props) => {
    return (
        <div className="educationCard">
            <h4>{props.name}</h4>
            <p>{props.qualification} · {props.fromDate} - {props.toDate}</p>
            <span>{props.additional}</span>
        </div>
    )
}

export default EducationCard