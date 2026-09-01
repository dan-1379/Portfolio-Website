import propTypes from "prop-types";
import { Mail, Handshake, Computer, FileUser, ArrowUpRight } from 'lucide-react';

const links = {
    mail: Mail,
    handshake: Handshake,
    computer: Computer,
    fileUser: FileUser
}

/**
 * Displays a contact link
 * @param {*} props
 * @param {React.ReactNode} props.icon - Icon element displayed
 * @param {string} props.href - Contact link
 * @param {boolean} props.external - Boolean to check if link should open externally
 * @param {string} props.download - Name of attached file when downloaded
 * @param {string} props.name - Name of the contact link
 * @returns Contact link component
 */
const ContactLink = (props) => {
    const Icon = links[props.icon];

    return (
        <a 
            href={props.href} 
            target={props.external ? "_blank" : undefined}
            rel={props.external ? "noopener noreferrer" : undefined}
            download={props.download}
            className="contactLink"
        >
            <div className="contactLinkInfo">
                <div className="contactLinkIcon">
                    <Icon className='contactIcon' aria-hidden = "true"/>
                </div>

                <div className="contactLinkText">
                    <span>{props.name}</span>
                    <p>{props.username}</p>
                </div>
            </div>

            <div className="contactLinkOutIcon">
                <ArrowUpRight size={15} />
            </div>
        </a>
    )
}

ContactLink.propTypes = {
    icon: propTypes.string.isRequired,
    href: propTypes.string.isRequired,
    external: propTypes.bool,
    download: propTypes.string,
    name: propTypes.string.isRequired
}

export default ContactLink