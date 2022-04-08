import axios from "axios";
import { React, createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const cartItemIndexFound = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let cartItem = { ...item, cartQuantity: 1 };

    axios
      .post("http://localhost:5000/addToCart", JSON.stringify({ id: item.id }))
      .then(() => {
        if (cartItemIndexFound >= 0) {
          const currentCartQuanity = cartItems[cartItemIndexFound].cartQuantity;
          if (currentCartQuanity >= item.stock) return;
          cartItems[cartItemIndexFound].cartQuantity += 1;
          setCartItems([...cartItems]);
        } else {
          setCartItems([...cartItems, cartItem]);
        }
      });
  };

  const removeItem = (itemId) => {
    const itemIndexToRemove = cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    let updatedCartQuantity = cartItems[itemIndexToRemove].cartQuantity - 1;

    if (updatedCartQuantity <= 0) {
      setCartItems([...cartItems.filter((cartItem) => cartItem.id !== itemId)]);
    } else {
      cartItems[itemIndexToRemove].cartQuantity = updatedCartQuantity;
      setCartItems([...cartItems]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const cartConsumer = (Component, props, key) => {
  if(key){
    return (
      <CartContext.Consumer key={key}>
        {(context) => <Component key={key} {...props} context={context} />}
      </CartContext.Consumer>
    );
  }
  return (
    <CartContext.Consumer >
      {(context) => <Component {...props} context={context} />}
    </CartContext.Consumer>
  );
  
};

export { CartProvider, cartConsumer };
