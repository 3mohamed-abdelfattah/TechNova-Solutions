import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        // Email format validation 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!trimmedName || !trimmedEmail) {
            alert('Please fill in all fields');
        } else if (trimmedName.length < 3) {
            alert('Name must be at least 2 characters long');
        } else if (!emailRegex.test(trimmedEmail)) {
            alert('Please enter a valid email address');
        } else {
            alert('Form submitted!');
            // reset form submission.
            setName('');
            setEmail('');
        }
    };

    return (
        <section id="contact" className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;