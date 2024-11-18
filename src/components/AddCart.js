import React, { useState } from 'react';


// Sample data for cart items
const initialCartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
    { id: 3, name: 'Product 3', price: 49.99, quantity: 1 }
];

function AddCart () {
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Calculate the total price of all items in the cart
    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    };

    // Increase quantity of an item
    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease quantity of an item
    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    // Remove an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                            <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total Price: ${getTotal()}</h3>
                </div>
            )}
            

        </div>
    );
}

export default AddCart;





