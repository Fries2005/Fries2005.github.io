import React from 'react';
import { Link } from 'react-scroll'; 
import styles from './FeatureStyles/NavigationBar.module.css';
import logo from '../../assets/images/weblogowhite.png'
function NavigationBar({ navBarItems }) {
    return (
        <nav className={styles.navBar}>
            <div className={styles.myLogo}>
                <img src={logo}/>
            </div>
            <div className={styles.navContainer}>
                <ul className={styles.navLinks}>
                    {
                        navBarItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    to={item.link} 
                                    smooth={true} 
                                    duration={500} 
                                    className={styles.link} 
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;
