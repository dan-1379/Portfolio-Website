import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "./ProjectInfo";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const Projects = () => {
    const[learnMore, setLearnMore] = useState(null);
    const[currentImage, setCurrentImage] = useState(0);

    const openLearnMore = (project) => {
        setLearnMore(project);
        setCurrentImage(0);
    }

    const closeLearnMore = () => {
        setLearnMore(null);
        setCurrentImage(0);
    }

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % learnMore.images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + learnMore.images.length) % learnMore.images.length);

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projectCards">
                {ProjectInfo.map((project, index) => (
                    <ProjectCard key = {index} {...project} openLearnMore = {openLearnMore} />
                ))}
            </div>

            {learnMore && 
                <>
                    <div className="overlay" onClick={closeLearnMore}></div>

                    <div className="content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                        <div className="imageContainer">
                            <button onClick={closeLearnMore} className="contentExitContainer" aria-label="Close project details"><X className="contentExit" /></button>

                            <div className="carousel"> 
                                <img src={learnMore.images ? learnMore.images[currentImage].image : learnMore.image} 
                                     alt={learnMore.images ? learnMore.images[currentImage].description : learnMore.name}
                                     loading="lazy" />

                                <div className="imageInfo">
                                    {learnMore.images.length > 1 ? <div className="imageCount">{currentImage + 1} / {learnMore.images.length}</div> : <div></div>}
                                    {/* {learnMore.images[currentImage].description ? <div className="imageDescription">{learnMore.images[currentImage].description}</div> : <div></div>} */}
                                </div>
                            
                                <div className="carouselButtons">
                                    {learnMore.images && learnMore.images.length > 1 && (
                                        <button className="carouselButton" onClick={prevImage} aria-label="Previous image"><ChevronLeft /></button>
                                    )}
                                        
                                    {learnMore.images && learnMore.images.length > 1 && (
                                        <button className="carouselButton" onClick={nextImage} aria-label="Next image"><ChevronRight /></button>
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="contentText">
                            <h3 id="modalTitle">{learnMore.name}</h3>
                            <span className="dates">{learnMore.dateFrom} - {learnMore.dateTo}</span>
                            <hr />
                            <p>{learnMore.overview}</p>
                        </div>
                    </div>
                </>
            }
        </section>
    )
}

export default Projects