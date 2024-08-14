import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './About.css';
import image from '../../assets/navlogo.png'
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      <div style={{marginTop : "100px"}} className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to our eCommerce store! We are dedicated to providing you with the best products, 
            at the most affordable prices. Our mission is to bring high-quality items directly to your 
            doorstep with seamless online shopping experiences.
          </p>
          <p>
            Our team is passionate about finding unique and trending items that you’ll love. Whether 
            you’re shopping for the latest fashion, electronics, or home goods, we’ve got you covered.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="About Us" />
        </div>
      </div>

       <div style={{marginTop : '30px'}} className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews">
          <div className="review-card">
            <p>"Absolutely amazing! Great quality and fast delivery. I will definitely shop here again."</p>
            <h4>- Sarah W.</h4>
          </div>
          <div className="review-card">
            <p>"Excellent customer service and the products are exactly as described. Highly recommended!"</p>
            <h4>- James T.</h4>
          </div>
          <div className="review-card">
            <p>"A wonderful shopping experience from start to finish. The selection is fantastic!"</p>
            <h4>- Maria L.</h4>
          </div>
        </div>
      </div>

      <div className="love-us-section">
        <h2>They Love Us!</h2>
        <p>Join thousands of satisfied customers who trust us for their shopping needs.</p>
      </div> 
      <div style={{marginTop : "50px"}}>
        <Footer/>
    </div>
    </>
  );
};

export default About;

