import React from "react";

import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderNav from "./HeaderNav";

const Header: React.FC = () => {
  return (
    <div className="wrapper grid">
      <HeaderTop />
      <HeaderBottom />
      <HeaderNav />
    </div>
  );
};

export default Header;
