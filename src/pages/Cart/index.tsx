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
import { apiGetProvinces, apiGetDistrict } from "../../services/app";

const cx = classNames.bind(styles);

interface IMessErr {
  province?: string;
  district?: string;
}

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const [currNumber, setCurrentNumber] = useState("");
  const [showChangeAddress, setShowChangeAddress] = useState(false);
  const [dataProvinces, setDataProvinces] = useState<any>([]);
  const [dataDistricts, setDataDistrict] = useState<any>([]);
  const [province, setProvince] = useState("");
  const [provinceID, setProvinceID] = useState("");
  const [districtID, setDistrictID] = useState("");
  const [addressProvince, setAddressProvince] = useState("Hà Nội");
  const [addressDistrict, setAddressDistrict] = useState("Cầu Giấy");
  const [messErr, setMessErr] = useState<IMessErr>({});
  const [isEmpty, setIsEmpty] = useState(true);

  let nameProvince: any = "Hà Nội";
  let nameDistrict: any = "Cầu Giấy";

  useEffect(() => {
    if (cartList.length > 0) {
      setIsEmpty(false);
    }
  }, [cartList]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const response: any = await apiGetProvinces();
      if (response.status === 200) {
        setDataProvinces(response.data.results);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async (province: any) => {
      const response: any = await apiGetDistrict(province);
      if (response.status === 200) {
        setDataDistrict(response.data.results);
      }
    };

    province && fetchDistricts(province);
  }, [province]);

  let total = 0;

  if (cartList.length > 0) {
    for (let cart of cartList) {
      total += cart.number * parseInt(cart.price);
    }
  }

  const handleOnChangeProvince = (e: any) => {
    setProvince(e.target.value);
    setProvinceID(e.target.value);
  };

  const handleOnChangeDistrict = (e: any) => {
    setDistrictID(e.target.value);
  };

  let findProvince = dataProvinces.find((province: any) => {
    return province.province_id === provinceID;
  });
  nameProvince =
    findProvince?.province_name === undefined
      ? ""
      : findProvince?.province_name;

  let findDistritc = dataDistricts.find((district: any) => {
    return district.district_id === districtID;
  });
  nameDistrict =
    findDistritc?.district_name === undefined
      ? ""
      : findDistritc?.district_name;

  const handleOnClickProvince = (e: any) => {};

  const handleOnSubmitChangeAddress = () => {
    setAddressProvince(nameProvince);
    setAddressDistrict(nameDistrict);
    const isValid = validateAll();
    if (!isValid) return;
    setShowChangeAddress(false);
  };

  const validateAll = () => {
    const errArr: IMessErr = {};
    if (province === "") {
      errArr.province = "Please enter your Province!";
    }
    if (nameDistrict === "") {
      errArr.district = "Please enter your District!";
    }

    setMessErr(errArr);
    if (Object.keys(errArr).length > 0) return false;
    return true;
  };

  const handleOnSubmitProcced = () => {};

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
            <Link to={"/"}>
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
                <CartList key={index} data={cart} index={index} />
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
                    Shipping to :{" "}
                    <strong>{`${addressDistrict}, ${addressProvince} `}</strong>
                    <p>{messErr.province}</p>
                    <p>{messErr.district}</p>
                  </span>
                  <div
                    className={cx("changeAddressTitle")}
                    onClick={() => setShowChangeAddress(!showChangeAddress)}
                  >
                    Change address
                  </div>
                </div>
              </div>
              {showChangeAddress && (
                <div className={cx("changeAddress")}>
                  <select
                    className={cx("changeAddress__select")}
                    onChange={handleOnChangeProvince}
                    onClick={() => handleOnClickProvince}
                    // size={20}
                  >
                    <option value="">Choose Province</option>
                    {dataProvinces?.map((province: any) => (
                      <option
                        key={province.province_id}
                        value={province.province_id}
                      >
                        {province.province_name}
                      </option>
                    ))}
                  </select>

                  <select
                    className={cx("changeAddress__select")}
                    onChange={handleOnChangeDistrict}
                  >
                    <option value="">Choose District</option>
                    {dataDistricts?.map((province: any) => (
                      <option
                        key={province.district_id}
                        value={province.district_id}
                      >
                        {province.district_name}
                      </option>
                    ))}
                  </select>
                  <button
                    className={cx("changeAddress__btn")}
                    onClick={handleOnSubmitChangeAddress}
                  >
                    Update
                  </button>
                </div>
              )}
              <span className={cx("cart__separate")}></span>
              <div className={cx("cart__total")}>
                <p>Total</p>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className={cx("cart__btn")}
                onClick={handleOnSubmitProcced}
              >
                {" "}
                Procced to checkout
              </button>
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
