import React, { useState, createContext, useContext } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  // const [language, setLanguage] = useState(true);
  // const mongolianLang = createContext();

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  return (
    <div className="searchBar col-lg-3 col-md-4 col-sm-6 mx-sm-auto m-0 p-0">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          onChange={handleInputChange}
        />
        {/* <img
          onClick={() => setLanguage(!language)}
          src={mongoliaLang ? "/mongolia-flag.png" : "/australia-flag.jpg"}
          alt="australia"
          style={{ width: "30px", height: "20px" }}
        /> */}
      </div>
    </div>
  );
};
