import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import { Rate } from "antd";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import styles from "./Product.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderFixed from "../../components/Header/HeaderFixed";
import images from "../../assets/images";
import ShopItem from "../Shop/ShopItem";
import SideBarAd from "../../components/SideBarAd";
import { CartContext } from "../../context/CartContext";
import { actions } from "../../context";
import storage from "../../util/storage";

const cx = classNames.bind(styles);

const Product: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [numberBook, setNumberBook] = useState<number>(1);
  const [colorWhite, setColorWhite] = useState<boolean>(false);
  const [colorGray, setColorGray] = useState<boolean>(false);
  const [colorWood, setColorWood] = useState<boolean>(false);
  const [btnBookActive, setBtnBookActive] = useState<boolean>(false);
  const [colorCurr, setColorCurr] = useState("");

  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const location = useLocation();
  const data = location.state;
  const cartProduct = { ...data, number: numberBook, color: colorCurr };

  const handleOnClickSubtract = () => {
    if (numberBook > 1) {
      setNumberBook(numberBook - 1);
    }
  };

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

  const handleOnClickWhite = () => {
    setColorCurr("white");
    setColorWhite(true);
    setColorGray(false);
    setColorWood(false);
    setBtnBookActive(true);
  };

  const handleOnClickGray = () => {
    setColorCurr("Gray");

    setColorWhite(false);
    setColorGray(true);
    setColorWood(false);
    setBtnBookActive(true);
  };

  const handleOnClickWood = () => {
    setColorCurr("Wood");

    setColorWhite(false);
    setColorGray(false);
    setColorWood(true);
    setBtnBookActive(true);
  };

  const handleOnClickBuy = () => {
    dispatch(actions.addCart(cartProduct));
  };

  return (
    <div className={"wrapper"}>
      {show && <HeaderFixed />}
      <SideBarAd />
      <Header />
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("product__info")}>
          <div className={cx("product__decs")}>
            <div className={cx("product__name")}>{data.name}</div>
            <div className={cx("product__rate")}>
              <Rate
                disabled={true}
                className={cx("shopItem__rateStar")}
                defaultValue={data.star}
              />
              <p>(1 customer reivew)</p>
            </div>
            <div className={cx("product__price")}>
              <div className={cx("product__priceHidden")}>
                {data.priceHidden}
              </div>
              <div className={cx("product__priceShow")}>{data.price}</div>
            </div>
            <div className={cx("product__warranty")}>
              <p>Warranty</p>
              <Tippy content="5 year's">
                <div>
                  <div className={cx("product__warrentyNumber")}>5</div>
                  <span>5 year's warranty</span>
                </div>
              </Tippy>
            </div>
            <div className={cx("product__separate")}></div>
            <div className={cx("product__color")}>
              <p>Color</p>
              <Tippy content="White">
                <div
                  className={
                    colorWhite
                      ? cx("product__colorItem", "white", "activeColor")
                      : cx("product__colorItem", "white")
                  }
                  onClick={handleOnClickWhite}
                ></div>
              </Tippy>
              <Tippy content="Gray">
                <div
                  className={
                    colorGray
                      ? cx("product__colorItem", "gray", "activeColor")
                      : cx("product__colorItem", "gray")
                  }
                  onClick={handleOnClickGray}
                ></div>
              </Tippy>
              <Tippy content="Wood">
                <div
                  className={
                    colorWood
                      ? cx("product__colorItem", "wood", "activeColor")
                      : cx("product__colorItem", "wood")
                  }
                  onClick={handleOnClickWood}
                ></div>
              </Tippy>
            </div>

            <div className={cx("product__book")}>
              <div className={cx("product__number")}>
                <span onClick={handleOnClickSubtract}>-</span>
                <p>{numberBook}</p>
                <span onClick={() => setNumberBook(numberBook + 1)}>+</span>
              </div>
              {btnBookActive ? (
                <div
                  className={cx("product__btnActive")}
                  onClick={handleOnClickBuy}
                >
                  buy now
                </div>
              ) : (
                <div className={cx("product__btn")}>buy now</div>
              )}
            </div>

            <div className={cx("product__contact")}>
              <div className={cx("product__contactIcon")}>
                <img src={images.freeShip} alt="img" />
              </div>
              <div className={cx("product__contactDecs")}>
                <p>Free shipping</p>
                <span>Over 500$</span>
              </div>
            </div>
            <div className={cx("product__contact")}>
              <div className={cx("product__contactIcon")}>
                <img src={images.call} alt="img" />
              </div>
              <div className={cx("product__contactDecs", "hoverContact")}>
                <p>Chat online</p>
                <span>Contact with our agent</span>
              </div>
            </div>
          </div>
          <div className={cx("product__list")}>
            <div
              className={cx("product__image")}
              onClick={() => setShowImage(true)}
            >
              <img src={data.src} alt="img" />
            </div>
            <div className={cx("product__decsMedia")}>
              <div className={cx("product__name")}>{data.name}</div>
              <div className={cx("product__rate")}>
                <Rate
                  disabled={true}
                  className={cx("shopItem__rateStar")}
                  defaultValue={data.star}
                />
                <p>(1 customer reivew)</p>
              </div>
              <div className={cx("product__price")}>
                <div className={cx("product__priceHidden")}>
                  {data.priceHidden}
                </div>
                <div className={cx("product__priceShow")}>{data.price}</div>
              </div>
              <div className={cx("product__warranty")}>
                <p>Warranty</p>
                <Tippy content="5 year's">
                  <div>
                    <div className={cx("product__warrentyNumber")}>5</div>
                    <span>5 year's warranty</span>
                  </div>
                </Tippy>
              </div>
              <div className={cx("product__separate")}></div>
              <div className={cx("product__color")}>
                <p>Color</p>
                <Tippy content="White">
                  <div
                    className={
                      colorWhite
                        ? cx("product__colorItem", "white", "activeColor")
                        : cx("product__colorItem", "white")
                    }
                    onClick={handleOnClickWhite}
                  ></div>
                </Tippy>
                <Tippy content="Gray">
                  <div
                    className={
                      colorGray
                        ? cx("product__colorItem", "gray", "activeColor")
                        : cx("product__colorItem", "gray")
                    }
                    onClick={handleOnClickGray}
                  ></div>
                </Tippy>
                <Tippy content="Wood">
                  <div
                    className={
                      colorWood
                        ? cx("product__colorItem", "wood", "activeColor")
                        : cx("product__colorItem", "wood")
                    }
                    onClick={handleOnClickWood}
                  ></div>
                </Tippy>
              </div>

              <div className={cx("product__book")}>
                <div className={cx("product__number")}>
                  <span onClick={handleOnClickSubtract}>-</span>
                  <p>{numberBook}</p>
                  <span onClick={() => setNumberBook(numberBook + 1)}>+</span>
                </div>
                {btnBookActive ? (
                  <div className={cx("product__btnActive")}>buy now</div>
                ) : (
                  <div className={cx("product__btn")}>buy now</div>
                )}
              </div>

              <div className={cx("product__contact")}>
                <div className={cx("product__contactIcon")}>
                  <img src={images.freeShip} alt="img" />
                </div>
                <div className={cx("product__contactDecs")}>
                  <p>Free shipping</p>
                  <span>Over 500$</span>
                </div>
              </div>
              <div className={cx("product__contact")}>
                <div className={cx("product__contactIcon")}>
                  <img src={images.call} alt="img" />
                </div>
                <div className={cx("product__contactDecs", "hoverContact")}>
                  <p>Chat online</p>
                  <span>Contact with our agent</span>
                </div>
              </div>
            </div>
            <div className={cx("product__moreInfo")}>
              <div className={cx("product__moreInfoItem")}>
                <p>Ut et montes mauris ornare</p>
                <span>
                  Ut et montes mauris ornare. Sed enim dignissim convallis
                  malesuada dapibus. Aliquet placerat eget convallis arcu
                  pharetra vitae tempor sit. Neque duis non pellentesque enim
                  tellus magna facilisis neque donec. Pellentesque tempor
                  scelerisque tempus nascetur cursus ac pellentesque. Felis
                  bibendum id duis odio. Nisl id blandit purus id sed odio
                  nullam scelerisque dolor. Commodo imperdiet ultricies ipsum ut
                  nunc senectus. Convallis facilisis euismod vel volutpat.
                </span>
                <img
                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-productdetails-pic1.webp"
                  alt="img"
                ></img>
              </div>
              <div className={cx("product__moreInfoItem")}>
                <p>Tempor nunc sed arcu lectus dignissim congue.</p>
                <span>
                  Morbi ut sit iaculis non. Sodales aliquet nulla posuere leo
                  euismod amet. Amet nullam tincidunt imperdiet in tellus congue
                  sed. Eleifend nisl tincidunt porttitor libero facilisis
                  placerat turpis. Nunc nullam dignissim nibh sapien.
                  Ullamcorper quam est nec ipsum suspendisse vulputate
                  ullamcorper adipiscing id. Ultricies varius in viverra ac
                  molestie nibh. Eget nulla purus nisl tempor bibendum. Sed
                  nascetur pretium nibh ullamcorper amet condimentum molestie
                  penatibus in. Sed facilisis at id neque sit pretium platea.
                  Ultrices fermentum consectetur tristique ultrices ac commodo
                  vitae. Lectus et eu massa auctor.
                </span>
                <img
                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic20.webp"
                  alt="img"
                ></img>
              </div>
              <div className={cx("product__moreInfoProduct")}>
                <h3>Additional information</h3>
                <div className={cx("product__moreInfoProductItem")}>
                  <h4>Weight</h4>
                  <span></span>
                  <p>15 kg</p>
                </div>

                <div className={cx("product__moreInfoProductItem")}>
                  <h4>Dimensions</h4>
                  <span></span>
                  <p>120 × 120 × 50 cm</p>
                </div>

                <div className={cx("product__moreInfoProductItem")}>
                  <h4>Warranty</h4>
                  <span></span>
                  <p>5 year's</p>
                </div>

                <div className={cx("product__moreInfoProductItem")}>
                  <h4>Color</h4>
                  <span></span>
                  <p>White, Gray, Wood</p>
                </div>

                <div className={cx("product__moreInfoProductItem")}>
                  <h4>Materials</h4>
                  <span></span>
                  <p>Textile, Velvet, Wood</p>
                </div>

                <div className={cx("product__moreInfoProductItem")}>
                  <h4>Room</h4>
                  <span></span>
                  <p>Living room</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("product__feedBack")}>
          <div className={cx("product__feedBackHeader")}>
            1 review for Cosy RTV sofa
          </div>
          <div className={cx("product__feedBackBody")}>
            <div className={cx("product__feedBackBodyTop")}>
              <div className={cx("product__feedBackBodyTopAuthor")}>
                <img
                  src="https://secure.gravatar.com/avatar/ee62ac86f08fd6ffac18cbf25b07679f?s=120&d=mm&r=g"
                  alt="img"
                />
                <p>Muffingroup</p>
                <span>– February 10, 2023</span>
              </div>
              <Rate
                disabled={true}
                className={cx("product__feedBackBodyTopRate")}
                defaultValue={data.star}
              />
            </div>
            <div className={cx("product__feedBackBodySeparate")}></div>
            <div className={cx("product__feedBackBodyBottom")}>
              <p>Love to watch TV in it</p>
            </div>
          </div>
          <div className={cx("product__feedBackFooter")}>
            <p>Add a review</p>
            <span>
              You must be <a href="/#">logged in</a> to post a review.
            </span>
          </div>
        </div>
        <div className={cx("product__more")}>
          <div className={cx("product__moreHeader")}>
            <span>BE FURNITURE</span>
            <p>RELATED PRODUCTS</p>
          </div>
          <div className={cx("product__moreBody")}>
            <div className={cx("product__moreItem")}>
              <ShopItem
                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic21-800x800.webp"
                name="Puffy sofa Orlando"
                star={4}
                price="$1,670.00"
                priceHidden="$1,599.00"
              />
            </div>
            <div className={cx("product__moreItem")}>
              <ShopItem
                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic19-800x800.webp"
                name="Sleeper sofa Cubic"
                star={4}
                price="$1,299.00"
              />
            </div>
          </div>
        </div>

        {showImage && (
          <div className={cx("showImageContainer")}>
            <i
              className="fa-solid fa-xmark"
              onClick={() => setShowImage(false)}
            ></i>
            <input type="checkbox" id="zoomCheck" hidden />
            <label htmlFor="zoomCheck">
              <img src={data.src} alt="img" />
            </label>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
