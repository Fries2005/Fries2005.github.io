import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LandingPage from "./Components/Pages/LandingPage";
import NavigationBar from './Components/Features/NavigationBar';
import AboutMe from './Components/Pages/AboutMe';
import Projects from './Components/Pages/Projects.jsx';
import Contact from './Components/Pages/Contact.jsx';

function App() {
    const navBarItems = [
        { link: 'home', text: 'Home' },
        { link: 'about', text: 'About Me' },
        { link: 'projects', text: 'Projects' },
        { link: 'contact', text: 'Contact' } 
    ];

    return (
        <Router>
            <NavigationBar navBarItems={navBarItems} />
            <div>
                <section id="home" style={{ scrollSnapAlign: "start" }}>
                    <LandingPage />
                </section>
                <section id="about" style={{ scrollSnapAlign: "start" }}>
                    <AboutMe />
                </section>
                <section id="projects" style={{ scrollSnapAlign: "start" }}>
                    <Projects />
                </section>
                <section id="contact" style={{ scrollSnapAlign: "start" }}>
                    <Contact />
                </section>
            </div>
        </Router>
    );
}

export default App;
