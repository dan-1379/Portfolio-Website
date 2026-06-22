import { Mail, Handshake, Computer, MapPin, FileUser } from 'lucide-react';

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
                        <Mail className='contactIcon' aria-hidden = "true"/>
                        <a href="mailto:daniel1courtney3@gmail.com">Email</a>
                    </div>

                    <div className="contactLink">
                        <Handshake className='contactIcon' aria-hidden = "true"/>
                        <a href="https://www.linkedin.com/in/daniel-courtney-7b9255331/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                    <div className="contactLink">
                        <Computer className='contactIcon' aria-hidden = "true"/>
                        <a href="https://github.com/dan-1379" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>

                    <div className="contactLink">
                        <FileUser className='contactIcon' aria-hidden = "true"/>
                        <a href="/DanielCourtneyCV1.pdf" download="DanielCourtneyCV">Curriculum Vitae</a>
                    </div>

                    <div className="contactLink">
                        <MapPin className='contactIcon' aria-hidden = "true"/>
                        <p>Kerry, Ireland</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact