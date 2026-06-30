import { Mail, Handshake, Computer, FileUser } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import ContactLink from './ContactLink';

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
                    I'm actively looking for internship and placement opportunities in software development and fintech, 
                    particularly within Ireland. If you're hiring or just want to connect, I'd love to hear from you.
                </p>

                <div className="contactLinks">
                    {ContactInfo.map((info, index) => (
                        <ContactLink key={index} {...info} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact