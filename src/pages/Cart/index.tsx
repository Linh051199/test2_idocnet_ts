import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
// import { CartContext, actions } from "../../store";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { actions } from "../../context";
import CartList from "./CartList";

const cx = classNames.bind(styles);

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const [currNumber, setCurrentNumber] = useState("");

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (cartList.length > 0) {
      setIsEmpty(false);
    }
  }, [cartList]);

  let total = 0;

  if (cartList.length > 0) {
    for (let cart of cartList) {
      total += cart.number * parseInt(cart.price);
    }
  }

  return (
    <div>
      <Header />
      <div className={cx("cart__wrapper", "grid")}>
        <div className={cx("title")}>Cart</div>
        <div className={cx("step")}>
          <div>
            <p className={cx("active")}>1</p>
            <span>Cart</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div>
            <p>2</p>
            <span>Checkout</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div>
            <p>3</p>
            <span>Order</span>
          </div>
        </div>

        {isEmpty ? (
          <div className={cx("cartEmpty")}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Your cart is currently empty.</span>
            <Link to={"/test2_idocnet/"}>
              <button>Return to shop</button>
            </Link>
          </div>
        ) : (
          <div className={cx("cart", "grid", "wide")}>
            <div className={cx("cart__info")}>
              <div className={cx("cart__header")}>
                <div className={cx("cart__product", "title-primary")}>
                  PRODUCT
                </div>
                <div className={cx("cart__price", "title-primary")}>PRICE</div>
                <div className={cx("cart__quantity")}>QUANTITY</div>
                <div className={cx("cart__subtotal")}>SUBTOTAL</div>
              </div>
              <span className={cx("cart__bodySeparate")}></span>
              {cartList.map((cart: any, index: number) => (
                <CartList key={index} data={cart} />
              ))}
            </div>
            <div className={cx("cart__totals")}>
              <h2> Cart totals</h2>
              <div className={cx("cart__subtotal")}>
                <p>Subtotal</p>
                <span>${total.toFixed(2)}</span>
              </div>
              <span className={cx("cart__separate")}></span>
              <div className={cx("cart__shipping")}>
                <p>Shipping</p>
                <div>
                  <p>Free shipping</p>
                  <span>
                    Shipping to <strong>CA.</strong>
                  </span>
                  <a href="/#">Change address </a>
                </div>
              </div>
              <span className={cx("cart__separate")}></span>
              <div className={cx("cart__total")}>
                <p>Total</p>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className={cx("cart__btn")}> Procced to checkout</button>
              <Link to={"/"}>
                <div className={cx("cart__continute")}>Continute shooping</div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
