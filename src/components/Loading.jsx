import { Spinner } from "flowbite-react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Spinner aria-label="Loading State" size="xl" />
    </div>
  );
}

export default Loading;
