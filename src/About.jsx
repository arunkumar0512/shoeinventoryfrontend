import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to the enchanted world of our Shoe Emporium!</p>

        <section className="inventory-section">
          <h2>Magical Inventory</h2>
          <p>Explore our mystical collection of shoes, each imbued with its own unique charm and style. From elegant elfin slippers to sturdy dwarf boots, we have footwear for every fantasy being!</p>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Have a question or need assistance on your magical shoe quest? Reach out to our wizards at:</p>
          <p>Email: Arunstore@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </section>

        <section className="other-details-section">
          <h2>Other Details</h2>
          <p>Visit us at our enchanted location:</p>
          <p>Arun Shoe Emporium</p>
          <p>TamilNadu</p>
          <p>India</p>
        </section>
      </div>
    </div>
  );
};

export default About;
