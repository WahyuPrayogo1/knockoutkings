// cart-context.js

import { createContext, useReducer, useContext } from 'react';

// Define the initial state
const initialState = {
  shopCart: [],
  loveCart: [],
};

// Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_SHOP_CART':
      const existingProductIndex = state.shopCart.findIndex(product => product.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        const updatedShopCart = [...state.shopCart];
        const updatedProduct = { ...updatedShopCart[existingProductIndex] };

        // Ensure the quantity is a positive integer
        updatedProduct.quantity = Math.max(0, updatedProduct.quantity) + Math.max(0, action.payload.quantity || 1);

        updatedShopCart[existingProductIndex] = updatedProduct;

        return { ...state, shopCart: updatedShopCart };
      } else {
        // If the product is not in the cart, add it
        const productToAdd = { ...action.payload, quantity: Math.max(0, action.payload.quantity || 1) };
        return { ...state, shopCart: [...state.shopCart, productToAdd] };
      }


    case 'ADD_TO_LOVE_CART':
      const isProductInLoveCart = state.loveCart.some((product) => product.id === action.payload.id);

      if (!isProductInLoveCart) {
        return { ...state, loveCart: [...state.loveCart, action.payload] };
      } else {
        alert("This product is already added. You can't add the same product twice.");
        return state;
      }
    case 'REMOVE_FROM_LOVE_CART':
      return { ...state, loveCart: state.loveCart.filter((product) => product.id !== action.payload)};
    case 'REMOVE_FROM_SHOP_CART':
      return { ...state, shopCart: state.shopCart.filter((product) => product.id !== action.payload)};
    case 'UPDATE_SHOP_CART':
      return { ...state, shopCart: action.payload };
    default:
      return state;
  }
};

// Create the context
const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const updateShopCart = (updatedCart) => {
    dispatch({ type: 'UPDATE_SHOP_CART', payload: updatedCart });
  };

  const removeFromLoveCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_LOVE_CART', payload: productId });
  };

  const removeFromShopCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_SHOP_CART', payload: productId });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, removeFromLoveCart, removeFromShopCart, updateShopCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
