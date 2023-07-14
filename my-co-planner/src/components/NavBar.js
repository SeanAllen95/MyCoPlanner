import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/NewProject">New Project</Link>
      </li>
      <li>
        <Link to="/TDD">TDD</Link>
      </li>
      <li>
        <Link to="/edit{id}">Edit Form</Link>
      </li>
    </ul>
  );
}

export default NavBar;