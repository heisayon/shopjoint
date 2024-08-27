import RefetchBtn from "../components/RefetchBtn";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] font-semibold text-2xl">
      <h1 className="text-center"> Error, Check Connection and Try Again! </h1>
      <RefetchBtn />
    </div>
  );
}

export default Error;
