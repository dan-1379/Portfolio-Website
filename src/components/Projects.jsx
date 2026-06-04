import ProjectCard from "./ProjectCard"

const Projects = () => {
    const projects = [
        {
            name:"Library System (PHP)", 
            description:"LibrarySYS is a web-based, intuitive library management system designed to support the daily operation of a library.", 
            tech:["PHP", "MariaDB", "FPDF"],
            github: "https://github.com/dan-1379/LibrarySYS-PHP",
        },
        {
            name:"Library System (C#)",
            description:"Windows Forms library system using with an Oracle backend. Includes IronPDF integration for reports, and chart-based analytics.",
            tech:["C#", "OracleDB"],
            github: "https://github.com/dan-1379/LibrarySYS"
        },
        {
            name:"Skulduggery Pleasant Project",
            description:"Wiki website built using ReactJS and TailwindCSS based on the popular book series Skulduggery Pleasant written by Irish author Derek Landy.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Skulduggery-Pleasant-Project"
        },
        {
            name:"Todo List Tracker",
            description:"Todo list tracker built using ReactJS and TailwindCSS. Allows users to add todos, which can then be completed or deleted.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Todo-App",
            demo: "https://dancourtneytodo.vercel.app/"
        },
        {
            name:"Budget Tracker",
            description:"Budget tracking web application allowing convenient tracking of income and expenditure.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Client-Side-Scripting",
            demo: "https://client-side-scripting.vercel.app"
        },
        {
            name:"Crann Centre Fundraising",
            description:"This project is a fictitious website aiming to secure funding for The Crann Centre, a Cork based charity who provide support to people with neuro-physical disabilities.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Web-Development-Semester-2",
            demo: "https://web-development-semester-2.vercel.app/"
        },
        {
            name:"My Interrail Journey",
            description:"Interrail website that documents a personal interrailing trip across Europe, featuring travel photography from various cities, alongside journey details and travel advice.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Web-Development-Semester-1",
            demo: "https://web-development-semester-1.vercel.app/"
        },
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