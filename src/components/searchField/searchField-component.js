import React from "react";
import "./searchField-style.css";

const SearchField = ({ placeholder, onChange }) => {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchField;
