import React from 'react';
import heroImage from '../../assets/hero.jpg'; // Adjust the path according to your project structure
import Navbar from '../Navbar/Navbar';

const HeroSection = () => {
  return (
    <> 
    <Navbar />
      <section
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{
        background: 'rgba(0, 0, 0, 0.5)', // Blackish opacity overlay
        padding: '2rem',
        borderRadius: '2px'
      }}>
        <h2 style={{ fontSize: '2rem', margin: '0' }}>Summer Collection</h2>
        <h1 style={{ fontSize: '4rem', margin: '0.5rem 0' }}>Introducing New Arrivals</h1>
        <p style={{ fontSize: '1.25rem', margin: '1rem 0' }}>
          Discover the latest trends and shop the newest styles for the season. Our new arrivals are perfect for refreshing your wardrobe with summer essentials.
        </p>
        <button style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Shop Now
        </button>
      </div>
    </section>

    </>
  );
};

export default HeroSection;
