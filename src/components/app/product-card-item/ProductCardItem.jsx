import CartButton from "../cart-button/CartButton";
import ProductRating from "../rating/ProductRating";

import "./product-card-item.css";

const ProductCardItem = ({
  name,
  make,
  rating,
  price,
  image,
  maxInvetoryCount,
  productId,
}) => {
  return (
    <div className="product-card custom-card">
      <div className="img">
        <img src={image} alt="Product Image" />
      </div>
      <div className="product-info mb-3">
        <div className="name">{name}</div>
        <div className="make">by {make}</div>
      </div>
      <div className="d-flex justify-content-between align-items-end">
        <div className="price-rating col-6">
          <ProductRating rating={rating} />
          <div className="price">{price} $</div>
        </div>
        <div className="price-rating col-6">
          <CartButton max={maxInvetoryCount} productId={productId} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
