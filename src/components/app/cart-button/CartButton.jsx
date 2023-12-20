import { BsCartCheckFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { cartContext } from "../../../contexts/CartContext";

import "./cart-button.css";

const CartButton = ({ max = 2, productId }) => {
  const { getCartValue, setCartValue } = useContext(cartContext);
  const [cartCount, setCartCount] = useState(getCartValue(productId) || 0);
  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) setCartValue(productId, cartCount);
    if (initialRender.current) initialRender.current = false;
  }, [cartCount]);

  return (
    <div className="cart-btn-container">
      <div
        className={`icon-ctm ${cartCount <= 0 && "icon-disable"}`}
        onClick={() => {
          if (cartCount > 0) setCartCount(cartCount - 1);
        }}
      >
        <FaMinus />
      </div>
      <div className="icon-ctm cart-icon active">
        <BsCartCheckFill />
        <div className="cart-item">&#x28;{cartCount}&#x29;</div>
      </div>
      <div
        className={`icon-ctm ${cartCount >= max && "icon-disable"}`}
        onClick={() => {
          if (cartCount < max) setCartCount(cartCount + 1);
        }}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default CartButton;
