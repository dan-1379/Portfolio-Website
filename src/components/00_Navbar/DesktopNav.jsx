import { NavLinks } from "./NavLinks";
import LightModeToggle from "./LightModeToggle";

const DesktopNav = ({ lightModeOn, onToggle }) => {
    return (
        <ul className="navbar-links">
            {NavLinks.map((link) => (
                <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))}
            <li>
                <LightModeToggle lightModeOn={lightModeOn} onToggle={onToggle} />
            </li>
        </ul>
    )
}

export default DesktopNav