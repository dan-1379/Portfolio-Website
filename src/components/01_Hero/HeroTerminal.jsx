import { X, Minus, Maximize2 } from 'lucide-react';
import info from "./TerminalInfo.json";
import TerminalLine from './TerminalLine';

const HeroTerminal = () => {
    return (
        <>
            <div className="upper-terminal">
                <div className="upper-terminal-buttons">
                    <div className="upper-terminal-button">
                        <div className="exit-terminal-button" aria-hidden="true"></div>
                        <X size={12} />
                    </div>

                    <div className="upper-terminal-button">
                        <div className="close-terminal-button" aria-hidden="true"></div>
                        <Minus size={12} />
                    </div>
                    
                    <div className="upper-terminal-button">
                        <div className="expand-terminal-button" aria-hidden="true"></div>
                        <Maximize2 size={12} />
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
                    
                    {info.map((line, index) => (
                        <TerminalLine key={index} name={line.key} value={line.value} isLast={index === info.length - 1} />
                    ))}

                    <span className="terminal-punctuation">&#125;</span>
                </pre>
            </div>
        </>
    )
}

export default HeroTerminal