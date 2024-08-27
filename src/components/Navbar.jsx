import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import Search from "./Search";
import { useSelector } from "react-redux";
function Navbar() {
  const cartItem = useSelector((state) => state.cartSlice.cart);
  return (
    <IconContext.Provider value={{ color: "white", size: "30px" }}>
      <nav className="fixed top-0 left-0 right-0 bg-cyan-800 max-w-[1800px] m-auto z-50">
        <ul className="flex justify-between text-white p-4 items-center flex-wrap">
          <li className=" first-letter:text-4xl font-semibold">
            <Link to="/">ShopJoint</Link>
          </li>
          <li className="max-sm:hidden">
            <Search />
          </li>
          <li className="relative z-30">
            <Link to="/cart">
              <span className="absolute bg-red-600 rounded-full px-2 z-0 left-4 bottom-4">
                {cartItem.length > 0 && cartItem.length}
              </span>
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
