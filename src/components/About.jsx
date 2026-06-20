import EducationCard from "./EducationCard"
import ExperienceCard from "./ExperienceCard"
import headshot from '../assets/headshot.JPG'

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>

             <div className="about-headshot">
                <img src={headshot} alt="headshot" />
            </div>

            <p>
                I am a second-year <span>Computing with Software Development</span> student at Munster Technological
                University. I have acquired certified experience and skills in programming languages and 
                debugging through projects and deliverables.

                <br /> <br />

                My interests lie in the <span>backend architecture</span> of applications. I enjoy designing clean and 
                maintainable systems, whether that is utilising certain design patterns or creating a database
                schema that scales.

                <br /> <br />

                I seek opportunities where I can work independently or as part of a professional team, against 
                existing processes or assist in creating new ones. I am seeking software development <span>internship 
                opportunities in the Irish tech and fintech sector</span>.
            </p>

            <h3>Education</h3>
            <div className="education">
                <EducationCard name= "Munster Technological University" qualification = "BSc Computing with Software Development" fromDate = "2024" toDate = "2028" additional = "First Class Honours Track" />
                <EducationCard name= "Killorglin Community College" qualification = "Leaving Certificate" fromDate = "2016" toDate = "2022" additional = "7 subjects at honours level" />
            </div>

            <h3>Experience</h3>
            <div className="experience">
                <ExperienceCard role = "Summer Intern" company = "Fexco" fromDate = "May 2025" toDate = "Sep 2025" duration = "4 months"/>
                <ExperienceCard role = "Customer Service Representitive" company = "Fexco" fromDate = "Jul 2022" toDate = "Sep 2024" duration = "2 years 2 months"/>
            </div>
        </section>
    )
}

export default About