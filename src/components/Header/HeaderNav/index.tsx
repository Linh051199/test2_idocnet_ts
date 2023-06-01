import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./HeaderNav.module.scss";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const HeaderNav = () => {
  const [showNavResponsive, setShowNavResponsive] = useState<boolean>(false);
  const [showCategoriesResponsive, setShowCategoriesResponsive] =
    useState<boolean>(false);

  const handleOnClickCloseNavBtn = () => {
    setShowNavResponsive(false);
    setShowCategoriesResponsive(false);
  };
  return (
    <div className={cx("headerNav__wrapper", "grid")}>
      <div className={cx("header__body", "grid", "wide")}>
        <div className={cx("header__menu")}>
          <div className={cx("header__menuShow")}>
            <div className={cx("header__menuHeader")}>
              <i className="fa-solid fa-bars"></i>
              <p>Browse Categories</p>
              <i
                className="fa-solid fa-chevron-down"
                style={{ fontSize: "9px" }}
              ></i>
            </div>

            <div className={cx("header__menuList")}>
              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.chair} alt="img" />
                  <p>Chairs</p>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <div className={cx("header__menuItemSub")}>
                  <div className={cx("header__menuChair")}>
                    <div className={cx("header__menuChairHeader")}>
                      <div className={cx("header__menuChairItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic1.webp"
                          alt="img"
                          width="200px"
                          height="200px"
                        />
                        <span className={cx("header__menuChairItemTitle")}>
                          fabric Chair
                        </span>
                        <p>Wing chairs</p>
                        <p>Rocking chairs</p>
                        <p>Kitchen tables parts</p>
                      </div>

                      <div className={cx("header__menuChairSeparate")}></div>

                      <div className={cx("header__menuChairItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic2.webp"
                          alt="img"
                          width="200px"
                          height="200px"
                        />
                        <span className={cx("header__menuChairItemTitle")}>
                          HIGH-BACK CHAIRS
                        </span>
                        <p>Recliners</p>
                        <p>Armchairs with footstool</p>
                        <p>Rattan armchairs</p>
                      </div>

                      <div className={cx("header__menuChairSeparate")}></div>

                      <div className={cx("header__menuChairItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic3.webp"
                          alt="img"
                          width="200px"
                          height="200px"
                        />
                        <span className={cx("header__menuChairItemTitle")}>
                          KIDS CHAIRS
                        </span>
                        <p>Wing chairs</p>
                        <p>Rocking chairs</p>
                        <p>Kids armchairs parts</p>
                      </div>
                    </div>
                    <div className={cx("header__menuChairFooter")}>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.senco} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.oo} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.yourstyle} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.jbe} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.beddie} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.beds} alt="img" />
                  <p>Beds</p>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <div className={cx("header__menuItemSub")}>
                  <div className={cx("header__menuBed")}>
                    <div className={cx("header__menuBedList")}>
                      <div className={cx("header__menuBedItem")}>
                        <p>
                          <img src={images.beds} alt="img" />
                          <span>beds</span>
                        </p>
                        <span>Single beds</span>
                        <span>Double beds</span>
                        <span>Beds parts</span>
                      </div>
                      <div className={cx("header__menuBedItem")}>
                        <p>
                          <img src={images.beds} alt="img" />
                          <span> sofa beds</span>
                        </p>
                        <span>Chair beds</span>
                        <span>Corner sofa beds</span>
                        <span>Sofa bed parts</span>
                      </div>
                      <div className={cx("header__menuBedItem")}>
                        <p>
                          <img src={images.beds} alt="img" />
                          <span>guest beds</span>
                        </p>
                        <span>Day beds</span>
                        <span>Stackable beds</span>
                        <span>Beds with drawers</span>
                      </div>
                      <div className={cx("header__menuBedItem")}>
                        <p>
                          <img src={images.beds} alt="img" />
                          <span>kids beds</span>
                        </p>
                        <span>Chair beds</span>
                        <span>Toddler beds</span>
                        <span>Loft beds</span>
                      </div>
                    </div>
                    <div className={cx("header__menuBedImg")}>
                      <img
                        src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-categories-pic1.webp"
                        alt="img"
                        width="400px"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.lamp} alt="img" />
                  <p>Lamps</p>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <div className={cx("header__menuItemSub")}>
                  <div className={cx("header__menuLamp")}>
                    <div className={cx("header__menuLampList")}>
                      <div className={cx("header__menuLampItem")}>
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span>ceiling lights</span>
                        </p>
                        <span>Pendantas</span>
                        <span>Ceiling sportlights</span>
                        <span>Chandeliers</span>
                      </div>
                      <div className={cx("header__menuLampItem")}>
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span> sportlights</span>
                        </p>
                        <span>Ceiling sportlights</span>
                        <span>Wall sportlights</span>
                        <span>Track lighting</span>
                      </div>
                      <div className={cx("header__menuLampItem")}>
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span>floor lamps</span>
                        </p>
                        <span>LED floors</span>
                        <span>Uplighters</span>
                        <span>Reading lamps</span>
                      </div>
                      <div className={cx("header__menuLampItem")}>
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span>desk lamps</span>
                        </p>
                        <span>Work lamps</span>
                        <span>Kid lamps</span>
                        <span>Clamp lights</span>
                      </div>
                    </div>
                    <div className={cx("header__menuLampProduct")}>
                      <div className={cx("header__menuLampProductItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic7.webp"
                          alt="img"
                          width="84px"
                          height="84px"
                        />
                        <div className={cx("header__menuLampProductItemInfo")}>
                          <h4>Metal hanging lamps</h4>
                          <div>
                            <span>$122.00</span>
                            <p>$105.00</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("header__menuLampProductItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic8.webp"
                          alt="img"
                          width="84px"
                          height="84px"
                        />
                        <div className={cx("header__menuLampProductItemInfo")}>
                          <h4>Desk lamp</h4>
                          <div>
                            <span>$135.00</span>
                            <p>$135.00</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("header__menuLampProductItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic9.webp"
                          alt="img"
                          width="84px"
                          height="84px"
                        />
                        <div className={cx("header__menuLampProductItemInfo")}>
                          <h4>Living room lamp</h4>
                          <div>
                            <span>$599.00</span>
                            <p>$450.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.table} alt="img" />
                  <p>Tables</p>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <div className={cx("header__menuItemSub")}>
                  <div className={cx("header__menuTable")}>
                    <div className={cx("header__menuTableList")}>
                      <div className={cx("header__menuTableItem")}>
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span>ceiling lights</span>
                        </p>
                        <span>Pendantas</span>
                        <span>Ceiling sportlights</span>
                        <span>Chandeliers</span>
                      </div>
                      <div
                        className={cx(
                          "removePaddingLeft",
                          "header__menuLampItem"
                        )}
                      >
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span> sportlights</span>
                        </p>
                        <span>Ceiling sportlights</span>
                        <span>Wall sportlights</span>
                        <span>Track lighting</span>
                      </div>
                      <div className={cx("header__menuLampItem")}>
                        <p>
                          <img src={images.lamp} alt="img" />
                          <span>floor lamps</span>
                        </p>
                        <span>LED floors</span>
                        <span>Uplighters</span>
                        <span>Reading lamps</span>
                      </div>
                    </div>
                    {/* <div className={cx("header__menuLampProduct")}></div> */}
                  </div>
                </div>
              </div>

              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.armchair} alt="img" />
                  <p>Armchairs</p>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ fontSize: "12px" }}
                  ></i>
                </div>
                <div className={cx("header__menuItemSub")}>
                  <div className={cx("header__menuChair")}>
                    <div className={cx("header__menuChairHeader")}>
                      <div className={cx("header__menuChairItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic1.webp"
                          alt="img"
                          width="200px"
                          height="200px"
                        />
                        <span className={cx("header__menuChairItemTitle")}>
                          fabric Chair
                        </span>
                        <p>Wing chairs</p>
                        <p>Rocking chairs</p>
                        <p>Kitchen tables parts</p>
                      </div>

                      <div className={cx("header__menuChairSeparate")}></div>

                      <div className={cx("header__menuChairItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic2.webp"
                          alt="img"
                          width="200px"
                          height="200px"
                        />
                        <span className={cx("header__menuChairItemTitle")}>
                          HIGH-BACK CHAIRS
                        </span>
                        <p>Recliners</p>
                        <p>Armchairs with footstool</p>
                        <p>Rattan armchairs</p>
                      </div>

                      <div className={cx("header__menuChairSeparate")}></div>

                      <div className={cx("header__menuChairItem")}>
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic3.webp"
                          alt="img"
                          width="200px"
                          height="200px"
                        />
                        <span className={cx("header__menuChairItemTitle")}>
                          KIDS CHAIRS
                        </span>
                        <p>Wing chairs</p>
                        <p>Rocking chairs</p>
                        <p>Kids armchairs parts</p>
                      </div>
                    </div>
                    <div className={cx("header__menuChairFooter")}>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.senco} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.oo} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.yourstyle} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.jbe} alt="img" />
                      </div>
                      <div className={cx("header__menuChairFooterItem")}>
                        <img src={images.beddie} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.cabines} alt="img" />
                  <p>Cabinets</p>
                </div>
              </div>
              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.sofas} alt="img" />
                  <p>Sofas</p>
                </div>
              </div>

              <div className={cx("header__menuItem")}>
                <div className={cx("header__menuItemTitle")}>
                  <img src={images.star} alt="img" />
                  <p className={cx("navItemActive")}>Sales</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("header__menuResponsive")}
            onClick={() => setShowCategoriesResponsive(true)}
          >
            <img src={images.categories} alt="img" />
            <p>Categories</p>
          </div>
        </div>

        <div className={cx("header__nav")}>
          <Link to={"/"}>
            <div className={cx("header__navItem")}>Home</div>
          </Link>
          <div className={cx("header__navItem", "navItemActive")}>Shop</div>
          <div className={cx("header__navItem")}>Blog</div>
          <div className={cx("header__navItem")}>Collections</div>
          <div className={cx("header__navItem")}>About us</div>
          <div className={cx("header__navItem")}>Contact</div>
        </div>

        <div
          className={cx("header__navResponsiveBtn")}
          onClick={() => setShowNavResponsive(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        {showNavResponsive && (
          <div className={cx("header__navResponsive")}>
            <div
              className={cx("header__navOverlay")}
              onClick={() => setShowNavResponsive(false)}
            ></div>
            <div className={cx("header__navResponsiveContainer")}>
              <i
                className="fa-solid fa-xmark"
                onClick={handleOnClickCloseNavBtn}
              ></i>
              <Link to={"/"}>
                <div
                  className={cx("header__navResponsiveItem")}
                  onClick={() => setShowNavResponsive(false)}
                >
                  Home
                </div>
              </Link>
              <div className={cx("header__navResponsiveItem", "navItemActive")}>
                Shop
              </div>
              <div
                className={cx("header__navResponsiveItem")}
                onClick={() => setShowNavResponsive(false)}
              >
                Blog
              </div>
              <div
                className={cx("header__navResponsiveItem")}
                onClick={() => setShowNavResponsive(false)}
              >
                Collections
              </div>
              <div
                className={cx("header__navResponsiveItem")}
                onClick={() => setShowNavResponsive(false)}
              >
                About us
              </div>
              <div
                className={cx("header__navResponsiveItem")}
                onClick={() => setShowNavResponsive(false)}
              >
                Contact
              </div>
            </div>
          </div>
        )}

        {showCategoriesResponsive && (
          <div className={cx("header__categoriesResponsive")}>
            <div
              className={cx("header__categoriesOverlay")}
              onClick={() => setShowCategoriesResponsive(false)}
            ></div>
            <div className={cx("header__categoriesResponsiveContainer")}>
              <i
                className="fa-solid fa-xmark"
                onClick={handleOnClickCloseNavBtn}
              ></i>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.chair} alt="img" />
                <p>Chairs</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.beds} alt="img" />
                <p>Beds</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.lamp} alt="img" />
                <p>Lamps</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.table} alt="img" />
                <p>Tables</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.armchair} alt="img" />
                <p>ArmChairs</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.cabines} alt="img" />
                <p>Cabinets</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.sofas} alt="img" />
                <p>Sofas</p>
              </div>

              <div
                className={cx("header__categoriesResponsiveItem")}
                onClick={() => setShowCategoriesResponsive(false)}
              >
                <img src={images.star} alt="img" />
                <p className={cx("active")}>Sales</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
