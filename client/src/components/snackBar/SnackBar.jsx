import React, { useEffect, useState } from "react";
import "./snackBar.css";
import { useDispatch, useSelector } from "react-redux";
import { clearMsg } from "../../redux/slice/productSlice";
function SnackBar() {
  const msg = useSelector((state) => state.productsRed.message);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMsg());
    }, 600);
  }, [msg]);

  return <div className={msg && "showSnackbar"}>{msg}</div>;
}

export default SnackBar;
