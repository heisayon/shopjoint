import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
function Cart() {
  const cartItems = useSelector((state) => state.cartSlice.cart);
  return (
    <section className="flex gap-6 max-sm:flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-wrap gap-5 max-w-[500px] overflow-y-scroll h-[90vh] max-sm:h-[60vh] pb-3">
        {cartItems.map((product, i) => (
          <CartProduct
            name={product.title}
            key={i}
            image={product.images[0]}
            availability={product.availabilityStatus}
            price={product.price}
            rating={product.reviews[0].rating.toFixed(1)}
            data={product.id}
          />
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="flex-1 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:h-[30vh] max-sm:bg-white">
          <h1 className="">Check Out</h1>
          <div>
            <h1>Shipping: </h1>
            <h1>Total: </h1>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
