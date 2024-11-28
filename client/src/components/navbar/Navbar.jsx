import React from "react";
import "./navbar.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/Notification";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => navigate("/")}>
        Shopping Card
      </h1>
      <div className="wishlist" onClick={() => navigate("/wishlist")}>
        <MdAddShoppingCart size={40} />
        <Notification />
      </div>
    </nav>
  );
}

export default Navbar;
