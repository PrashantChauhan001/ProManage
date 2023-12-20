import { FaList } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { getUserProductList } from "../utils/helper.utils";
import { userContext } from "../contexts/UserContext";
import { APP_ROUTE, VIEW_TYPE } from "../utils/constants.utils";
import ProductListItem from "../components/app/product-list-item/ProductListItem";
import ProductCardItem from "../components/app/product-card-item/ProductCardItem";
import { cartContext } from "../contexts/CartContext";

import "../assets/styles/cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const { userData, userPreference, setPreference } = useContext(userContext);
  const { getCartValue, cartData } = useContext(cartContext);

  useEffect(() => {
    const response = getUserProductList(userData.userID);
    let userProductList = null;
    if (response.success) userProductList = response.data;
    if (userProductList?.length)
      setCartList(
        userProductList.filter((product) =>
          getCartValue(product.id) ? true : false
        )
      );
  }, [cartData]);

  const getTotalAmount = () =>
    cartList.reduce(
      (prev, curr) => Math.round(prev + curr.price * getCartValue(curr.id)),
      0
    );

  return (
    <>
      <div className="container">
        <div className="cart-header">
          <div className="cart-detail">
            <div className="cart-item">({cartList?.length}) Items Selected</div>
            <div className="cart-item">Total Amount</div>
            <div className="cart-item price">$ {getTotalAmount()}</div>
          </div>
          <div className="view-container">
            <div
              className={`icon-ctm ${
                userPreference === VIEW_TYPE.CARD && "active"
              }`}
              onClick={() => setPreference(VIEW_TYPE.CARD)}
            >
              <RiBox3Fill />
            </div>
            <div
              className={`icon-ctm ${
                userPreference === VIEW_TYPE.LIST && "active"
              }`}
              onClick={() => setPreference(VIEW_TYPE.LIST)}
            >
              <FaList />
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-container scollbar-ctm">
        {cartList.length > 0 ? (
          cartList.map((product) =>
            userPreference === VIEW_TYPE.CARD ? (
              <ProductCardItem
                key={product.id}
                name={product.name}
                make={product.make}
                rating={product.rating}
                price={product.price}
                image={product.image}
                maxInvetoryCount={product.maxInvetoryCount}
                productId={product.id}
              />
            ) : (
              <ProductListItem
                key={product.id}
                name={product.name}
                make={product.make}
                rating={product.rating}
                price={product.price}
                image={product.image}
                maxInvetoryCount={product.maxInvetoryCount}
                productId={product.id}
              />
            )
          )
        ) : (
          <div className="container">
            <div className="empty-cart custom-card">
              <div className="text">
                Select some items to add into the cart{" "}
              </div>

              <div className="icon-ctm cart-icon">
                <Link to={APP_ROUTE.PRODUCTS}>Go to product page</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
