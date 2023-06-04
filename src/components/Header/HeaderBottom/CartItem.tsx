import React, { useContext, useState } from "react";
import classNames from "classnames/bind";

import styles from "./HeaderBottom.module.scss";
import { CartContext } from "../../../context/CartContext";
import { actions } from "../../../context";

const cx = classNames.bind(styles);
interface IProps {
  data: {
    src: string;
    name: string;
    color: string;
    price: string;
    number: number;
  };
  index: number;
}

const CartItem: React.FC<IProps> = (props) => {
  const { data, index } = props;

  const [currNumber, setCurrentNumber] = useState(data.number);

  const [state, dispatch] = useContext(CartContext);

  const getSubtotal = (number: number, price: string) => {
    return (number * parseInt(price.replace(/,/g, ""), 10)).toFixed(2);
  };

  const newCartIncrease = { ...data, number: currNumber + 1 };
  const newCartDecrease = { ...data, number: currNumber - 1 };

  const handleOnClickDecrease = () => {
    if (currNumber > 1) {
      setCurrentNumber(currNumber - 1);
    }
    dispatch(actions.updateCart(newCartDecrease));
  };

  const handleOnClickIncrease = () => {
    setCurrentNumber(currNumber + 1);

    dispatch(actions.updateCart(newCartIncrease));
  };

  const handleOnClickDelete = (index: number) => {
    dispatch(actions.deleteCart(index));
  };

  return (
    <div className={cx("cartItem__wrapper")}>
      <div className={cx("cartItem__body")}>
        <img src={data.src} alt="img"></img>
        <div className={cx("cartItem__bodyName")}>
          <p
            className={cx("cartItem__bodyNameTitle")}
          >{`${data.name} - ${data.color}`}</p>
          <p className={cx("cartItem__bodyNameWarranty")}>
            Warranty: <span>5 year's</span>
          </p>
          <span>
            Price: <strong>${data.price}</strong>
          </span>
        </div>
        <div className={cx("cartItem__bodySeparate")}></div>
        <div className={cx("cartItem__bodyPrice")}>
          ${getSubtotal(currNumber, data.price)}
        </div>
      </div>
      <div className={cx("cartItem__contact")}>
        <div className={cx("cartItem__contactNumber")}>
          <div>
            <p onClick={handleOnClickDecrease}>-</p>
            <span>{currNumber}</span>
            <p onClick={handleOnClickIncrease}>+</p>
          </div>
        </div>
        <div
          className={cx("cartItem__contactRemove")}
          onClick={() => handleOnClickDelete(index)}
        >
          <i className="fa-solid fa-trash-can"></i>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
