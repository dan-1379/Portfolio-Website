import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

/**
 * Displays a project's full details in a modal overlay, with an
 * image carousel if the project provides multiple images.
 *
 * @param {Object} props
 * @param {Object} props.project - Project data (name, image/images, dateFrom, dateTo, overview).
 * @param {Function} props.onClose - Closes the modal.
 * @returns {JSX.Element} Project modal.
 */
const ProjectModal = ({ project, onClose }) => {
    const[currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

    return (
        <>
            <div className="overlay" onClick={onClose}></div>

            <div className="content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div className="imageContainer">
                    <button 
                        onClick={onClose} 
                        className="contentExitContainer" 
                        aria-label="Close project details"
                    >
                        <X className="contentExit" />
                    </button>

                    <div className="carousel"> 
                        <img src={project.images ? project.images[currentImage].image : project.image} 
                                alt={project.images ? project.images[currentImage].description : project.name}
                                loading="lazy" />

                        <div className="imageInfo">
                            {project.images.length > 1 ? 
                                <div className="imageCount">{currentImage + 1} / {project.images.length}</div> 
                                : 
                                <div></div>
                            }

                            {/* {project.images[currentImage].description ? 
                                <div className="imageDescription">{project.images[currentImage].description}</div> 
                                : 
                                <div></div>
                            } */}
                        </div>
                    
                        <div className="carouselButtons">
                            {project.images && project.images.length > 1 && (
                                <button className="carouselButton" onClick={prevImage} aria-label="Previous image">
                                    <ChevronLeft />
                                </button>
                            )}
                                
                            {project.images && project.images.length > 1 && (
                                <button className="carouselButton" onClick={nextImage} aria-label="Next image">
                                    <ChevronRight />
                                </button>
                            )}
                        </div>
                    </div>
                </div>


                <div className="contentText">
                    <h3 id="modalTitle">{project.name}</h3>
                    <span className="dates">{project.dateFrom} - {project.dateTo}</span>
                    <hr />
                    <p>{project.overview}</p>
                    {project.countries && 
                        <div className="countriesVisited">
                            {project.countries.map((country, index) => (
                                <p>{project.locationIcon}{country}</p>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectModal