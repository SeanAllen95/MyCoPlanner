import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="nav-bar">
    <ul className="link-list">
      <li>
        <Link to='/'>MyCoPlanner</Link>
      </li>
      <li>
        <Link to="/information">Information</Link>
      </li>
      <li>
        <Link to="/MyCollection">MyCollection</Link>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;