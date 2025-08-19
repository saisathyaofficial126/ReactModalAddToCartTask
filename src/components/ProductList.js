import React from "react";
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
    return(
        <div className="Product-list">
            {
                products.map(product => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    />
                ))
            }
        </div>
    );
};

export default ProductList