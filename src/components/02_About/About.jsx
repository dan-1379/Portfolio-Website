import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import CertificationCard from "./CertificationCard"
import ResponsiveHeadshot from "../01_Hero/ResponsiveHeadshot"

import { Award, FileBadge, Users, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>

             <div className="about-headshot">
                <ResponsiveHeadshot />
            </div>

            <p>
                I am a second-year <span>BSc Computing with Software Development</span> student at Munster Technological University. 
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
                <EducationCard name= "Munster Technological University" qualification = "BSc Computing with Software Development" fromDate = "2024" toDate = "2028" />
                <EducationCard name= "Killorglin Community College" qualification = "Leaving Certificate" fromDate = "2016" toDate = "2022" />
            </div>

            <h3>Experience</h3>
            <div className="experience">
                <ExperienceCard role = "Summer Intern" company = "Fexco" fromDate = "May 2025" toDate = "Sep 2025" />
                <ExperienceCard role = "Customer Service Representitive" company = "Fexco" fromDate = "Jul 2022" toDate = "Sep 2024" />
            </div>

            <h3>Certifications</h3>
            <div className="certifications">
                <CertificationCard certification = "EDGE Gold Award" organisation = "Munster Technological University" issueDate = "Apr 2026" credential = "https://my.potential.ly/folio/badge/bC5aH5IhLUAPsNus" icon = {<Award aria-hidden = "true" />}/>
                <CertificationCard certification = "Peer Mentoring" organisation = "Munster Technological University" issueDate = "Apr 2026" credential = "https://www.linkedin.com/in/daniel-courtney-7b9255331/details/certifications/" icon = {<Users aria-hidden = "true" />}/>
                <CertificationCard certification = "MTU Joint Mentorship Programme" organisation = "Munster Technological University" issueDate = "Apr 2026" credential = "https://www.linkedin.com/in/daniel-courtney-7b9255331/details/certifications/" icon = {<FileBadge aria-hidden = "true" />}/>

                <CertificationCard certification = "Introduction to generative AI" organisation = "Microsoft" issueDate = "Apr 2026" credential = "https://learn.microsoft.com/en-gb/users/danielcourtney-2122/achievements/82uh5cpw?ref=https%3A%2F%2Fwww.linkedin.com%2F" icon = {<Sparkles aria-hidden = "true" />}/>
                <CertificationCard certification = "EDGE Silver Award" organisation = "Munster Technological University" issueDate = "Sep 2025" credential = "https://my.potential.ly/folio/badge/ffUsqr5rAr4y4eth" icon = {<Award aria-hidden = "true" />}/>
                <CertificationCard certification = "EDGE Bronze Award" organisation = "Munster Technological University" issueDate = "Feb 2025" credential = "https://my.potential.ly/folio/badge/ihBHwVy4ph3K4Cwj" icon = {<Award aria-hidden = "true" />}/>
            </div>
        </section>
    )
}

export default About