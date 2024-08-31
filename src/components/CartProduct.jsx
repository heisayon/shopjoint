import { Button, Card } from "flowbite-react";
import Ratings from "./Ratings";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import {
  increaseCount,
  decreaseCount,
  totalPrice,
} from "../features/cartSlice";
import { useEffect } from "react";
function CartProduct({ image, rating, name, availability, price, data }) {
  const count = useSelector((state) => state.cartSlice.numberOfProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [count]);
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
      <div className="flex justify-center">
        <div className="flex border-2 px-6 py-3 items-center justify-between rounded-lg w-[150px]">
          <button
            onClick={() => dispatch(increaseCount())}
            className=" bg-gray-500 px-3 text-lg font-bold"
          >
            +
          </button>
          <h1 className="font-semibold">{count}</h1>
          <button
            onClick={() => dispatch(decreaseCount())}
            className=" bg-gray-500 px-3 text-lg font-bold"
          >
            -
          </button>
        </div>
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
  data: PropTypes.string,
};

export default CartProduct;
