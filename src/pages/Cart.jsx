import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

function Cart() {
  const cartItems = useSelector((state) => state.cartSlice.cart);
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
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
  );
}

export default Cart;
