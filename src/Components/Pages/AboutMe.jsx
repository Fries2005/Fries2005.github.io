import React from 'react';
import AboutMeCard from '../Features/AboutMeCard';
import styles from './PageStyles/AboutMe.module.css';

function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutMeCard}>
                    <AboutMeCard />
                </div>
                <div className={styles.textContainer}>
                    <p> 
                        Hey there, I'm Anand! I'm a student at the University of Maryland, 
                        studying Computer Science, with a specialization in <span>Machine Learning</span>.
                        Much of my early experience with programming came from my 6-year robotics
                        career, where I was a lead developer on 3 different teams. 
                        Many of my recent projects are from Hackathons, primarily involving 
                        <span> Computer Vision</span> and <span>Full Stack</span> applications. Currently,
                        I'm working on a <span> LLM </span> project, which uses the UMD course API to give 
                        students advice on scheduling and course planning. In my free time,
                        you'll find me playing guitar, chess, or tennis!
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default AboutMe;
