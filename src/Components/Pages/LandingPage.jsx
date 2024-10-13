import Lottie from "lottie-react";
import animationData from '../../assets/landing-animation.json';
import { useRef, useEffect } from 'react';
import styles from './PageStyles/LandingPage.module.css'; 

function LandingPage() {
    const phoneRef = useRef();

    useEffect(() => {
        phoneRef.current?.setSpeed(0.75); 
    }, []);

    return ( 
        <div className={styles.landingPage}> 
            <div className ={styles.landingText}>
                <h1>Anand Vinod</h1>
                <p><span> Computer Science and Math Student @ UMD </span></p>
                <p style={{color: 'gray'}}> Actively searching for Software Engineering and Data Science internships.</p>
            </div>
            <Lottie 
                lottieRef={phoneRef} 
                animationData={animationData}
                className={styles.landingAnimation} 
            />
        </div>
    );
}

export default LandingPage;