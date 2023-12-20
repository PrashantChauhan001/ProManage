import { createContext, useEffect, useRef, useState } from "react";
import { LS_KEYS } from "../utils/constants.utils";

export const cartContext = createContext(null);

const CartCTXProvider = cartContext.Provider;

const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(new Map());
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      let cartLSData = localStorage.getItem(LS_KEYS.CART_DATA);
      if (cartLSData) {
        cartLSData = JSON.parse(cartLSData);
        if (cartLSData?.length) setCartData(new Map(cartLSData));
      }
    } else {
      const newData = [];
      const cartDataIterator = cartData.entries();
      let curr = cartDataIterator.next();
      while (!curr.done) {
        newData.push(curr.value);
        curr = cartDataIterator.next();
      }
      localStorage.setItem(LS_KEYS.CART_DATA, JSON.stringify(newData));
    }
    if (initialRender.current) initialRender.current = false;
  }, [cartData]);

  const getCartValue = (key) => cartData.get(key);
  const setCartValue = (key, value) => {
    const newData = new Map(cartData);
    newData.set(key, value);
    setCartData(newData);
  };

  return (
    <CartCTXProvider
      value={{
        getCartValue,
        setCartValue,
      }}
    >
      {children}
    </CartCTXProvider>
  );
};

export default CartContextProvider;
