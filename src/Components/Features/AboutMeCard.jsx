import React from 'react';
import styles from './FeatureStyles/AboutMeCard.module.css';

function AboutMeCard() {
    return ( 
        <div className={styles.aboutMeCard}>
            <div className={styles.profileImage}>
                <img src='src/assets/images/anandjohn.png' alt="Profile" className={styles.image} /> 
            </div>
            <div className={styles.icons}>
                <a href="https://github.com/Fries2005" target="_blank" rel="noopener noreferrer"><img src="src/assets/images/icons8-github-50 (1).png"/></a>
                <a href="https://www.linkedin.com/in/anand-vinod/" target="_blank" rel="noopener noreferrer"> <img src="src/assets/images/icons8-linkedin-50.png"/> </a>
                <a href="https://www.instagram.com/avinod997" target="_blank" rel="noopener noreferrer"> <img src ="src/assets/images/icons8-instagram-50.png"/> </a>
                <a href="mailto:anandvinod186@gmail.com" target="_blank" rel="noopener noreferrer"> <img src ="src/assets/images/icons8-gmail-50.png"/> </a>
            </div>
        </div>  
    );
}

export default AboutMeCard;