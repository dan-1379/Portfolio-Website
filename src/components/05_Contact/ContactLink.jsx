import propTypes from "prop-types";

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
    const Icon = props.icon;

    return (
        <div className="contactLink">
            <Icon className='contactIcon' aria-hidden = "true"/>

            <a 
                href={props.href} 
                target="_blank"
                rel={props.external ? "noopener noreferrer" : undefined}
                download={props.download}
            >
                {props.name}
            </a>
        </div>
    )
}

ContactLink.propTypes = {
    icon: propTypes.node.isRequired,
    href: propTypes.string.isRequired,
    external: propTypes.bool,
    download: propTypes.string,
    name: propTypes.string.isRequired
}

export default ContactLink