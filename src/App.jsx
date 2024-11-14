import React from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ProjectHighlight from './components/ProjectHighlight';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesSection />
      <ProjectHighlight />
      <ContactForm />
    </div>
  );
}

export default App;