import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { CartContext } from "../../context/CartContext";
import { actions } from "../../context";

const cx = classNames.bind(styles);

interface Props {
  data: {
    src: string;
    name: string;
    color: string;
    price: string;
    number: number;
  };
  index: number;
}

const CartList: React.FC<Props> = (props) => {
  const { data, index } = props;

  const [currNumber, setCurrentNumber] = useState(data.number);

  const getSubtotal = (number: number, price: string) => {
    return (number * parseInt(price.replace(/,/g, ""), 10)).toFixed(2);
  };

  const [state, dispatch] = useContext(CartContext);

  const handleOnClickDelete = (index: number) => {
    dispatch(actions.deleteCart(index));
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
  return (
    <div>
      <div className={cx("cart__body")}>
        <div className={cx("cart__product")}>
          <img src={data.src} alt="img"></img>
          <div>
            <p>{`${data.name} - ${data.color}`}</p>
            <p>
              Warranty: <span>5 year's</span>
            </p>
          </div>
        </div>
        <div className={cx("cart__price")}>
          <p>${data.price}</p>
        </div>
        <div className={cx("cart__quantity")}>
          <div>
            <p onClick={handleOnClickDecrease}>-</p>
            <span>{currNumber}</span>
            <p onClick={handleOnClickIncrease}>+</p>
          </div>
        </div>
        <div className={cx("cart__subtotal")}>
          <p>${getSubtotal(currNumber, data.price)}</p>
          <span>
            <i
              className="fa-solid fa-xmark"
              onClick={() => handleOnClickDelete(index)}
            ></i>
          </span>
        </div>
      </div>
      <span className={cx("cart__bodySeparate")}></span>
    </div>
  );
};

export default CartList;
