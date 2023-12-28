import { BASE_URL_PREFIX } from "../../../utils/constants.utils";
import CartButton from "../cart-button/CartButton";
import ProductRating from "../rating/ProductRating";

const ProductListItem = ({
  name,
  make,
  rating,
  price,
  image,
  maxInvetoryCount,
  productId,
}) => {
  return (
    <div className="product-list custom-card">
      <div className="left-aside">
        <div className="img">
          <img src={BASE_URL_PREFIX + image} alt="Product Image" />
        </div>
        <div className="product-info ms-3">
          <div className="name">{name}</div>
          <div className="make">by {make}</div>
        </div>
      </div>
      <div className="right-aside">
        <div className="d-flex justify-content-between align-items-center">
          <div className="price-rating">
            <ProductRating rating={rating} />
            <div className="price">{price} $</div>
          </div>
          <div className="price-rating ms-4">
            <CartButton productId={productId} max={maxInvetoryCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
