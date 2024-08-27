import { Button, Card } from "flowbite-react";
import Ratings from "./Ratings";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
function CartProduct({ image, rating, name, availability, price, data }) {
  const dispatch = useDispatch();
  return (
    <Card className=" max-w-xs" imgAlt={name} imgSrc={image}>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="mb-5 mt-2.5 flex items-center">
        <Ratings ratings={rating} />
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {availability}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <Button onClick={() => dispatch(removeFromCart(data))}>Remove</Button>
      </div>
    </Card>
  );
}

CartProduct.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  availability: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.string,
  data: PropTypes.number,
};

export default CartProduct;
