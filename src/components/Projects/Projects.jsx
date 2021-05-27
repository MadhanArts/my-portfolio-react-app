import React from "react";
import Project from "./Project";
import "./Projects.css";

function Projects() {
    return (
        <div className='projects-container'>
            <div className='section app-development-projects'>
                <h3>App Development</h3>
                <div className='projects'>
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
                </div>
            </div>
            <div className='section web-development-projects'>
                <h3>Web Development</h3>
                <div className='projects'>
                    <Project
                        title='CRUD Operations on MongoDB'
                        description='This is a website, which is the demo for Create, Read, 
                    Update and Delete operation on MongoDB database using mongoose. 
                    Here I connected React and Express using Axios API call.'
                    />
                    <Project
                        title='CRUD Operations on MongoDB'
                        description='This is a website, which is the demo for Create, Read, 
                    Update and Delete operation on MongoDB database using mongoose. 
                    Here I connected React and Express using Axios API call.'
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
