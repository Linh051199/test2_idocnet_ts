import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from "./Shop.module.scss";
import FilterByPrice from "./FilterByPrice";
import ShopItem from "./ShopItem";
import HeaderFixed from "../../components/Header/HeaderFixed";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import SideBarAd from "../../components/SideBarAd";

const cx = classNames.bind(styles);

const Shop: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [show60, setShow60] = useState<boolean>(true);
  const [show120, setShow120] = useState<boolean>(false);
  const [show240, setShow240] = useState<boolean>(false);
  const [show360, setShow360] = useState<boolean>(false);
  const [showFilterOverlay, setShowFilterOverlay] = useState<boolean>(false);
  const [showFilterNav, setShowFilterNav] = useState<boolean>(false);

  const controlHeader = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  const handleShow60 = () => {
    setShow60(true);
    setShow120(false);
    setShow240(false);
    setShow360(false);
  };
  const handleShow120 = () => {
    setShow60(false);
    setShow120(true);
    setShow240(false);
    setShow360(false);
  };
  const handleShow240 = () => {
    setShow60(false);
    setShow120(false);
    setShow240(true);
    setShow360(false);
  };
  const handleShow360 = () => {
    setShow60(false);
    setShow120(false);
    setShow240(false);
    setShow360(true);
  };

  const handleOnClickFilter = () => {
    setShowFilterNav(true);
    setShowFilterOverlay(true);
  };
  const handleOnClickOverlay = () => {
    setShowFilterOverlay(false);
    setShowFilterNav(false);
  };
  return (
    <div className={cx("wrapper")}>
      {show && <HeaderFixed />}
      <SideBarAd />
      <Header />
      <div className={cx("shop__container", "grid", "wide")}>
        <div className={cx("shop__title")}>shop</div>
        <div className={cx("shop__filter")}>
          <div className={cx("shop__filterTitle")}>Showing all 21 results</div>
          <div className={cx("shop__filterContainer")}>
            <div className={cx("shop__filterShow")}>
              <div>Show:</div>
              <p
                className={show60 ? cx("activeShow") : cx("")}
                onClick={handleShow60}
              >
                60
              </p>
              <p
                className={show120 ? cx("activeShow") : cx("")}
                onClick={handleShow120}
              >
                120
              </p>
              <p
                className={show240 ? cx("activeShow") : cx("")}
                onClick={handleShow240}
              >
                240
              </p>
              <p
                className={show360 ? cx("activeShow") : cx("")}
                onClick={handleShow360}
              >
                360
              </p>
            </div>

            <select className={cx("shop__filterSelect")}>
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
            <div
              className={cx("shop__filterNav")}
              onClick={handleOnClickFilter}
            >
              <i className="fa-solid fa-list"></i>
              Filters
              {showFilterNav && (
                <div className={cx("shop__filterNavContainer")}>
                  <div className={cx("shop__filterNavMaterials")}>
                    <p className={cx("shop__filterNavMaterialsTitle")}>
                      Materials
                    </p>
                    <div className={cx("shop__filterNavMaterialsList")}>
                      <Tippy content="Aluminum">
                        <p>Aluminum</p>
                      </Tippy>
                      <Tippy content="Leather">
                        <p>Leather</p>
                      </Tippy>
                      <Tippy content="Textile">
                        <p>Textile</p>
                      </Tippy>
                      <Tippy content="Metal">
                        <p>Metal</p>
                      </Tippy>
                      <Tippy content="Velvet">
                        <p>Velvet</p>
                      </Tippy>
                      <Tippy content="Wood">
                        <p>Wood</p>
                      </Tippy>
                    </div>
                  </div>
                  <div className={cx("shop__filterNavSeparate")}></div>
                  <FilterByPrice
                    setShowFilterOverlay={setShowFilterOverlay}
                    setShowFilterNav={setShowFilterNav}
                  />
                  <div className={cx("shop__filterNavSeparate")}></div>

                  <div className={cx("shop__filterNavRoom")}>
                    <div className={cx("shop__filterNavRoomTitle")}>Room</div>
                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="bedroom" />
                      <label htmlFor="bedroom">Bedroom</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="dinning" />{" "}
                      <label htmlFor="dinning">Dining room</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="kitchen" />{" "}
                      <label htmlFor="kitchen">Kitchen</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="livingRoom" />
                      <label htmlFor="livingRoom"> Living room</label>
                    </div>

                    <div className={cx("shop__filterNavRoomItem")}>
                      <input type="checkbox" id="office" />{" "}
                      <label htmlFor="office">Office</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showFilterOverlay && (
              <div
                className={cx("shop__filterNavOverlay")}
                onClick={handleOnClickOverlay}
              ></div>
            )}
          </div>
        </div>
        <div className={cx("shop__list")}>
          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic3-800x800.webp"
              name="Balcony chair"
              star={4}
              price=" $199.00"
              priceHidden="$250.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic5-800x800.webp"
              name="Bed with wood frame"
              star={4}
              price="$1,250.00"
              priceHidden="$1,389.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic17-800x800.webp"
              name="Bedroom cabinet Orlean"
              star={4}
              price="$799.00"
              priceHidden="$899.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic13-800x800.webp"
              name=" $350.00"
              star={4}
              price=" $350.00"
              priceHidden="$399.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic20-800x800.webp"
              name="Cosy RTV sofa"
              star={4}
              price="$1,600.00"
              priceHidden="$1,300.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic8-800x800.webp"
              name="Desk lamp"
              star={4}
              price="$135.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic12-800x800.webp"
              name="Dining room table"
              star={4}
              price=" $1,200.00"
              priceHidden="$1,399.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-product-pic6-800x800.webp"
              name="Family Bed Oregon"
              star={4}
              price="$1,899.00"
              priceHidden="$1,999.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic4-800x800.webp"
              name="Hanging outdoor bed"
              star={4}
              price="$358.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-product-pic11-800x800.webp"
              name="Kitchen table Oklahoma"
              star={4}
              price="$689.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic9-800x800.webp"
              name="Living room lamp"
              star={4}
              price=" $450.00"
              priceHidden="$599.00"
            />
          </div>

          <div className={cx("shop__item")}>
            <ShopItem
              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic19-800x800.webp"
              name="Sleeper sofa Cubic"
              star={4}
              price="$1,299.00"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
