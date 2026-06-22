import headshot from '../assets/headshot.JPG'

const Hero = () => {
    return (
        <header>
            <div className="header-content">
                <h1>Software <br /> <span>Development</span> <br /> Student</h1>

                <p>Second-year Computing student at MTU Kerry, with experience in building 
                    applications with a focus on clean architecture. 
                    Keen interest in software architecture and fintech.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="heroButton-projects">View Projects</a>
                    <a href="#contact" className="heroButton-contact">Get in Touch</a>
                </div>
            </div>

            <div className="header-image">
                <img src={headshot} alt="Daniel Courtney headshot" />
            </div>
        </header>
    )
}

export default Hero