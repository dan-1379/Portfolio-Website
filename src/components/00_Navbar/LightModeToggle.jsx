import { Sun, Moon } from 'lucide-react';

const LightModeToggle = ({ lightModeOn, onToggle }) => {
    return (
        <button 
            onClick={onToggle}
            aria-label={lightModeOn ? "Switch to dark mode" : "Switch to light mode"}
        >
            {lightModeOn ? <Sun /> : <Moon />}
        </button>
    )
}

export default LightModeToggle