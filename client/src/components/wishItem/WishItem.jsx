import React, { useEffect, useState } from "react";
import "./wishItem.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromFavorite,
} from "../../redux/slice/productSlice";

function WishItem({ favProduct }) {
  const [quantity, setQuantity] = useState(1);
  const [allow, setAllow] = useState(true);
  const dispatch = useDispatch();

  const increase = () => {
    setQuantity((prev) => prev + 1);
    dispatch(increaseQuantity({ price: favProduct.price, access: allow }));
  };
  const decrease = () => {
    setQuantity((prev) => (quantity > 1 ? prev - 1 : prev));
    dispatch(decreaseQuantity({ price: favProduct.price, access: allow }));
  };

  useEffect(() => {
    if (quantity === 1) {
      setAllow(false);
    } else {
      setAllow(true);
    }
  }, [quantity]);
  return (
    <div className="wishItem">
      <div className="sectionOne">
        <img src={favProduct.image} alt="productPic" />
        <h2>{favProduct.title}</h2>
      </div>
      <div className="sectionTwo">
        <button onClick={increase}>+</button>
        <div className="itemNum">{quantity}</div>
        <button onClick={decrease}>-</button>
      </div>
      <div className="sectionThree">
        <div className="priceTag">{favProduct.price} $</div>
        <MdOutlineCancelPresentation
          size={34}
          onClick={() => dispatch(removeFromFavorite(favProduct.id))}
          className="cancel"
        />
      </div>
    </div>
  );
}

export default WishItem;
