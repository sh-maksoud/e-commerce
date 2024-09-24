

import React, { useEffect } from 'react';
import './About.css'; 
import john from '../../assets/john.jpeg';
import jane from '../../assets/jane.jpeg';
import Numbers from '../../components/Numbers/Numbers';
import useThemeStore from '../../store/useThemeStore'; 

const About = () => {
  const { isDarkMode } = useThemeStore(state => state);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="about-container">
      <section className="hero">
        <h1>About Us</h1>
        <p>Delivering exceptional products with a focus on quality and customer satisfaction.</p>
      </section>

      <Numbers />

      <section className="overview">
        <h2>Who We Are</h2>
        <p>
          Founded in 2021, we are a passionate team of designers, developers, and creators committed to delivering the highest quality products to our customers. We believe in innovation, customer focus, and continuous improvement.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to revolutionize the way you experience products and services. We strive for excellence in every aspect, from design to delivery.</p>
      </section>

      <section className="milestones">
        <h2>Our Journey</h2>
        <div className="milestones-container">
          <div className="milestone">
            <h3>2021</h3>
            <p>Founded with a vision to change the industry.</p>
          </div>
          <div className="milestone">
            <h3>2022</h3>
            <p>Reached over 10,000 satisfied customers.</p>
          </div>
          <div className="milestone">
            <h3>2023</h3>
            <p>Expanded globally with a presence in 5 countries.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={john} alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={jane} alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>

      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default About;
