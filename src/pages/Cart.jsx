import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import Checkout from "../components/Checkout";
import { totalPrice } from "../features/cartSlice";
import { useEffect } from "react";
function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartSlice.cart);
  const total = useSelector((state) => state.cartSlice.total);
  const productprice = useSelector((state) => state.cartSlice.productPrice);

  useEffect(() => {
    dispatch(totalPrice());
  }, [cartItem]);
  return (
    <section className="flex gap-2 max-sm:flex-col max-sm:items-center h-[90vh]">
      <div className="flex justify-center items-center flex-wrap gap-5 max-w-[500px] overflow-y-scroll h-[90vh] max-sm:h-[50vh] pb-3 pt-2 px-10">
        {cartItem.map(({ cartItems, uniqueID }) => (
          <CartProduct
            name={cartItems.title}
            key={uniqueID}
            image={cartItems.images[0]}
            availability={cartItems.availabilityStatus}
            price={cartItems.price}
            rating={cartItems.reviews[0].rating.toFixed(1)}
            data={uniqueID}
          />
        ))}
      </div>
      <Checkout
        totalPrice={total}
        shipping={cartItem.length}
        price={Number(productprice.toFixed(2))}
      />
    </section>
  );
}

export default Cart;
