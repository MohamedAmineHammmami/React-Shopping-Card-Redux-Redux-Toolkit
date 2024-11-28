import React from "react";
import "./notification.css";
import { useSelector } from "react-redux";
function Notification() {
  const counter = useSelector((state) => state.productsRed.favorite.length);
  return (
    <div className="notification">
      <h3>{counter}</h3>
    </div>
  );
}

export default Notification;
