import { IoStarSharp } from "react-icons/io5";
import "./product-rating.css";

const ProductRating = ({ rating }) => {
  return (
    <div className="rating-container">
      <div className="text">{rating}</div>
      <div className="icon ms-2 d-flex">
        <IoStarSharp />
      </div>
    </div>
  );
};

export default ProductRating;
