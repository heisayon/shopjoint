import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
function Cart() {
  const cartItems = useSelector((state) => state.cartSlice.cart);
  return (
    <section className="flex gap-6 max-sm:flex-col">
      <div className="flex justify-center items-center flex-wrap gap-5 max-w-[500px] border-2 overflow-y-scroll h-[90vh] max-sm:h-[50vh]">
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
      <div className="border flex-1 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:h-[40%] max-sm:bg-white">
        <h1>Check Out</h1>
      </div>
    </section>
  );
}

export default Cart;
