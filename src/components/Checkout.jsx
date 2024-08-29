import PropTypes from "prop-types";

function Checkout({ totalPrice, shipping, price }) {
  return (
    <div className="flex-1 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:h-[30vh] max-sm:bg-white border-2 border-cyan-800 p-5">
      <h1 className="text-4xl font-semibold text-center">Check Out</h1>
      <div className="flex flex-col text-2xl p-5">
        <div className="flex justify-between border-b-2 pb-5">
          <h1 className="font-medium">Shipping: </h1>
          <span className="font-semibold">${shipping * 0.5}</span>
        </div>
        <div className="flex justify-between pt-4 border-b-2 pb-5">
          <h1 className=" font-medium">Product Price: </h1>
          <span className="font-semibold">${price}</span>
        </div>
        <div className="flex justify-between pt-4 border-b-2 pb-5">
          <h1 className=" font-medium">Total: </h1>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

Checkout.propTypes = {
  totalPrice: PropTypes.number,
  shipping: PropTypes.number,
  price: PropTypes.number,
};
export default Checkout;
