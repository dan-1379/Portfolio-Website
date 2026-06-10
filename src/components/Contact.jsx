import { Mail, Handshake, Computer, MapPin, FileUser, ArrowBigUp } from 'lucide-react';

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
                        <Mail className='contactIcon'/>
                        <a href="mailto:daniel1courtney3@gmail.com">Email</a>
                    </div>

                    <div className="contactLink">
                        <Handshake className='contactIcon'/>
                        <a href="https://www.linkedin.com/in/daniel-courtney-7b9255331/">Linkedin</a>
                    </div>

                    <div className="contactLink">
                        <Computer className='contactIcon'/>
                        <a href="https://github.com/dan-1379">Github</a>
                    </div>

                    <div className="contactLink">
                        <FileUser className='contactIcon'/>
                        <a href="/DanielCourtneyCV1.pdf" download="DanielCourtneyCV">Curriculum vitae</a>
                    </div>

                    <div className="contactLink">
                        <MapPin className='contactIcon'/>
                        <p>Kerry, Ireland</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact