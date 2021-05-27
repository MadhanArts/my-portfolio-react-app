import React from "react";
import Project from "./Project";
import "./Projects.css";
import ProjectsSection from "./ProjectsSection";

function Projects() {
    return (
        <div className='projects-container'>
            <ProjectsSection
                title='App Development'
                className='section app-development-projects'>
                {/* <h3>App Development</h3> */}
                <Project
                    title='Voice Recorder App'
                    description='Its a simple voice recorder app, where you can
                    record your crystal clear voice.'
                />

                <Project
                    title='Notes App'
                    description='This is the note taking app with voice recording
                    feature. In this app, we can take text and voice
                    recordings notes. We can also create a checklist.'
                />

                <Project
                    title='Music Player App'
                    description='This is the Music Player app, where you can play
                    songs, voice recordings or any kind of audio files.'
                />
            </ProjectsSection>

            <ProjectsSection
                title='Web Development'
                className='section web-development-projects'>
                {/* <h3>Web Development</h3> */}
                <Project
                    title='Personal portfolio using MERN stack'
                    description='This website is to showcase my personal portfolio. 
                    I added a feature contact form which will send me mail and store 
                    data in database when submitted.'
                />
                <Project
                    title='CRUD Operations on MongoDB'
                    description='This is a website, which is the demo for Create, Read, 
                    Update and Delete operation on MongoDB database using mongoose. 
                    Here I connected React and Express using Axios API call.'
                />
            </ProjectsSection>
        </div>
    );
}

export default Projects;
