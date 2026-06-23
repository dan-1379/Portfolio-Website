import { FileBadge, SquareArrowOutUpRight} from 'lucide-react';

const CertificationCard = (props) => {
    return (
        <div className="educationCard">
            <div className="educationCardIcon"><FileBadge aria-hidden = "true"/></div>
            <h4>{props.certification}</h4>
            <p>
                {props.organisation} · Issued {props.issueDate}
            </p>
            {props.credential && <a href={props.credential} target="_blank" rel="noopener noreferrer" className="credentialLink">Show credential <SquareArrowOutUpRight className='credentialIcon' aria-hidden = "true" /></a>}
        </div>
    )
}

export default CertificationCard