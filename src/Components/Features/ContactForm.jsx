import React, { useState } from 'react';
import styles from './FeatureStyles/ContactForm.module.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);  

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzuFCxDsN4PEFXU9UfPZzia7BHHOt620LVfN6D0yy6Cdzj7EPwNnYMwytkyb17Ery8Rpg/exec';

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);  
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Message', message);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                setMsg('Message sent successfully!');
                setTimeout(() => setMsg(''), 2000);
                setName('');
                setEmail('');
                setMessage('');
                setIsLoading(false); 
            })
            .catch(error => {
                console.error('Error!', error.message);
                setMsg('Failed to send message.');
                setIsLoading(false); 
            });
    }

    return (
        <div className={styles.contactForm}>
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name" 
                    required 
                />
                <input 
                    type="email" 
                    name="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email" 
                    required 
                />
                <textarea 
                    name="Message" 
                    rows="6" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                />
                <button 
                    type="submit" 
                    className={styles.btn} 
                    disabled={isLoading} 
                >
                {isLoading ? 'Sending...' : 'Submit'}
                </button>
                <span id="msg">{msg}</span>
            </form>
        </div>
    );
}

export default ContactForm;
