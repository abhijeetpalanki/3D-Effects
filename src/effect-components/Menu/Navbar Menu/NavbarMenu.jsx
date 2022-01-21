import React from "react";
import "./NavbarMenu.css";

const NavbarMenu = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="navbar__wrapper">
      <div className="navigation">
        <ul>
          <li>
            <a href="!#" onClick={handleClick} data-text="Home">
              Home
            </a>
          </li>
          <li>
            <a href="!#" onClick={handleClick} data-text="About">
              About
            </a>
          </li>
          <li>
            <a href="!#" onClick={handleClick} data-text="Services">
              Services
            </a>
          </li>
          <li>
            <a href="!#" onClick={handleClick} data-text="Work">
              Work
            </a>
          </li>
          <li>
            <a href="!#" onClick={handleClick} data-text="Team">
              Team
            </a>
          </li>
          <li>
            <a href="!#" onClick={handleClick} data-text="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
