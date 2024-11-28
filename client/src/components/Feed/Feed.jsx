import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slice/productSlice";
import Card from "../card/Card.jsx";
import "./feed.css";
import SnackBar from "../snackBar/SnackBar.jsx";

function Feed() {
  const data = useSelector((state) => state.productsRed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="feed">
      <SnackBar />
      <div className="gridContainer">
        {data.products &&
          data.products.length > 0 &&
          data.products.map((el, i) => {
            return <Card key={i} product={el} />;
          })}
      </div>
    </div>
  );
}

export default Feed;
