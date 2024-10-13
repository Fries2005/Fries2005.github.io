import React from 'react';
import Project from '../Features/Project'; 
import helpingHands from '../../assets/images/helpinghands.png';
import bandMaker from '../../assets/images/BandMaker.png'
import danceMaker from '../../assets/images/jddr.png'
import connective from '../../assets/images/connective.png'
import styles from './PageStyles/Projects.module.css'

function Projects() {
    const helpingHandsDesc = `Allows for mouseless cursor control via
                              computer vision. Users manipulate their 
                              cursor by moving their hand, and are able to click
                              using simple finger gestures. MediaPipe and NumPy were used
                              to track hand landmarks and calculate cursor movements.`;
    const helpingHandsLink = 'https://devpost.com/software/helpinghands-myl8ox';
    const helpingHandsTitle = 'Helping Hands'
    const helpingHandsTags = ['Python', 'OpenCV', 'MediaPipe', 'Hackathons', 'Accessibility']

    const bandMakerDesc = `Enables users to track stocks on a watchlist using a Discord Bot.
                           The bot provides predictions on the trend of the stock, based on market factors.
                           Visualizations for the bot's predictions and the historical accuracy of the trading
                           algorithm on various tickers are also provided.`;
    const bandMakerLink = 'https://github.com/daven-c/BandMaker';
    const bandMakerTitle = 'Bandmaker'
    const bandMakerTags = ['Python', 'Yahoo Finance', 'Plotly', 'Trading', 'Pattern Recognition']

    const danceMakerDesc = `Users can get the choreography for a dance just from a YouTube link! 
                            AI in conjunction with OpenCV is used to extract the movements of a dance, 
                            and then these movements are overlayed like "Just Dance".
                            After completing the dance, users are given a score on how well they performed.`;
    const danceMakerLink = 'https://devpost.com/software/just-dance-dance-revolution?ref_content=user-portfolio&ref_feature=in_progress';
    const danceMakerTitle = 'Just Dance x 2'
    const danceMakerTags = ['Python', 'OpenCV', 'SciPy', 'Hackathons', 'Games']

    const connectiveDesc = `UMD Students can connect with other students with similar courses using the Connective Platform.
                            Using Selenium and Canvas Authentication, students are able to sign in using their Canvas ID, and from a compiled
                            database of students, the Connective algorithm matches similar students.`;
    const connectiveLink = 'https://devpost.com/software/connective';
    const connectiveTitle = 'Connective'
    const connectiveTags = ['Full Stack', 'Python', 'React', 'SQL', 'Selenium', 'Hackathons']
    return (
        <div className={styles.projects}>
            <h1 className={styles.title}> My Projects </h1>
            <div className={styles.projectsContainer}>
                <Project 
                    imageUrl={helpingHands}  
                    projectLink={helpingHandsLink} 
                    title={helpingHandsTitle}
                    description={helpingHandsDesc} 
                    tagList={helpingHandsTags}
                />
                <Project 
                    imageUrl={danceMaker}  
                    projectLink={danceMakerLink} 
                    title={danceMakerTitle}
                    description={danceMakerDesc} 
                    tagList={danceMakerTags}
                />
                <Project 
                    imageUrl={bandMaker}  
                    projectLink={bandMakerLink} 
                    title={bandMakerTitle}
                    description={bandMakerDesc} 
                    tagList={bandMakerTags}
                />

                <Project 
                    imageUrl={connective}  
                    projectLink={connectiveLink} 
                    title={connectiveTitle}
                    description={connectiveDesc} 
                    tagList={connectiveTags}
                />
            </div>
        </div>
        
    );
}

export default Projects;
