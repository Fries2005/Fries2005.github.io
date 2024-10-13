import React from 'react';
import styles from './FeatureStyles/Project.module.css';

function Project({ imageUrl, projectLink, title, description, tagList}) {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.topContainer}>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={imageUrl} alt="Project Screenshot" className={styles.projectImage} />
                </a>
                <div className={styles.topRightContainer}>
                    <h1 className={styles.projectTitle}>{title}</h1>
                    <ul className={styles.tags}>
                        {tagList.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>View Project</a>
                </div>
            </div>
            <p className={styles.projectDescription}>{description}</p>
        </div>
    );
}

export default Project;
