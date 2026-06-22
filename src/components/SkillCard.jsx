import propTypes from "prop-types"

/**
 * Displays a skill in card format
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon element displayed
 * @param {string} props.name - Skill name
 * @returns 
 */
const SkillCard = (props) => {
    return (
        <div className="skillCard">
            <i className={props.icon} style={{color: props.color}}></i>
            <span>{props.name}</span>
        </div>
    )
}

SkillCard.propTypes = {
    icon: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired
}

export default SkillCard
