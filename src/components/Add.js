
 import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'; 

function  AddToCartButton() {
  
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // Implement the logic to add the item to the cart with the specified quantity
  
       console.log(`Added ${quantity} items to cart`);
       navigate('/Cart')
  };

  return (

      
      <div className="quantity-controls">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} style={{ marginRight: '10px' }}>+</button>
      
         

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default  AddToCartButton;


