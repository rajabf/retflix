import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="p-0 relative mx-0 text-gray-600">
      <input
        className="border-2 border-yellow-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
