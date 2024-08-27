import { Button } from "flowbite-react";
import { useGetAllProductsQuery } from "../features/getProducts";
function RefetchBtn() {
  const { refetch } = useGetAllProductsQuery();
  return (
    <Button className="mt-5" onClick={refetch}>
      Try Again
    </Button>
  );
}

export default RefetchBtn;
