import React, { useState } from "react";
import '../assets/styles/search.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Ngăn reload trang
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="input-group mb-3 w-75 mx-auto mt-3">
      <form className="input-group mb-3 w-75 mx-auto mt-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control search-input border"
          placeholder="Tìm công thức cho riêng bạn..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ fontSize: '0.8rem' }}
        />
        <button className="btn btn-light" type="submit">
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#f22726' }}></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
