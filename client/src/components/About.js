import React from 'react';
import './About.css'; // Import your external CSS file
import NavBar from './NavBar';

const About = () => {
  return (
    <div>
      <div className='navBarA'>
        <NavBar />
        </div>
      <div className="about-container">
      
      <h1 className="main-heading">About Flatiron Eats</h1>

      <p className="sub-heading">Welcome to Flatiron Eats – Where Flavor Meets Convenience!</p>

      <p className="description">
        At Flatiron Eats, we believe that great meals should be just a click away. Born out of a passion for delicious food and a commitment to making your dining experience seamless, we bring you a culinary journey right to your doorstep.<br />Whether you're a busy professional, a student burning the midnight oil, or simply someone who appreciates the convenience of a delectable meal without the hassle, Flatiron Eats is here for you.
      </p>

      <h2 className="section-heading">Our Mission</h2>

      <p className="description">
        Our mission is simple: to connect you with the finest local restaurants and eateries in the Flatiron District and beyond. We strive to redefine the way you experience food delivery by offering a diverse range of cuisines, from classic comfort foods to exotic delights, all curated to satisfy your cravings.
      </p>

      <h2 className="section-heading">What Sets Us Apart</h2>

      <ul className="feature-list">
        <li><strong>Curated Culinary Selections:</strong> We've handpicked the best eateries in the Flatiron District, ensuring that every bite is a culinary delight.</li>
        <li><strong>Seamless Ordering Experience:</strong> Our user-friendly app is designed to make your ordering process swift and effortless. Just a few taps, and your favorite dishes are on their way!</li>
        <li><strong>Prompt and Reliable Delivery:</strong> We understand the importance of timely deliveries. Our dedicated team works tirelessly to ensure your food arrives fresh and hot at your doorstep.</li>
        <li><strong>Community-Centric Approach:</strong> Flatiron Eats is more than just a food delivery app; it's a community. We value your feedback and continually strive to enhance your dining experience.</li>
      </ul>

      <h2 className="section-heading">Join Us on this Culinary Adventure</h2>

      <p className="description">
        Whether you're a food enthusiast, a busy professional, or a curious explorer of flavors, Flatiron Eats invites you to embark on a culinary adventure with us. Indulge in the richness of local cuisines, savor the convenience of doorstep delivery, and make every meal a celebration with Flatiron Eats.
      </p>

      <p className="closing">Thank you for choosing us to be your culinary companion!</p>

      <p className="signature">Sincerely, <br />The Flatiron Eats Team</p>
    </div>
      </div>
  );
};

export default About;
