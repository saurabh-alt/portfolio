import React from "react";
import { Mail, Phone, GithubIcon, Linkedin } from "lucide-react";
function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="contact-box">
                <p className="eyebrow">LET'S CONNECT</p>
                <h2>Looking for a Java Full Stack opportunity?</h2>
                <p>Feel free to reach out for opportunities, collaborations, or a conversation about software development.</p>
                <div className="contact-links">
                    <a href="mailto:nsaurabh42050@gmail.com"><Mail /> nsaurabh42050@gmail.com</a>
                    <a href="tel:+917977219034"><Phone /> +91 7977219034</a>
                    <a href="https://github.com/saurabh-alt" target="_blank" rel="noreferrer"><GithubIcon /> github.com/saurabh-alt</a>
                    <a href="https://www.linkedin.com/in/saurabh-nishad-872b25249/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;