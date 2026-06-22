import propTypes from "prop-types"
import { GraduationCap } from "lucide-react"

/**
 * Displays an education entry in card format.
 * 
 * @param {Object} props 
 * @param {string} props.name - Name of educational institution
 * @param {string} props.qualification - Qualification name
 * @param {string} props.fromDate - Start date
 * @param {string} props.toDate - End date
 * @param {string} props.additional - Extra information e.g. grade
 * @returns Education Card
 */
const EducationCard = (props) => {
    return (
        <div className="educationCard">
            <div className="educationCardIcon"><GraduationCap aria-hidden = "true"/></div>
            <h4>{props.name}</h4>
            <p>{props.qualification} · {props.fromDate} - {props.toDate}</p>
            <span>{props.additional}</span>
        </div>
    )
}

EducationCard.propTypes = {
    name: propTypes.string.isRequired,
    qualification: propTypes.string.isRequired,
    fromDate: propTypes.string.isRequired,
    toDate: propTypes.string.isRequired,
    additional: propTypes.string.isRequired
}

export default EducationCard