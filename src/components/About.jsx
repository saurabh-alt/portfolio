import React from "react";

function About() {
    return (
        <section className="section about">

            <div className="section-head">
                <p className="eyebrow">ABOUT ME</p>
                <h2>Developer focused on practical, scalable solutions.</h2>
            </div>
            <div className="about-grid">
                <p>
                    I develop and enhance web applications based on business requirements, working across
                    frontend and backend layers. My experience includes Java, Spring Boot, REST APIs,
                    React.js, AngularJS, JavaScript, HTML/CSS, database integration, testing, deployment,
                    and production support.
                </p>

            </div>
            <div className="stats">
                <div><strong>~2</strong><span>Years Experience</span></div>
                <div><strong>5+</strong><span>Major Projects</span></div>
                <div><strong>32</strong><span>DRS APIs</span></div>
            </div>
        </section>
    );
}

export default About;