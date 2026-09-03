import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

function Hero() {
    return (
        <section id="home" className="section hero">
            <div className="hero-copy">
                <p className="eyebrow">JAVA FULL STACK DEVELOPER</p>
                <h1>Building reliable <span>web applications</span> with Java & modern UI.</h1>
                <p className="lead">
                    Software Engineer with nearly 2 years of experience in web application development,
                    production support, REST API integration, and enterprise applications.
                </p>
                <div className="actions">
                    <a className="primary" href="#projects">View Projects <ExternalLink size={17} /></a>
                    <a className="secondary" href="#contact">Contact Me <Mail size={17} /></a>
                </div>
                <div className="socials">
                    <a href="https://github.com/saurabh-alt" target="_blank" rel="noreferrer"><Github size={20} /> GitHub</a>
                    <a href="https://www.linkedin.com/in/saurabh-nishad-872b25249/" target="_blank" rel="noreferrer"><Linkedin size={20} /> LinkedIn</a>
                </div>
            </div>
            <div className="hero-card">
                <div className="code-window">
                    <div className="dots"><i></i><i></i><i></i></div>
                    <pre>{`public class Developer {
    String name = "Saurabh Nishad";
    String role = "Java Developer";

    String[] focus = {
        "Spring Boot",
        "REST APIs",
        "React.js",
        "Microservices"
    };

    String mindset = "Build. Learn. Improve.";
}`}
                    </pre>
                </div>
            </div>
        </section>
    );
}

export default Hero;