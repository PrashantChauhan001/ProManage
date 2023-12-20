import { FaList } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { getUserProductList } from "../utils/helper.utils";
import { userContext } from "../contexts/UserContext";
import { VIEW_TYPE } from "../utils/constants.utils";
import ProductListItem from "../components/app/product-list-item/ProductListItem";
import ProductCardItem from "../components/app/product-card-item/ProductCardItem";

import "../assets/styles/products.css";

const Cart = () => {
  const [userProductList, setUserProductList] = useState([]);
  const { userData, userPreference, setPreference } = useContext(userContext);

  useEffect(() => {
    const response = getUserProductList(userData.userID);
    if (response.success) setUserProductList(response.data);
  }, []);

  return (
    <>
      <div className="container">
        <div className="product-header">
          <div className="title">Cart</div>
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
        {userProductList.map((product) =>
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
        )}
      </div>
    </>
  );
};

export default Cart;
