import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "./ProjectInfo";

const Projects = () => {
    const[learnMore, setLearnMore] = useState(null);
    const[currentImage, setCurrentImage] = useState(0);

    const openLearnMore = (project) => {
        setLearnMore(project);
        setCurrentImage(0);
    }

    const closeLearnMore = (project) => {
        setLearnMore(null);
        setCurrentImage(0);
    }

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % learnMore.images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + learnMore.images.length) % learnMore.images.length);

    return (
        <section id="projects">
            <h2>Projects</h2>

            {ProjectInfo.map((project, index) => (
                <ProjectCard key = {index} {...project} openLearnMore = {openLearnMore} />
            ))}

            {learnMore && 
                <div>
                    <div className="overlay" onClick={closeLearnMore}></div>

                    <div className="content">
                        <div className="imageContainer">
                            <button onClick={closeLearnMore}>x</button>

                            <div className="carousel"> 
                                <img src={learnMore.images ? learnMore.images[currentImage] : learnMore.image} alt={learnMore.name} />

                                {learnMore.images.length > 1 ? <div className="imageCount">{currentImage + 1} / {learnMore.images.length}</div> : <div></div>}
                            
                                <div className="carouselButtons">
                                    {learnMore.images && learnMore.images.length > 1 && (
                                        <button className="carouselButton" onClick={prevImage}>‹</button>
                                    )}
                                        
                                    {learnMore.images && learnMore.images.length > 1 && (
                                        <button className="carouselButton" onClick={nextImage}>›</button>
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="contentText">
                            <h3>{learnMore.name}</h3>
                            <span className="dates">{learnMore.dateFrom} - {learnMore.dateTo}</span>
                            <hr />
                            <p>{learnMore.overview}</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Projects