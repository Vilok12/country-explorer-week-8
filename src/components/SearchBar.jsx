import { useRef } from "react";

function SearchBar({ onSearch }) {

  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  const handleChange = (e) => {

    const value = e.target.value;

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);

  };

  return (
    <div className="flex justify-center mb-8">

      <input
        ref={inputRef}
        autoFocus
        type="text"
        placeholder="🔍 Search country..."
        onChange={handleChange}
        className="border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 rounded-xl w-80 shadow-md bg-white transition"
      />

    </div>
  );
}

export default SearchBar;