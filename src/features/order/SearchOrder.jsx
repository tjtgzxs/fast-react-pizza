import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault();

    if (!searchValue) return;
    navigate(`/order/${searchValue}`);
    setSearchValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-900 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
