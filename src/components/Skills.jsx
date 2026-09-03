import React from "react";
import { Code2, Server, Database, Layers } from "lucide-react";
import skills from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="section alt">
            <div className="section-head">
                <p className="eyebrow">TECH STACK</p>
                <h2>Tools I work with</h2>
            </div>
            <div className="skill-grid">
                {skills.map((skill) => <span key={skill} className="skill">{skill}</span>)}
            </div>
            <div className="skill-cards">
                <div><Code2 /><h3>Backend</h3><p>Java, Spring Boot, Spring MVC, JDBC, Servlets, REST APIs, Hibernate</p></div>
                <div><Layers /><h3>Frontend</h3><p>React.js, AngularJS, JavaScript, HTML, CSS, Bootstrap, jQuery</p></div>
                <div><Database /><h3>Database</h3><p>MySQL and Oracle with application-level database integration.</p></div>
                <div><Server /><h3>Tools</h3><p>Maven, Apache Tomcat, Eclipse, STS, Postman and Swagger</p></div>
            </div>
        </section>
    );
}

export default Skills;