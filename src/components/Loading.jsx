import { Spinner } from "flowbite-react"

function Loading() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
    <Spinner aria-label="Loading State" size="xl" />
    </div>
  )
}

export default Loading