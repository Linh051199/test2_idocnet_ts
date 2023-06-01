import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FilterByPrice.module.scss";
import Slider from "react-slider";
import styled from "styled-components";

const cx = classNames.bind(styles);

const MIN = 100.0;
const MAX = 1999.0;

interface IProps {
  setShowFilterOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFilterNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterByPrice: React.FC<IProps> = ({
  setShowFilterOverlay,
  setShowFilterNav,
}) => {
  const [values, setValues] = useState([MIN, MAX]);
  const [showResetBtn, setShowResetBtn] = useState(false);

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props: any) =>
      props.index === 2
        ? "#c4c2cf"
        : props.index === 1
        ? "#433679"
        : "#c4c2cf"};
    border-radius: 999px;
  `;

  const Track = (props: any, state: any) => (
    <StyledTrack {...props} index={state.index} />
  );

  const handleOnChange = (e: any) => {
    setValues(e);
    setShowResetBtn(true);
  };

  const handleOnClickResetBtn = () => {
    setShowFilterOverlay(false);
    setShowFilterNav(false);
  };
  return (
    <div className={cx("filterByPrice__wrapper")}>
      <div className={cx("filterByPrice__title")}>Filter by price</div>
      <Slider
        className={cx("filterPrice__slider")}
        onChange={handleOnChange}
        value={values}
        min={MIN}
        max={MAX}
        renderTrack={Track}
      />
      <div className={cx("filterPrice__values")}>
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
      {showResetBtn && (
        <div className={cx("filterByPrice__resetBtn")}>
          <span onClick={handleOnClickResetBtn}>Reset</span>
        </div>
      )}
    </div>
  );
};

export default FilterByPrice;
