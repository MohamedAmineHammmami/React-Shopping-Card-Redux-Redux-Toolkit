import React, { useEffect } from "react";
import WishItem from "../../components/wishItem/WishItem";
import { useSelector, useDispatch } from "react-redux";
import "./wishList.css";

function WishList() {
  const favoriteProducts = useSelector((state) => state.productsRed.favorite);
  const total = useSelector((state) => state.productsRed.total);

  return (
    <div className="wishList">
      {favoriteProducts &&
        favoriteProducts.length > 0 &&
        favoriteProducts.map((el, i) => {
          return <WishItem key={i} favProduct={el} />;
        })}
      <h1>
        Total<span> {total.toFixed(3)}</span> $
      </h1>
    </div>
  );
}

export default WishList;
