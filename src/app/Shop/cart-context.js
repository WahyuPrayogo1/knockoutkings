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
      // Check if the product is already in the shop cart
      const isProductInShopCart = state.shopCart.some((product) => product.id === action.payload.id);

      if (!isProductInShopCart) {
        // Ensure the quantity is set to 1 if it's not defined
        const productToAdd = { ...action.payload, quantity: action.payload.quantity || 1 };
        return { ...state, shopCart: [...state.shopCart, productToAdd] };
      } else {
        alert("This product is already added. You can't add the same product twice, but you can add or reduce the amount of product");
        return state;
      }
      case 'ADD_TO_LOVE_CART':
        // Check if the product is already in the love cart
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
    console.log('Removing product with ID:', productId);
    dispatch({ type: 'REMOVE_FROM_LOVE_CART', payload: productId });
  };

  const removeFromShopCart = (productId) => {
    console.log('Removing product with ID:', productId);
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
