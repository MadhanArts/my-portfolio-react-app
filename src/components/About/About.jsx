import React from "react";
import "./About.css";

function About() {
    return (
        <div className='about-container'>
            <div className='about section'>
                <h3>About Me</h3>
                <p>
                    I am Madhan, loves learning new things everyday. I have good
                    experience on app development, problem solving, Editing, and
                    photography. I have done projects on app development. Learnt
                    programming languages like C, Java, Python and Javascript. I
                    was interested on Maths, Science and Computer. Believing
                    “Education is not just getting marks, but learning and
                    understanding the concepts matters” and following the same.
                </p>
            </div>
            <div className='experience section'>
                <h3>Experience</h3>
                <ul>
                    <li>
                        <p>
                            Done 30 days Python Internship at BEST ENLIST. NOV
                            2020 - DEC 2020.
                        </p>
                    </li>
                </ul>
            </div>
            <div className='education section'>
                <h3>Education</h3>
                <h4>College</h4>
                <ul>
                    <li>
                        <p>
                            Currently pursuing B.E (Computer Science and
                            Engineering) at Saveetha Engineering College under
                            Anna University, Chennai. Upto 5th semester, C.G.P.A
                            is 85.82. Year of passing is 2022.
                        </p>
                    </li>
                </ul>

                <h4>Schools</h4>
                <ul>
                    <li>
                        <p>
                            Studied XII at Seventh Day Adventist Matriculation
                            Higher Secondary School under Directorate of
                            Government Examinations, Tamil Nadu and secured
                            85.08 % in the year 2018.
                        </p>
                    </li>
                    <li>
                        <p>
                            Studied X at Seventh Day Adventist Matriculation
                            Higher Secondary School under Directorate of
                            Government Examinations, Tamil Nadu and secured 90.4
                            % in the year 2016.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
