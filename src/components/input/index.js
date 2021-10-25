import React from "react";

import "./styles.scss";

const Input = () => {
  return (
    <div className="search">
      <input type="text" className="search__field" placeholder="Search" />
      <i className="bx bx-search-alt"></i>
    </div>
  );
};

export default Input;
