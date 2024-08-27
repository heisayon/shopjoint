import { useState } from "react";
import SearchIcon from "../assets/search.png";
import { useDispatch } from "react-redux";
import { getSearchValue } from "../features/appSlice";
import { Button } from "flowbite-react";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(getSearchValue(searchQuery));
    setSearchQuery("");
  };

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="relative">
        <input
          className="rounded-md py-2 mr-6 outline-none text-black pl-9 pr-9 max-sm:border-2 max-sm:border-cyan-700"
          onChange={handleInput}
          value={searchQuery}
        />
        <img
          src={SearchIcon}
          alt="Search..."
          className="w-6 absolute top-0 mt-2 ml-2 brightness-50 hover:cursor-pointer"
        />
      </div>
      <Button onClick={handleSearch}  className=" max-[375px]:mt-2">Search</Button>
    </div>
  );
}

export default Search;
