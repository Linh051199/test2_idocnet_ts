import React from "react";
import classNames from "classnames/bind";

import styles from "./HeaderFixed.module.scss";
import HeaderBottom from "../HeaderBottom";
import images from "../../../assets/images";
import { Link } from "react-router-dom";
import HeaderNav from "../HeaderNav";

const cx = classNames.bind(styles);

const HeaderFixed = () => {
  return (
    <div className={cx("wrapper")}>
      <HeaderBottom />

      <div className={cx("menu", "grid")}>
        <div className={cx("container", "grid", "wide")}>
          <div className={cx("menuItem")}>
            <img src={images.chair} alt="img" />
            <p>Chairs</p>
          </div>

          <div className={cx("menuItem")}>
            <img src={images.beds} alt="img" />
            <p>Beds</p>
          </div>

          <div className={cx("menuItem")}>
            <img src={images.lamp} alt="img" />
            <p>Lamps</p>
          </div>

          <div className={cx("menuItem")}>
            <img src={images.table} alt="img" />
            <p>Tables</p>
          </div>

          <div className={cx("menuItem")}>
            <img src={images.armchair} alt="img" />
            <p>ArmChairs</p>
          </div>

          <div className={cx("menuItem")}>
            <img src={images.cabines} alt="img" />
            <p>Cabinets</p>
          </div>
          <Link to={"/test2_idocnet/sofas"}>
            <div className={cx("menuItem")}>
              <img src={images.sofas} alt="img" />
              <p>Sofas</p>
            </div>
          </Link>

          <div className={cx("menuItem", "active")}>
            <img src={images.star} alt="img" />
            <p className={cx("active")}>Sales</p>
          </div>
        </div>
      </div>

      <div className={cx("HeaderNav")}>
        <HeaderNav />
      </div>
    </div>
  );
};

export default HeaderFixed;
