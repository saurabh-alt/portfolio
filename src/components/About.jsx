import React from "react";

function About() {
    return (
        <section id="about" className="section about">
            <div className="section-head">
                <p className="eyebrow">ABOUT ME</p>
                <h2>Developer focused on practical, scalable solutions.</h2>
            </div>

            <div className="about-grid">
                <p>
                    I am a software developer passionate about building reliable and
                    user-focused web applications. I work across both frontend and backend
                    layers, turning business requirements into practical and scalable solutions.
                </p>

                <p>
                    My experience includes Java, Spring Boot, REST APIs, React.js, AngularJS,
                    JavaScript, HTML/CSS, database integration, testing, deployment, and
                    production support. I enjoy solving problems, improving application
                    performance, and continuously learning new technologies.
                </p>
            </div>

            <div className="stats">
                <div>
                    <strong>2+</strong>
                    <span>Years Java Development</span>
                </div>
                <div>
                    <strong>1+</strong>
                    <span>Years React Development</span>
                </div>
                <div>
                    <strong>5+</strong>
                    <span>Major Projects</span>
                </div>
            </div>
        </section>
    );
}

export default About;
