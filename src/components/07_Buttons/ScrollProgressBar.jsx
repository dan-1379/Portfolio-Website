import { useEffect, useState } from "react"

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight));
            setScrollPercentage(scrollPercent * 100);
        }

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="scrollProgressContainer">
            <div className="scrollProgressFill" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
    )
}

export default ScrollProgressBar