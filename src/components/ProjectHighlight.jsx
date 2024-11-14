import React from 'react';
import '../styles/ProjectHighlight.css';

function ProjectHighlight() {
    return (
        <section id="projects">
            <span>
                <h2>Project Highlights</h2>
            </span>
            <span className="project-highlight">
                <div className="project-card">
                    <img src="https://img.freepik.com/premium-psd/fashion-ecommerce-landing-page-template_444923-20.jpg" alt="Project 1" />
                    <h3>E-Shop - E-commerce Platform</h3>
                    <p>An interactive e-commerce platform featuring an extensive catalog, a streamlined checkout process, and user authentication. This project showcases our ability to create secure, scalable e-commerce sites optimized for a smooth shopping experience.</p>
                </div>
                <div className="project-card">
                    <img src="https://cdn.dribbble.com/userupload/11062872/file/original-4e698e936e45073a73ac54b6d9032edc.png?resize=752x" alt="Project 2" />
                    <h3>FitnessPro - Fitness Tracking App</h3>
                    <p>A mobile app designed for fitness enthusiasts to track workouts, set goals, and monitor progress. Built with intuitive navigation and sleek design, this app helps users stay motivated and achieve their fitness milestones.</p>
                </div>
                <div className="project-card">
                    <img src="https://cdn.sanity.io/images/ordgikwe/production/c7d5b6d397695245c77c43a3ce8fd983be6f81a1-1600x1200.jpg?w=1600&h=1200&auto=format" alt="Project 3" />
                    <h3>EduPortal - Online Learning Platform</h3>
                    <p>A learning management system that offers video tutorials, progress tracking, and course management for educators and students. This project highlights our skills in creating user-centric, content-rich educational platforms.</p>
                </div>
            </span>
        </section>
    );
}

export default ProjectHighlight;