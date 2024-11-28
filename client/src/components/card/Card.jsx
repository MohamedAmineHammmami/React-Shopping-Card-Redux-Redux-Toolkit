import React, { useEffect, useState } from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/slice/productSlice";

function Card({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} alt="productImage" />
      <h1>{product.title.slice(0, 20)}</h1>
      <p>{product.description.slice(0, 130)}...</p>
      <h1>{product.price} $</h1>
      <button onClick={() => dispatch(addToFavorite(product))}>
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
