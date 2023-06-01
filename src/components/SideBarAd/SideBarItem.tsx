import React from "react";
import classNames from "classnames/bind";

import styles from "./SideBarAd.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  src: string;
  content: string;
}

const SideBarAdItem: React.FC<IProps> = ({ src, content }) => {
  return (
    <div className={cx("sideBarAdItemContainer")}>
      <img src={src} alt="img" />
      <div className={cx("sideBarAdItemContent")}>{content}</div>
    </div>
  );
};

export default SideBarAdItem;
