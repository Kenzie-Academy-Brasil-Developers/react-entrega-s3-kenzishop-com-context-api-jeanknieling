import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([
    ...JSON.parse(localStorage.getItem("@KenzieShop:productsCart")) || []
  ]);

  localStorage.setItem("@KenzieShop:productsCart", JSON.stringify(cartProducts));

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeFromCartProducts = (product) => {
    cartProducts.splice(
      cartProducts.findIndex(
        (cartProduct) => cartProduct.name === product.name
      ),
      1
    );
    setCartProducts([...cartProducts]);
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addProductToCart, removeFromCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
