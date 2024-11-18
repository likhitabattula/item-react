// src/Card.js
import React from 'react';


import './Card.css'; // Optional: Create a CSS file for styles
import AddToCartButton from './Add';
const Card = ({ image, name, cost }) => {
     
    
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-cost">{cost}</p>
            </div>
             
            <AddToCartButton/>
           
            
        </div>
    );
};

export default Card;
