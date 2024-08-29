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
    <div className="flex justify-center items-center px-5">
      <div className="relative">
        <input
          className="rounded-md py-2 outline-none text-black pl-9 pr-9 border-2 border-cyan-700"
          onChange={handleInput}
          value={searchQuery}
        />
        <img
          src={SearchIcon}
          alt="Search..."
          className="w-6 absolute top-1 mt-2 ml-2 brightness-50 hover:cursor-pointer"
        />
      </div>
      <Button onClick={handleSearch} className="ml-1">Search</Button>
    </div>
  );
}

export default Search;
