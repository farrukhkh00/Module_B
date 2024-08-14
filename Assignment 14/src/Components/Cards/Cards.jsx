import React from 'react';
import './Cards.css'; // You can style the card component here or inline
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, category, title, description, rating, price }) => {
  // Create an array for rating stars
  const stars = Array(5).fill(false).map((_, index) => index < rating);

const nave = useNavigate();
  return (
    <div onClick={()=>{nave(`/inner/${id}`)}} className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-category">{category}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description.slice(0,50)}</p>
      <div className="card-rating">
        {stars.map((isFilled, index) => (
          <span key={index} className={`star ${isFilled ? 'filled' : ''}`}>★</span>
        ))}
      </div>
      <div className="card-price">${price}</div>
    </div>
  );
};

export default Card;
