import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("container")}>
        <div className={cx("footer__separate")}>
          <img src={images.footerLogo} alt="img" />
        </div>
        <div className={cx("footer__body")}>
          <div className={cx("footer__contact")}>
            <div className={cx("footer__contactTitle")}>
              Spaces that improve your quality of life - Request an estimate
            </div>
            <div className={cx("footer__contactInfo")}>
              <div className={cx("footer__contactInfoItem")}>
                <p>Phone</p>
                <a href="/#">+61 (0) 3 8376 6284</a>
              </div>
              <div className={cx("footer__contactInfoItem")}>
                <p>Mail</p>
                <a href="/#">noreply@envato.com</a>
              </div>
            </div>
          </div>
          <div className={cx("footer__infoList")}>
            <div className={cx("footer__info")}>
              <a href="/#">- shop</a>
              <a href="/#">- projects</a>
              <a href="/#">- faq</a>
              <a href="/#">- services</a>
              <a href="/#">- about us</a>
              <a href="/#">- contact</a>
            </div>
            <div className={cx("footer__info")}>
              <a href="/#">- chairs</a>
              <a href="/#">- beds</a>
              <a href="/#">- table</a>
              <a href="/#">- sofas</a>
            </div>
          </div>
        </div>
        <div className={cx("footer__author")}>
          <div className={cx("footer__authorLink")}>
            <div>
              © 2023 Betheme by <a href="/#">Muffin group</a> | All Rights
              Reserved | Powered by
              <a href="/#"> WordPress</a>
            </div>
          </div>
          <div className={cx("footer__authorIcon")}>
            <img src={images.footerPayPal} alt="img" />
            <img src={images.footerVisa} alt="img" />
            <img src={images.footerMastercard} alt="img" />
            <img src={images.footerMaestro} alt="img" />
            <img src={images.footerStripe} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
