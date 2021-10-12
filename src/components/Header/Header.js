import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import Delivery from "../../img/delivery.png";
import Logo from "../../img/logo.png";

function Header(props) {
  const [popup, setPopup] = useState(false);
  const [bar, setBar] = useState(false);

  const handleBar = (e) => {
    e.preventDefault();
    setBar(!bar);
  };

  const handlePopup = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__delivery">
          <a href="tel:18006779">
            <img src={Delivery} alt="delivery" />
          </a>
        </div>
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="logo" style={{ maxWidth: "70px" }} />
          </Link>
        </div>

        <i
          className={`fas ${bar ? "fa-times" : "fa-bars"} header__bar`}
          onClick={() => setBar(!bar)}
        ></i>
        <div className="header__cart">
          <div className="header__cart-login">
            <Link to="/login">Đăng nhập</Link>
          </div>
          <div className="header__cart-language">
            <a href="/" className="header__cart-language-active">
              VN
            </a>{" "}
            | <a href="/">EN</a>
          </div>
          <div className="btn" onClick={handlePopup}>
            <a href="/">Giỏ hàng</a>
            <i class="fal fa-shopping-cart header__cart-icon"></i>
            <span className="header__cart-zero">{props.totalQuantity()}</span>
          </div>
          {popup && (
            <>
              <div className="popup" onClick={handlePopup}></div>
              <div className="header__cart-children">
                <div className="header__cart-title">
                  <h5>Giỏ hàng của bạn</h5>
                  <a href="/cart" className="header__cart-title-btn btn">
                    Xem chi tiết
                  </a>
                </div>
                <ul className="header__cart-list">
                  {props.listCart.map((item) => (
                    <li key={item.id} className="header__cart-item">
                      <img src={item.imgUrl} alt="" />
                      <div className="header__cart-item-price">
                        <h3>{item.name}</h3>
                        <p>
                          {item.quantity} x {item.price}
                        </p>
                      </div>
                      <button onClick={() => props.clickRemoveProduct(item.id)}>
                        x
                      </button>
                    </li>
                  ))}
                </ul>
                <h2 className="header__cart-total">
                  Tổng tiền: <span>{props.getTotalListCart()} đ</span>
                </h2>
                <a href="/cart" className="header__cart-btnTotal">
                  THANH TOÁN
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {bar && <div className="header__opacity" onClick={handleBar}></div>}
      <nav className="header__menu">
        <ul className={`header__menu-list ${bar ? "header__showMenu" : ""}`}>
          <li className="header__menu-item">
            <Link to="/" className="header__menu-link header__menu-link-active">
              TRANG CHỦ
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/product" className="header__menu-link">
              CÀ PHÊ
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/product" className="header__menu-link">
              TRÀ
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/product" className="header__menu-link">
              THỨC UỐNG
              <i className="far fa-chevron-down header__menu-link-icon"></i>
            </Link>
            <ul className="header__menu-children-list">
              <li className="header__menu-children-item">
                <Link to="/product" className="header__menu-children-link">
                  Thức uống
                </Link>
              </li>
              <li className="header__menu-children-item">
                <Link to="/product" className="header__menu-children-link">
                  Bánh tráng miệng
                </Link>
              </li>
              <li className="header__menu-children-item">
                <Link to="/product" className="header__menu-children-link">
                  Đồ ăn mặn
                </Link>
              </li>
            </ul>
          </li>
          <li className="header__menu-item">
            <Link to="/product" className="header__menu-link">
              SẢN PHẨM
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/product"Link to="/product" className="header__menu-link">
              KHUYẾN MÃI
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/product" className="header__menu-link">
              VỀ CHÚNG TÔI
            </Link>
          </li>
          <li className="header__menu-item header__menu-login">
            <Link to="/login" className="header__menu-link ">
              ĐĂNG NHẬP
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/product" className="header__menu-link">
              <i class="fal fa-search"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
