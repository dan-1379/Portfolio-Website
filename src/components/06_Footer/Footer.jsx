import { CodeXml } from 'lucide-react';
import CssToggle from '../07_Buttons/CssToggle';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {(new Date().getFullYear())} Daniel Courtney - All rights reserved</p>
            
            <div className="footerContainer">
                <p>
                    <CodeXml aria-hidden = "true" className='codeIcon' /> View the source code on{' '}
                    <a 
                        href="https://github.com/dan-1379/Portfolio-Website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="External link to github repository"
                    >
                    GitHub
                    </a>
                </p>

                <CssToggle />
            </div>
        </footer>
    )
}

export default Footer