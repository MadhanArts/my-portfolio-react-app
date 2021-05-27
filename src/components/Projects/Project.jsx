import React from "react";

function Project({project_image, title, description}) {
    return (
        <div className='project-container'>
            <div className='project'>
                <img src={project_image} alt='project images' />
                <div>
                    <h4 className='project-title'>{title}</h4>
                    <p className='project-description'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
