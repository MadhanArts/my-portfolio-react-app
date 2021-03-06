import React, {useCallback, useEffect, useRef} from "react";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ProjectsSection({title, className, children}) {
    let currentSlide = useRef(0);
    // console.log(className.split(" ")[1]);
    const classname = className.split(" ")[1];

    const moveSlide = useCallback((category, direction, onCompletion) => {
        const slides = document.querySelectorAll(
            "." + category + " .project-container"
        );

        if (currentSlide.current === 0 && direction === -1) {
            currentSlide.current = slides.length - 1;
        } else {
            currentSlide.current =
                (currentSlide.current + direction) % slides.length;
        }
        // console.log(category + " " + slides.length + " " + currentSlide);

        slides.forEach((slide) => {
            // slide.classList.remove("start");
            // slide.classList.add("end");
            slide.style.display = "none";
        });

        slides[currentSlide.current].style.display = "flex";
        // slides[currentSlide.current].classList.remove("end");
        // slides[currentSlide.current].classList.add("start");

        if (onCompletion) {
            onCompletion();
        }
    }, []);

    useEffect(() => {
        const runner = () => {
            moveSlide(classname, 1, () => {
                temp = setTimeout(runner, 5000);
            });
        };

        let temp = setTimeout(runner, 5000);

        // const runner = async() => {
        //     moveSlide(classname, 1);
        // }
        // const temp = setInterval(runner, 1000);
        return () => clearInterval(temp);
    }, [classname, moveSlide]);

    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className='projects'>
                {children}
                <div className='prev'>
                    <FontAwesomeIcon
                        className='prev-icon'
                        onClick={() => moveSlide(classname, -1)}
                        icon={faCaretLeft}
                    />
                </div>
                <div className='next'>
                    <FontAwesomeIcon
                        className='next-icon'
                        onClick={() => moveSlide(classname, 1)}
                        icon={faCaretRight}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;
