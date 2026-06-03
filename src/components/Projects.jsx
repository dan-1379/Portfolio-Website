import ProjectCard from "./ProjectCard"

const Projects = () => {
    const projects = [
        {
            name:"LibrarySYS-PHP", 
            description:"LibrarySYS is a web-based, intuitive library management system designed to support the daily operation of a library. The system is designed to streamline book management, member management, loan transaction and return management, and performing administration, while ensuring data integrity and strict adherence to the rules of the business.", 
            tech:["PHP", "MariaDB", "FPDF"],
            github: "https://github.com/dan-1379/LibrarySYS-PHP"
        },
        {
            name:"LibrarySYS",
            description:"Windows Forms library system using with an Oracle backend. Includes IronPDF integration for reports, and chart-based analytics.",
            tech:["C#", "SQLDeveloper"],
            github: "https://github.com/dan-1379/LibrarySYS"
        },
        {
            name:"Skulduggery Pleasant Project",
            description:"Wiki website built using ReactJS and TailwindCSS based on the popular book series Skulduggery Pleasant written by Irish author Derek Landy.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Skulduggery-Pleasant-Project"
        },
        {
            name:"Budget Manager Pro",
            description:"Budget tracking web application allowing convenient tracking of income and expenditure.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Client-Side-Scripting"
        }
    ]

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard key = {index} {...project}/>
            ))}
        </section>
    )
}

export default Projects