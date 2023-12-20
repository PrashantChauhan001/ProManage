import { Link } from "react-router-dom";
import "../assets/styles/home.css";
import { APP_ROUTE } from "../utils/constants.utils";

const Home = () => {
  return (
    <div className="container home-container">
      <div className="card-container">
        <div className="product-card custom-card">
          <h4>
            View list of product assigned to you, Manage and Handle it
            Efficiently and Effortlessly
          </h4>
          <Link to={APP_ROUTE.PRODUCTS}>
            <button
              type="button"
              className="btn btn-outline-primary btn-ctm w-100"
            >
              View Products
            </button>
          </Link>
        </div>
        <div className="cart-card custom-card">
          <h4>
            Select multiple products from product page and update cart accordig
            to your convinience
          </h4>
          <Link to={APP_ROUTE.CART}>
            <button
              type="button"
              className="btn btn-outline-primary btn-ctm w-100"
            >
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
