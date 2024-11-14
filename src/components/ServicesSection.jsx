import React from 'react';
import '../styles/ServicesSection.css';

function ServicesSection() {
    return (
        <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="service">
                <h3>Service 1</h3>
                <p>Brief description of service 1.</p>
            </div>
            <div className="service">
                <h3>Service 2</h3>
                <p>Brief description of service 2.</p>
            </div>
            <div className="service">
                <h3>Service 3</h3>
                <p>Brief description of service 3.</p>
            </div>
        </section>
    );
}

export default ServicesSection;