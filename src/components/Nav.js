import React from "react";
const pages = ["all", "active", "done"];

const Nav = ({ changePage, activePage }) => {
  return (
    <nav>
      <ul className="nav-items">
        {pages.map((page) => (
          <li
            className={page === activePage ? "nav-item active" : "nav-item"}
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
