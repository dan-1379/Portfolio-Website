import { SquareArrowOutUpRight, Award, FileBadge, Users, Sparkles } from 'lucide-react';

const iconMap = {
    award: Award,
    fileBadge: FileBadge,
    users: Users,
    sparkles: Sparkles
}

const CertificationCard = (props) => {
    const IconComponent = iconMap[props.icon];

    return (
        <div className="educationCard">
            <div className="educationCardUpperContent">
                <div className="educationCardIcon"><IconComponent aria-hidden = "true" /></div>
                <p>{props.issueDate}</p>
            </div>
            
            <h4>{props.certification}</h4>
            <p>
                {props.organisation}
            </p>
            {props.credential && 
                <a 
                    href={props.credential} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="credentialLink"
                >
                    Show credential <SquareArrowOutUpRight className='credentialIcon' aria-hidden = "true" />
                </a>
            }
        </div>
    )
}

export default CertificationCard