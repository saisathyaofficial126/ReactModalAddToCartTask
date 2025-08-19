import React from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav className="navbar">
            <p className="logo">FakeStore Shop</p>
            <button className="cart-button" onClick={onCartClick}>
                Cart
                <span className="cart-count-bg">{cartCount}</span>
            </button>
        </nav>
    );
};

export default Navbar;