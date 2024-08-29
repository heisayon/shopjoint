import { useGetAllProductsQuery } from "../features/getProducts";
import ProductCard from "../components/ProductCard";
import Error from "../pages/Error";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import NoResult from "../pages/NoResult";
function Products() {
  const searchQuery = useSelector((state) => state.appSlice.searchValue);
  const { data, isLoading, error, isFetching } =
    useGetAllProductsQuery(searchQuery);

  if (isLoading) {
    return <Loading />;
  }
  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  if (data.products.length < 1) {
    return <NoResult />;
  }
  return (
    <div className="flex justify-evenly flex-wrap gap-5 mt-28">
      {data?.products.map((data) => {
        if (data) {
          return (
            <ProductCard
              name={data.title}
              key={data.id}
              image={data.images[0]}
              availability={data.availabilityStatus}
              price={data.price}
              rating={data.reviews[0].rating.toFixed(1)}
              data={data}
            />
          );
        }
      })}
    </div>
  );
}

export default Products;
