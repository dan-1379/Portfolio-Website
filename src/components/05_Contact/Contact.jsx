import { ContactInfo } from './ContactInfo';
import ContactLink from './ContactLink';
import location from "../../assets/Location/location.png";


/**
 * 
 * @returns Contact component
 */
const Contact = () => {
    return (
        <section id = "contact">
            <div className="contactOverview">
                <h2>Get in Touch</h2>
                <p>
                    I'm actively looking for placement opportunities in software development and fintech, 
                    particularly within Ireland. If you're hiring or just want to connect, I'd love to hear from you.
                </p>

                <div className="contactLinks">
                    {ContactInfo.map((info, index) => (
                        <ContactLink key={index} {...info} />
                    ))}
                </div>
            </div>

            <div className="contactImage">
                <img src={location} alt="Location" />
            </div>
        </section>
    )
}

export default Contact