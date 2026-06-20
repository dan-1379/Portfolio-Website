import propTypes from "prop-types"
import { BriefcaseBusiness } from 'lucide-react';

/**
 * Displays a work experience entry in card format.
 * 
 * @param {Object} props 
 * @param {string} props.role - Job title
 * @param {string} props.company - Company name
 * @param {string} props.fromDate - Start date
 * @param {string} props.toDate - End date
 * @param {string} props.duration - Length of time in role
 * @returns Experience Card
 */
const ExperienceCard = (props) => {

    return (
        <div className="educationCard">
            <div className="educationCardIcon">{<BriefcaseBusiness />}</div>
            <h4>{props.role}</h4>
            <p>
                {props.company} · {props.fromDate} - {props.toDate} ({props.duration})
            </p>
        </div>
    )
}

ExperienceCard.propTypes = {
    role: propTypes.string.isRequired,
    company: propTypes.string.isRequired,
    fromDate: propTypes.string.isRequired,
    toDate: propTypes.string.isRequired,
    duration: propTypes.string.isRequired
}

export default ExperienceCard