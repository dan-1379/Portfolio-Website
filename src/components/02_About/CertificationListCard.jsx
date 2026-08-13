import { SquareArrowOutUpRight, Award, FileBadge, Users, Sparkles } from 'lucide-react';

const iconMap = {
    award: Award,
    fileBadge: FileBadge,
    users: Users,
    sparkles: Sparkles
}

const CertificationListCard = (props) => {
    const IconComponent = iconMap[props.icon];

    return (
        <div className='certificationListCard'>
            <div className="certificationListCardIcon">
                <IconComponent aria-hidden = "true" />
            </div>

            <div className="certificationListCardContent">
                <div className="cardContentInfo">
                    <h4>{props.certification}</h4>
                    <p>{props.organisation}</p>
                </div>

                <div className="cardContentLink">
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
            </div>
        </div>
    )
}

export default CertificationListCard;

{/* <div className="educationCard">
            <div className="educationCardUpperContent">
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
        </div> */}