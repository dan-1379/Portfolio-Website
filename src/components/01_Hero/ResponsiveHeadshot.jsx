import headshot from '../../assets/Headshot/headshot.JPG'

import headshot400w from '../../assets/Headshot/IMG_3829-400w.jpg';
import headshot400wWebp from '../../assets/Headshot/IMG_3829-400w.webp';
import headshot800w from '../../assets/Headshot/IMG_3829-800w.jpg';
import headshot800wWebp from '../../assets/Headshot/IMG_3829-800w.webp';
import headshot1200w from '../../assets/Headshot/IMG_3829-1200w.jpg';
import headshot1200wWebp from '../../assets/Headshot/IMG_3829-1200w.webp';
import headshot1600w from '../../assets/Headshot/IMG_3829-1600w.jpg';
import headshot1600wWebp from '../../assets/Headshot/IMG_3829-1600w.webp';
import headshot2400w from '../../assets/Headshot/IMG_3829-2400w.jpg';
import headshot2400wWebp from '../../assets/Headshot/IMG_3829-2400w.webp';

const ResponsiveHeadshot = () => {
    return (
        <picture>
            <source
                type="image/webp"
                srcSet={`
                ${headshot400wWebp} 400w,
                ${headshot800wWebp} 800w,
                ${headshot1200wWebp} 1200w,
                ${headshot1600wWebp} 1600w,
                ${headshot2400wWebp} 2400w
                `}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <img
                src={headshot800w}
                srcSet={`
                ${headshot400w} 400w,
                ${headshot800w} 800w,
                ${headshot1200w} 1200w,
                ${headshot1600w} 1600w,
                ${headshot2400w} 2400w
                `}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"
                alt="Daniel Courtney Headshot"
                loading="lazy"
            />
        </picture>
    )
}

export default ResponsiveHeadshot