import { useState } from "react";
import ProjectCard from "./ProjectCard";

// Interail Journey
import interrailJourney from "../assets/MyInterrailJourney/interrailJourney.jpeg";
import london from "../assets/MyInterrailJourney/london.jpeg";
import amsterdam from "../assets/MyInterrailJourney/amsterdam.jpeg";
import berlin from "../assets/MyInterrailJourney/berlin.jpeg";
import prague from "../assets/MyInterrailJourney/prague.jpeg";
import munich from "../assets/MyInterrailJourney/munich.jpeg";
import paris from "../assets/MyInterrailJourney/paris.jpeg";

// Crann Centre Fundraising
import crannVisit from "../assets/CrannCentreFundraising/CrannVisit.jpeg";
import presentationRoom from "../assets/CrannCentreFundraising/PresentationRoom.jpeg";
import image1 from "../assets/CrannCentreFundraising/Image.jpeg";
import image2 from "../assets/CrannCentreFundraising/Image2.jpeg";

// Budget Tracker
import BudgetManager from "../assets/BudgetManager/BudgetManager.png";

// Todo List Tracker
import TodoTracker from "../assets/TodoTracker/TodoTracker.png";

// Skuluggery Pleasant Project
import Homepage from "../assets/SkulduggeryPleasant/Homepage.png";
import Books from "../assets/SkulduggeryPleasant/Books.png";
import Characters from "../assets/SkulduggeryPleasant/Characters.png";

// Library System
import LibrarySYS from "../assets/LibrarySYS/LibrarySYS.jpg";

// Library System PHP
import SignIn from "../assets/LibrarySYS-PHP/SignIn.png";
import Dashboard from "../assets/LibrarySYS-PHP/Dashboard.png";
import Members from "../assets/LibrarySYS-PHP/Members.png";
import LoanConfirmation from "../assets/LibrarySYS-PHP/LoanConfirmation.png";
import LoanReceipt from "../assets/LibrarySYS-PHP/LoanReceipt.png";

const Projects = () => {
    const[learnMore, setLearnMore] = useState(null);
    const[currentImage, setCurrentImage] = useState(0);

    const openLearnMore = (project) => {
        setLearnMore(project);
        setCurrentImage(0);
    }

    const closeLearnMore = (project) => {
        setLearnMore(null);
        setCurrentImage(0);
    }

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % learnMore.images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + learnMore.images.length) % learnMore.images.length);

    const projects = [
        {
            name:"Library System (PHP)", 
            description:"LibrarySYS is a web-based, intuitive library management system designed to support the daily operation of a library.", 
            tech:["PHP", "MariaDB", "FPDF"],
            github: "https://github.com/dan-1379/LibrarySYS-PHP",
            images: [SignIn, Dashboard, Members, LoanConfirmation, LoanReceipt]
        },
        {
            name:"Library System (C#)",
            description:"Windows Forms library system using with an Oracle backend. Includes IronPDF integration for reports, and chart-based analytics.",
            tech:["C#", "OracleDB"],
            github: "https://github.com/dan-1379/LibrarySYS",
            images: [LibrarySYS]
        },
        {
            name:"Skulduggery Pleasant Project",
            description:"Wiki website built using ReactJS and TailwindCSS based on the popular book series Skulduggery Pleasant written by Irish author Derek Landy.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Skulduggery-Pleasant-Project",
            images: [Homepage, Books, Characters]
        },
        {
            name:"Todo List Tracker",
            description:"Todo list tracker built using ReactJS and TailwindCSS. Allows users to add todos, which can then be completed or deleted.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Todo-App",
            demo: "https://dancourtneytodo.vercel.app/",
            images: [TodoTracker]
        },
        {
            name:"Budget Tracker",
            description:"Budget tracking web application allowing convenient tracking of income and expenditure.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Client-Side-Scripting",
            demo: "https://client-side-scripting.vercel.app",
            images: [BudgetManager]
        },
        {
            name:"Crann Centre Fundraising",
            description:"This project is a fictitious website aiming to secure funding for The Crann Centre, a Cork based charity who provide support to people with neuro-physical disabilities.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Web-Development-Semester-2",
            demo: "https://web-development-semester-2.vercel.app/",
            images: [crannVisit, presentationRoom, image1, image2]
        },
        {
            name:"My Interrail Journey",
            description:"Interrail website that documents a personal interrailing trip across Europe, featuring travel photography from various cities, alongside journey details and travel advice.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Web-Development-Semester-1",
            demo: "https://web-development-semester-1.vercel.app/",
            images: [interrailJourney, london, amsterdam, berlin, prague, munich, paris]
        },
    ]

    return (
        <section id="projects">
            <h2>Projects</h2>

            {projects.map((project, index) => (
                <ProjectCard key = {index} {...project} openLearnMore = {setLearnMore} />
            ))}

            {learnMore && 
                <div>
                    <div className="overlay" onClick={() => setLearnMore(null)}></div>

                    <div className="content">
                        <div className="imageContainer">
                            <button onClick={closeLearnMore}>x</button>

                            <div className="carousel"> 
                                <img src={learnMore.images ? learnMore.images[currentImage] : learnMore.image} alt={learnMore.name} />
                            
                                <div className="carouselButtons">
                                    {learnMore.images && learnMore.images.length > 1 && (
                                        <button className="carouselButton" onClick={prevImage}>‹</button>
                                    )}
                                        
                                    {learnMore.images && learnMore.images.length > 1 && (
                                        <button className="carouselButton" onClick={nextImage}>›</button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="contentText">
                            <h3>{learnMore.name}</h3>
                            <p>{learnMore.description}</p>
                            <div className="techStack">
                                {learnMore.tech.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Projects