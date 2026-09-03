import React from "react";
import { Code2 } from "lucide-react";
import projects from "../data/projects";

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="section-head">
                <p className="eyebrow">PROJECTS</p>
                <h2>Selected work</h2>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <article className="project" key={project.title}>
                        <div className="project-top"><span>{project.period}</span><Code2 size={20} /></div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;