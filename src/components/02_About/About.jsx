import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import CertificationCard from "./CertificationCard"
import ResponsiveHeadshot from "../01_Hero/ResponsiveHeadshot"

import { Award, FileBadge, Users, Sparkles } from 'lucide-react';
import { education, experience, certification } from "./AboutInfo";

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>

             <div className="about-headshot">
                <ResponsiveHeadshot />
            </div>

            <p>
                I am a third-year <span>BSc Computing with Software Development</span> student at Munster Technological University. 
                Through my coursework, I have gained experience writing and testing code while working on structured programming assignments, and approaching technical problems in a methodical manner. I have also supported others in learning programming concepts, which has involved explaining ideas clearly and working through problems.
                
                <br /> <br />

                Alongside my studies, I have experience in a customer service environment where I worked within established processes, handled responsibilities independently, and contributed to team outcomes. 
                My interests lie in the <span>backend architecture</span> of applications. I enjoy designing clean and 
                maintainable systems, whether that is utilising certain design patterns or creating a database
                schema that scales.
                I am particularly interested in gaining practical industry experience and understanding how software is designed, built, and maintained in real-world teams.

                <br /> <br />

                I am seeking software development <span>internship opportunities in the Irish tech and fintech sector</span>.
            </p>

            <h3>Education</h3>
            <div className="education">
                {education.map((item, index) => (
                    <EducationCard key={index} {...item}/>
                ))}
            </div>

            <h3>Experience</h3>
            <div className="experience">
                {experience.map((item, index) => (
                    <ExperienceCard key={index} {...item}/>
                ))}
            </div>

            <h3>Certifications</h3>
            <div className="certifications">
                {certification.slice().reverse().map((item, index) => (
                    <CertificationCard key={index} {...item}/>
                ))}
            </div>
        </section>
    )
}

export default About