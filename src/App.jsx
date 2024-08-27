import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="font-montserrat max-w-[1440px] m-auto">
      <Navbar />
      <main className="mt-20">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
