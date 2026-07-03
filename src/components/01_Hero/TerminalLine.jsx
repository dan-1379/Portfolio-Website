const TerminalLine = ({ name, value, isLast }) => {
    return (
        <div className="terminal-line">
            <span className="terminal-punctuation">"</span>
            <span className="terminal-key">{name}</span>
            <span className="terminal-punctuation">"</span>
            <span className="terminal-punctuation">: </span>
            <span className="terminal-punctuation">"</span>
            <span className="terminal-value">{value}</span>
            <span className="terminal-punctuation">"</span>
            {!isLast && <span className="terminal-punctuation">,</span>}
        </div>
    )
}

export default TerminalLine