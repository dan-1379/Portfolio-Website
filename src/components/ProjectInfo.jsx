import { TramFront, HandCoins, Hand, PiggyBank, ListChecks, Skull, Library, LibraryBig, MapPin } from 'lucide-react';

// Interail Journey
import interrailJourney from "../assets/MyInterrailJourney/interrailJourney.jpeg";

import london from "../assets/MyInterrailJourney/london.jpeg";
import boroughMarket from "../assets/MyInterrailJourney/boroughMarket.jpeg";
import buckinghamPalace from "../assets/MyInterrailJourney/buckinghamPalace.jpg";

import amsterdam from "../assets/MyInterrailJourney/amsterdam.jpeg";
import vanGogh from "../assets/MyInterrailJourney/vanGogh.jpeg";
import pancakes from "../assets/MyInterrailJourney/pancakes.jpeg";

import berlin from "../assets/MyInterrailJourney/berlin.jpeg";
import berlinHostel from "../assets/MyInterrailJourney/berlinHostel.jpeg";
import berlinChurch from "../assets/MyInterrailJourney/berlinChurch.jpeg";

import prague from "../assets/MyInterrailJourney/prague.jpeg";
import pragueBridge from "../assets/MyInterrailJourney/pragueBridge.jpg";
import pragueMuseum from "../assets/MyInterrailJourney/pragueMuseum.jpeg";

import munich from "../assets/MyInterrailJourney/munich.jpeg";
import munichGarden from "../assets/MyInterrailJourney/munichGarden.jpeg";
import munichPalace from "../assets/MyInterrailJourney/munichPalace.jpeg";

import paris from "../assets/MyInterrailJourney/paris.jpeg";
import parisSkyline from "../assets/MyInterrailJourney/parisSkyline.jpeg";
import parisImages from "../assets/MyInterrailJourney/parisImages.jpeg";

// Crann Centre Fundraising
import crannVisit from "../assets/CrannCentreFundraising/CrannVisit.jpeg";
import presentationRoom from "../assets/CrannCentreFundraising/PresentationRoom.jpeg";
import image1 from "../assets/CrannCentreFundraising/Image.jpeg";
import image2 from "../assets/CrannCentreFundraising/Image2.jpeg";

// Budget Tracker
import BudgetManager from "../assets/BudgetManager/BudgetManager.png";
import IncomeEntry from "../assets/BudgetManager/IncomeEntry.png";
import TransactionTable from "../assets/BudgetManager/TransactionTable.png";
import AnalyticsOverview from "../assets/BudgetManager/AnalyticsOverview.png";
import ThankYou from "../assets/BudgetManager/ThankYou.png";

// Todo List Tracker
import TodoTracker from "../assets/TodoTracker/TodoTracker.png";
import TodoItems from "../assets/Todotracker/TodoItems.png";
import MobileView from "../assets/Todotracker/MobileView.png";

// Skulduggery Pleasant Project
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

export const ProjectInfo = [
        {
            icon: <LibraryBig className="projectIcon" />,
            name:"Library System (PHP)", 
            description:"LibrarySYS is a web-based, intuitive library management system designed to support the daily operation of a library.", 
            tech:["PHP", "MariaDB", "FPDF"],
            github: "https://github.com/dan-1379/LibrarySYS-PHP",
            images: [
                {image: SignIn, description: "Sign in"}, 
                {image: Dashboard, description: "Dashboard"}, 
                {image: Members, description: "Members page"}, 
                {image: LoanConfirmation, description: "Loan confirmation"}, 
                {image: LoanReceipt, description: "Loan receipt"}
            ],
            overview: "This is a project I designed and implemented using HTML, CSS, JS, and PHP that simulates a library management system web application.  The application provides functionality to assist library staff such as CRUD functionality, and Transaction Processing.",
            dateFrom: "Mar 2026",
            dateTo: "May 2026",
            progress: "complete"
        },
        {
            icon: <Library className="projectIcon" />,
            name:"Library System (C#)",
            description:"Windows Forms library system using with an Oracle backend. Includes IronPDF integration for reports, and chart-based analytics.",
            tech:["C#", "OracleDB"],
            github: "https://github.com/dan-1379/LibrarySYS",
            images: [
                {image: LibrarySYS}
            ],
            overview: "This is a project I designed and implemented using C# that simulates a library system. The software provides functionality to assist library staff such as CRUD functionality, Transaction Processing, and Data Analytics. The main goal of this project was to design the architecture of the system, using elements such as use case diagrams and narratives, DFD diagrams, UML diagrams, and database schemas.",
            dateFrom: "Sep 2025",
            dateTo: "April 2026",
            progress: "complete"
        },
        {
            icon: <Skull className="projectIcon" />,
            name:"Skulduggery Pleasant Project",
            description:"Wiki website built using ReactJS and TailwindCSS based on the popular book series Skulduggery Pleasant written by Irish author Derek Landy.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Skulduggery-Pleasant-Project",
            images: [
                {image: Homepage, description: "Homepage"}, 
                {image: Books, description: "Books page"}, 
                {image: Characters, description: "Characters page"}
            ],
            overview: "This is a personal project I designed and implemented using React JS and Tailwind CSS to create wiki website based on the popular book series Skulduggery Pleasant written by Irish author Derek Landy. The website displays the book and character information, allowing users to read the synopsis of each book as well as reading character information such as powers and age. The character page also contains filter functionality, allowing users to display all characters, heroes, and villains.",
            dateFrom: "Jan 2026",
            dateTo: "Jan 2026",
            progress: "complete"
        },
        {
            icon: <ListChecks className="projectIcon" />,
            name:"Todo List Tracker",
            description:"Todo list tracker built using ReactJS and TailwindCSS. Allows users to add todos, which can then be completed or deleted.",
            tech:["ReactJS", "TailwindCSS"],
            github: "https://github.com/dan-1379/Todo-App",
            demo: "https://dancourtneytodo.vercel.app/",
            images: [
                {image: TodoTracker, description: "Todo page"},
                {image: TodoItems, description: "Todo items"},
                {image: MobileView, description: "Mobile view"}
            ],
            overview:"Todo list tracker built using ReactJS and TailwindCSS. Allows users to add todos, which can then be completed or deleted.",
            dateFrom: "Jan 2026",
            dateTo: "Jan 2026",
            progress: "complete"
        },
        {
            icon: <PiggyBank className="projectIcon" />,
            name:"Budget Tracker",
            description:"Budget tracking web application allowing convenient tracking of income and expenditure.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Client-Side-Scripting",
            demo: "https://client-side-scripting.vercel.app",
            images: [
                {image: BudgetManager, description: "Welcome page"},
                {image: IncomeEntry, description: "Income entry field"},
                {image: TransactionTable, description: "Transaction table"},
                {image: AnalyticsOverview, description: "Analytics overview"},
                {image: ThankYou, description: "Thank you page"},
            ],
            overview: "This is a project I designed and coded using HTML, CSS and JavaScript to build a budget tracker as part of my 2nd year semester 1 client side scripting module. The tracker allows users to enter an income/expense, which is then added to a table for convenient record tracking. A data analytics page was also created to present the users income and expenses in a visual format by way of a pie chart.",
            dateFrom: "Nov 2025",
            dateTo: "Dec 2025",
            progress: "complete"
        },
        {
            icon: <HandCoins className="projectIcon" />,
            name:"Crann Centre Fundraising",
            description:"This project is a fictitious website aiming to secure funding for The Crann Centre, a Cork based charity who provide support to people with neuro-physical disabilities.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Web-Development-Semester-2",
            demo: "https://web-development-semester-2.vercel.app/",
            images: [
                {image: crannVisit, description: "Visit to crann"}, 
                {image: presentationRoom, description: "Presentation room"}, 
                {image: image1, description: "Innovation challenge"}, 
                {image: image2, description: "Team photo"}
            ],
            overview: "This is a project I designed and coded using HTML, CSS and JavaScript to build a fictitious fundraiser website for The Crann Centre  as part of my 1st year semester 2 Web Development module. I decided on this idea as I had previously worked with Crann in an innovation challenge and loved the work they were doing.",
            dateFrom: "Apr 2025",
            dateTo: "May 2025",
            progress: "complete"
        },
        {
            icon: <TramFront className="projectIcon" />,
            name:"My Interrail Journey",
            description:"Interrail website that documents a personal interrailing trip across Europe, featuring travel photography from various cities, alongside journey details and travel advice.",
            tech:["HTML", "CSS", "JS"],
            github:"https://github.com/dan-1379/Web-Development-Semester-1",
            demo: "https://web-development-semester-1.vercel.app/",
            images: [
                {image: interrailJourney, description: "Eurostar"}, 
                {image: london, description:  "London"}, 
                {image: boroughMarket, description:  "Borough Market"}, 
                {image: buckinghamPalace, description:  "Buckingham Palace"}, 
                {image: amsterdam, description: "Amsterdam"}, 
                {image: vanGogh, description: "Van Gogh Museum"}, 
                {image: pancakes, description: "Pancakes"}, 
                {image: berlin, description: "Berlin"},
                {image: berlinHostel, description: "Berlin Circus Hostel"},
                {image: berlinChurch, description: "Berlin Cathedral"},
                {image: prague, description: "Prague"},
                {image: pragueBridge, description: "Charles Bridge"},
                {image: pragueMuseum, description: "Prague Museum"},
                {image: munich, description: "Munich"}, 
                {image: munichPalace, description: "Nymphenburg Palace"}, 
                {image: munichGarden, description: "Court Garden"}, 
                {image: paris, description: "Paris"},
                {image: parisSkyline, description: "Galeries Lafayette"},
                {image: parisImages, description: "Galeries Lafayette"},
            ],
            overview:"Interrail website that documents a personal interrailing trip across Europe, featuring travel photography from various cities, alongside journey details and travel advice.",
            dateFrom: "Nov 2024",
            dateTo: "Dec 2024",
            progress: "complete"
        },
        
];