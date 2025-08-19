import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CardModel from './components/CardModel';


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => setProducts(data));
  }, []);


  // add to cart function
  const addToCart = (product) => {
    const isAlreadyInCart = cart.find(item => item.id === product.id);
    if(isAlreadyInCart) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? {...item,quantity: item.quantity + 1}
        : item
      );
      setCart(updatedCart);
      alert('Item already added to the cart');
    }
    else{
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  // update the quantity of product

  const updateQuantity = (productId, newQuantity) => {
    if(newQuantity <= 0){
      removeFromCart(productId);
    }else{
      const updatedCart = cart.map(item => 
        item.id === productId ? {...item, quantity: newQuantity} : item
      );
      setCart(updatedCart);
    }
  }

  // to show sub total of cart items

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  //  removing the cart items

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };


  return (
    <>
    <Navbar cartCount={cart.length} onCartClick={() => setShowModal(true)} />
    <ProductList products={products} addToCart={addToCart} />
    {showModal && (
      <CardModel
      cartItems={cart}
      onClose={() => setShowModal(false)}
      updateQuantity={updateQuantity}
      removeFromCart={removeFromCart}
      totalPrice={getTotalPrice()} />
    )}
    
    </>
  );
};

export default App;
