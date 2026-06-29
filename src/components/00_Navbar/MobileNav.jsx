import { X } from 'lucide-react';
import { NavLinks } from "./NavLinks";
import LightModeToggle from "./LightModeToggle";
import { ContactInfo } from "../05_Contact/ContactInfo";
import ContactLink from "../05_Contact/ContactLink";

const MobileNav = ({ isOpen, onClose, lightModeOn, onToggle }) => {
    if (!isOpen) return null;
    
    return (
        <>
            <div className="navOverlay" onClick={onClose}></div>

            <div className="mobileNavbar-links">
                <div className="upperMenu">
                <button 
                    onClick={onClose}
                    aria-label="Close menu"
                    aria-expanded={isOpen}
                >
                    <X size={30} />
                </button>

                <h3>Navigation</h3>
                <LightModeToggle lightModeOn={lightModeOn} onToggle={onToggle} />
                
                </div>

                <ul className="navbar-links-mobile">
                    {NavLinks.map((link, index) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={onClose}>
                                <span className="navbar-link-index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-footer-mobile">
                    {ContactInfo.slice(1, 3).map((info) => (
                        <ContactLink {...info} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MobileNav