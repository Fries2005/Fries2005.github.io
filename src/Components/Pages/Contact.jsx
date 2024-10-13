import React from 'react'
import ContactForm from '../Features/ContactForm';
import styles from './PageStyles/Contact.module.css'
function Contact(){
    return (
        <div className={styles.contactContainer}>  
            <h1 className={styles.title}> Contact Me </h1>
            <ContactForm/>
        </div>
    );
}

export default Contact