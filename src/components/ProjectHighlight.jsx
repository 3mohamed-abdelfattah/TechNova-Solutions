import React from 'react';
import '../styles/ProjectHighlight.css';

function ProjectHighlight() {
    return (
        <section id="projects" className="project-highlight">
            <h2>Project Highlights</h2>
            <div className="project-card">
                <img src="placeholder.jpg" alt="Project 1" />
                <h3>Project 1</h3>
                <p>Description of project 1.</p>
            </div>
            <div className="project-card">
                <img src="placeholder.jpg" alt="Project 2" />
                <h3>Project 2</h3>
                <p>Description of project 2.</p>
            </div>
            <div className="project-card">
                <img src="placeholder.jpg" alt="Project 3" />
                <h3>Project 3</h3>
                <p>Description of project 3.</p>
            </div>
        </section>
    );
}

export default ProjectHighlight;