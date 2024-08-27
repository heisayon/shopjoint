import Products from "../components/Products";
import Search from "../components/Search";
function Home() {
  return (
    <>
      <div className="sm:hidden">
        <Search />
      </div>
      <Products />
    </>
  );
}

export default Home;
