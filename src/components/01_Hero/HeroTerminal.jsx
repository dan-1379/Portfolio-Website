import { X, Minus, Maximize2 } from 'lucide-react';
import info from "./TerminalInfo.json";
import TerminalLine from './TerminalLine';
import { useEffect, useState } from 'react';

const HeroTerminal = ({ type = "default", onExit, onClose, onExpand }) => {
    const [randomFortune, setRandomFortune] = useState(0);

    useEffect(() => {
        const chooseRandomFortune = () => {
            const randomNumber = Math.floor(Math.random() * 5);
            setRandomFortune(randomNumber);
        }

        chooseRandomFortune();
    }, []);

    return (
        <>
            <div className="upper-terminal">
                <div className="upper-terminal-buttons">
                    <div className="upper-terminal-button">
                        <div className="exit-terminal-button" aria-hidden="true"></div>
                        <X size={12} onClick={onExit} />
                    </div>

                    <div className="upper-terminal-button">
                        {type != "expanded" ?
                            <>
                                <div className="close-terminal-button" aria-hidden="true"></div>
                                <Minus size={12} onClick={onClose} />
                            </>
                            :
                            <div className="inactive-terminal-button" aria-hidden="true"></div>
                        }
                    </div>
                    
                    <div className="upper-terminal-button">
                        <div className="expand-terminal-button" aria-hidden="true"></div>
                        <Maximize2 size={12} onClick={onExpand} />
                    </div>
                </div>
            </div>

            <div className="terminal-content">
                <p>
                    <span className="terminal-user">daniel@mtu:~$ </span> 
                    <span className="terminal-command">cat profile.json</span>
                    <span className="header-blinker">_</span>
                </p>

                <pre>
                    <span className="terminal-punctuation">&#123;</span> <br />
                    
                    {info.slice(0, 6).map((line, index) => (
                        <TerminalLine key={index} name={line.key} value={line.value} isLast={index === info.length - 1} />
                    ))}

                    {info.slice(6).map((line, index) => (
                        <TerminalLine key={index} name={line.key} value={line.value[randomFortune]} isLast={true} />
                    ))}

                    <span className="terminal-punctuation">&#125;</span>
                </pre>
            </div>
        </>
    )
}

export default HeroTerminal