import React from "react";
import "./GlobalStyle.scss";

interface Props {
  children: any;
}

const GlobalStyle: React.FC<Props> = ({ children }) => {
  return children;
};

export default GlobalStyle;
