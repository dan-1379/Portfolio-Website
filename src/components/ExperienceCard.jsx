const ExperienceCard = (props) => {
    const fromMonth = new Date(props.fromDate).getMonth();
    const fromYear = new Date(props.fromDate).getFullYear();

    const toMonth = new Date(props.toDate).getMonth();
    const toYear = new Date(props.toDate).getFullYear();

    let totalMonths = (toYear - fromYear) * 12 + (toMonth - fromMonth);
    const yearCount = Math.floor(totalMonths / 12);
    const monthCount = totalMonths % 12;

    const years = yearCount > 1 ? 's' : '';
    const months = monthCount > 1 ? 's' : '';

    let duration = '';
    if (yearCount > 0) duration += `${yearCount} years `;
    if (monthCount > 0) duration += `${monthCount} months`;

    return (
        <div className="educationCard">
            <h4>{props.role}</h4>
            <p>
                {props.company} · {props.fromDate} - {props.toDate} ({duration})
            </p>
        </div>
    )
}

export default ExperienceCard