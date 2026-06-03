import { Mail, Handshake, Computer, MapPin } from 'lucide-react';

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
                    <div className="contactLink">
                        <Mail />
                        <a href="mailto:daniel1courtney3@gmail.com">Email</a>
                    </div>

                    <div className="contactLink">
                        <Handshake />
                        <a href="https://www.linkedin.com/in/daniel-courtney-7b9255331/">Linkedin</a>
                    </div>

                    <div className="contactLink">
                        <Computer />
                        <a href="https://github.com/dan-1379">Github</a>
                    </div>

                    <div className="contactLink">
                        <MapPin />
                        <p>Kerry, Ireland</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact