import React from "react";

const Nav = () => {
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img"></span> Sam-Antic Design
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;