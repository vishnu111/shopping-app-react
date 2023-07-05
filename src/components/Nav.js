import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <div id="navMainMenu">
        <div className="navbar-nav">
          <Link to="/home">Home</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
