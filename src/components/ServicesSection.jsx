import React from 'react';
import '../styles/ServicesSection.css';

function ServicesSection() {
    return (
        <section id="services" style={{ backgroundColor: '#F5F5F5' }} >
            <div style={{ paddingTop: '20px' }}>
                <h2>Our Services</h2>
            </div>
            <div style={{ display: 'flex', gap: '2%' }} className="services-section">
                <div className="service">
                    <h3>Web Development</h3>
                    <p>Build responsive, fast, and visually appealing websites using modern technologies. From landing pages to full-scale web applications, our team ensures a seamless user experience across all devices.</p>
                </div>
                <div className="service">
                    <h3>Mobile App Development</h3>
                    <p>Create robust, high-performing mobile applications tailored for Android and iOS. We focus on user-friendly designs and best user-interface, secure code, and optimized performance to bring your application ideas to life.</p>
                </div>
                <div className="service">
                    <h3>UI/UX Design</h3>
                    <p>Design intuitive and engaging user interfaces that captivate your audience. Our team prioritizes functionality and aesthetics, delivering designs that improve user satisfaction and interaction with your digital products.</p>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;