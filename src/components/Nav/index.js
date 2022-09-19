import React from "react";
import pic from "../../assets/images/sam-avatar.png";

const Nav = () => {
  return (
    <header>
      <h1>
        <a href="/">
          <span role="img" aria-label="Sam Avatar">
            <img src={pic} />
          </span>  Samantha Guerra 
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <a href="#works">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;