import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import isEmpty from "validator/lib/isEmpty";

import styles from "./HeaderBottom.module.scss";
import images from "../../../assets/images";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import CartItem from "./CartItem";

const cx = classNames.bind(styles);

interface IMessErr {
  userName?: string;
  password?: string;
}

interface IProps {
  data?:
    | {
        src: string;
        name: string;
        star: number;
        price: string;
        priceHidden?: string;
      }
    | {};
}
const HeaderBottom: React.FC<IProps> = ({ data }) => {
  const [showLoinForm, setShowLoinForm] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messErr, setMessErr] = useState<IMessErr>({});
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  useEffect(() => {
    if (cartList.length > 0) {
      setIsEmptyCart(false);
    }
  }, [cartList]);

  const dataCart: any = [];
  dataCart.push(data);

  const handleOnChangeUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const handleOnChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const validateAll = () => {
    const errArr: IMessErr = {};
    if (isEmpty(userName)) {
      errArr.userName = "Please enter your Username or Email!";
    }
    if (isEmpty(password)) {
      errArr.password = "Please enter your password!";
    }

    setMessErr(errArr);
    if (Object.keys(errArr).length > 0) return false;
    return true;
  };

  const handleOnSubmitFromLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };

  const handleOnClickOverlayCart = () => {
    setShowCart(false);
  };

  return (
    <div className={cx("headerBottom_wrapper", "grid")}>
      <div className={cx("headerBottom_body", "grid", "wide")}>
        <Link to={"/"}>
          <div className={cx("headerBottom__logo")}>
            <img src={images.logo} alt="logo" />
          </div>
        </Link>

        <div className={cx("headerBottom__search")}>
          <form className={cx("headerBottom__form")}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className={cx("headerBottom__contact")}>
          <div className={cx("headerBottom__contactItem", "searchIcon")}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className={cx("headerBottom__contactItem")}>
            <div className={cx("headerBottom__contactItemNumber")}>0</div>
            <i className="fa-regular fa-heart"></i>
          </div>

          <div
            className={cx("headerBottom__contactItem")}
            onClick={() => setShowCart(true)}
          >
            <div className={cx("headerBottom__contactItemNumber")}>
              {cartList.length}
            </div>
            <img src={images.cart} alt="img" />
          </div>

          <div
            className={cx("headerBottom__contactItem")}
            onClick={() => setShowLoinForm(!showLoinForm)}
          >
            <img src={images.user} alt="img" />
          </div>
        </div>
        {showLoinForm && (
          <div className={cx("headerBottom__Login")}>
            <div className={cx("headerBottom__formLoginHeader")}>
              <p>Login</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setShowLoinForm(false)}
              ></i>
            </div>
            <div className={cx("headerBottom__LoginForm")}>
              <form>
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Username or email*"
                  onChange={handleOnChangeUserName}
                />
              </form>
              <p>{messErr.userName}</p>
              <form>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password*"
                  onChange={handleOnChangePassword}
                />
              </form>
              <p>{messErr.password}</p>
              <div className={cx("headerBottom__LoginFormCheckBox")}>
                <input type="checkbox" /> Remember me
              </div>
            </div>
            <div
              className={cx("headerBottom__LoginBtn")}
              onClick={handleOnSubmitFromLogin}
            >
              Login
            </div>
            <div className={cx("headerBottom__LoginLostPass")}>
              Lost your password?
            </div>
          </div>
        )}

        {showCart && (
          <>
            <div
              className={cx("headerBottom__overlay")}
              onClick={handleOnClickOverlayCart}
            ></div>

            <div className={cx("headerBottom__cart")}>
              <div className={cx("headerBottom__cartHeader")}>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setShowCart(false)}
                ></i>
                <img src={images.buyBlack} alt="img" />
                <p>CART</p>
              </div>
              <div className={cx("headerBottom__cartBody")}>
                {isEmptyCart ? (
                  <div className={cx("cartEmpty")}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Your cart is currently empty.</span>
                    <Link to={"/"}>
                      <button>Return to shop</button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    {cartList.map((cart: any, index: number) => (
                      <CartItem key={index} data={cart} index={index} />
                    ))}
                  </div>
                )}
              </div>
              <div className={cx("headerBottom__cartFooter")}>
                <div className={cx("headerBottom__subTotal")}>
                  <span>Subtotal</span>
                  <p>$0.00</p>
                </div>
                <div className={cx("headerBottom__total")}>
                  <span>Total</span>
                  <p>$0.00</p>
                </div>
                <div className={cx("headerBottom__checkoutBtn")}>
                  Proceed to checkout
                </div>
                <Link to={"/cart"}>
                  <div
                    className={cx("headerBottom__viewCart")}
                    onClick={() => setShowCart(false)}
                  >
                    View cart
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* {showSearchBox && (
          <div className={cx("headerBottom__searchBox")}>
            <div className={cx("headerBottom__overlay")}></div>
            <div className={cx("headerBottom__searchBoxContainer")}>
              <form>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Enter your search" />
                <i className="fa-solid fa-xmark"></i>
              </form>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default HeaderBottom;
