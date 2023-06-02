import React from "react";

import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderNav from "./HeaderNav";

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

const Header: React.FC<IProps> = ({ data }) => {
  return (
    <div className="wrapper grid">
      <HeaderTop />
      <HeaderBottom data={data} />
      <HeaderNav />
    </div>
  );
};

export default Header;
