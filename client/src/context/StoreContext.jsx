/* eslint-disable react/prop-types */
import { createContext, useState} from "react";
import { food_list } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = ( props ) => {

    const [cartItems, setCartItems] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (id) => {
        setCartItems((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }))
        console.log("Added to cart:", id);
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => {
          if (prev[id] > 1) {
            return { ...prev, [id]: prev[id] - 1 };
          } else {
            const updatedCart = { ...prev };
            delete updatedCart[id];
            return updatedCart;
          }
        });
      };
      const deleteFromCart = (id) => {
        setCartItems((prev) => {
          const updatedCart = { ...prev };
          delete updatedCart[id];
          return updatedCart;
        });
      };

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        isCartOpen,
        setIsCartOpen

    };

        return (
            <StoreContext.Provider value={contextValue}>
               {props.children}
            </StoreContext.Provider>
        )
    }

    export default StoreContextProvider;