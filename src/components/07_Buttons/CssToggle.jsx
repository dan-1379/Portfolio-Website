import { ToggleLeft } from 'lucide-react';

/**
 * 
 * @returns Button to toggle CSS on and off
 */
const CssToggle = () => {
    const toggle = () => {
        document.querySelectorAll('link[rel="stylesheet"], style').forEach((el) => {
            el.disabled = !el.disabled;
        });
  };

  return (
    <button 
        onClick={toggle} 
        style={{ background: "none", color: "none", border: "none", fontSize: "0.9em", alignSelf: "center", display: "flex", gap: "1em", margin: "0", padding: "0" }}
    >
       <ToggleLeft size={12} /> Toggle CSS
    </button>
  );
}

export default CssToggle