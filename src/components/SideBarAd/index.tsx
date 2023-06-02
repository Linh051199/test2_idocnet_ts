import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./SideBarAd.module.scss";
import images from "../../assets/images";
import SideBarAdItem from "./SideBarItem";

const cx = classNames.bind(styles);
const SideBarAd = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  const handleShowSidebar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <div className={showSideBar ? cx("wrapper") : cx("wrapper", "show")}>
        <div className={cx("controlWebsite")} onClick={handleShowSidebar}>
          <p>650+</p>
          <span>website</span>
        </div>
        <div className={cx("controlbuyNow")}>
          <img src={images.buy2} alt="img" />
          <span>Buy Now</span>
        </div>
        <div className={cx("header")}>
          <img
            src="https://muffingroup.com/themeforest_images/betheme/demo/assets/header.png"
            alt="img"
          />
        </div>
        <div className={cx("body")}>
          <div className={cx("hiddenBodyList")}>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/theme.jpg"
                content="Default"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/bethemestore2.jpg"
                content="Default store 2"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/bethemestore.jpg"
                content="Default store 2"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/lingerie.jpg"
                content="Lingerie"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/eco4.jpg"
                content="Eco 4"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/furniturestore2.jpg"
                content="Furniture Store 2"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/agency8.jpg"
                content="Agency 8"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/recipes3.jpg"
                content="Recipes 3"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/cosmetics3.jpg"
                content="Cosmetics 3"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/wedding3.jpg"
                content="Weding 3"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/estate4.jpg"
                content="Estate 4"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/burger3.jpg"
                content="Burger 3"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/clothingstore2.jpg"
                content="Clothing Store 2"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/doctor.jpg"
                content="Doctor"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/business6.jpg"
                content="Business 6"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/biker4.jpg"
                content="Biker 4"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/vr.jpg"
                content="Vr"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/furniturestore.jpg"
                content="Furnituresore"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/marketing2.jpg"
                content="Marketing 2"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/carwash3.jpg"
                content="Carwash 3"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/renovate5.jpg"
                content="Renovate 5"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/language4.jpg"
                content="Language 4"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/pregnancy.jpg"
                content="Pregnancy"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/jeweler2.jpg"
                content="Jeweler"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/coaching3.jpg"
                content="Coaching"
              />
            </div>
            <div className={cx("hiddenBodyItem")}>
              <SideBarAdItem
                src="https://muffingroup.com/themeforest_images/betheme/demo/lottie.jpg"
                content="Lottie"
              />
            </div>
          </div>
        </div>
        <div className={cx("footer")}>See all websites</div>
      </div>
    </>
  );
};

export default SideBarAd;
