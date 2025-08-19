import React from "react";
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return(
        <div className="product-card">
            <img src={product.image} 
            alt={product.title} 
            className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">₹{product.price}</p>
            <button className="add-button" onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard