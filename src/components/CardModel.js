import React from "react";
import './CardModel.css';

const CardModel = ({ cartItems, onClose, removeFromCart, updateQuantity, totalPrice }) => {
    return (
        <div className="model-backdrop">
            <div className="cart-model">
                <h2> Your Cart</h2>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                {cartItems.length === 0 ? (<p>Your Cart is Empty.</p>) :
                    (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-image" />
                                <div className="cart-info">
                                    <p>{item.title}</p>
                                    <p>₹{item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-cart">
                                        Remove from cart
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                <hr></hr>
                <h3 className="cart-total">Total: ₹{totalPrice}</h3>
                <button className="buynow-button">Buy Now</button>
            </div>
        </div>
    );
};

export default CardModel