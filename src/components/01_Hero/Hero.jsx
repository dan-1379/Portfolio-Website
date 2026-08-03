import ResponsiveHeadshot from "./ResponsiveHeadshot"
import HeroTerminal from "./HeroTerminal"
import { useState } from "react"

const Hero = () => {
    const [isTerminalExpanded, setIsTerminalExpanded] = useState(false);
    const [isTerminalExit, setIsTerminalExit] = useState(false);

    const handleTerminalExpand = () => {
        setIsTerminalExpanded(!isTerminalExpanded);
    }

    const exitTerminalView = () => {
        setIsTerminalExpanded(false);
    }

    const closeTerminalView = () => {
        const terminal = document.getElementById("terminal");

        if (terminal.classList.contains("header-terminal")) {
            terminal.classList.remove("header-terminal");
            terminal.classList.add("header-terminal-closed");
        } else {
            terminal.classList.remove("header-terminal-closed");
            terminal.classList.add("header-terminal");
        }
    }

    const exitTerminal = () => {
        const terminal = document.getElementById("terminal");

        terminal.classList.remove("header-terminal");
        terminal.classList.add("header-terminal-exit");
    }



    return (
        <header>
            <div className="header-content">
                <h1>Software <br /> <span>Development</span> <br /> Student<span className="header-blinker">|</span></h1>

                <p>
                    Third-year Computing student at MTU Kerry, with experience in building 
                    applications with a focus on clean architecture. 
                    Keen interest in software architecture and fintech.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="heroButton-projects">View Projects</a>
                    <a href="#contact" className="heroButton-contact">Get in Touch</a>
                </div>
            </div>

            <div id="terminal" className="header-terminal">
                <HeroTerminal
                    onExpand={handleTerminalExpand}
                    onExit={exitTerminal}
                    onClose={closeTerminalView}
                />
            </div>

            {isTerminalExpanded && 
                <>
                    <div className="overlay" onClick={handleTerminalExpand}></div>

                    <div className="terminalExpanded" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                        <HeroTerminal
                            type="expanded"
                            onExpand={handleTerminalExpand}
                            onExit={exitTerminalView}
                        />
                    </div>
                </>
            }
        </header>
    )
}

export default Hero