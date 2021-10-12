import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Product(props) {
  const [isValue, setIsValue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // const HandlerChangeName = (value) => {
  //   return props.onChangeName(value)
  // }

  const handleMoreProduct = () => {
    setIsValue(!isValue);
  };

  return (
    <>
      <div className="main">
        <form className="main__filter" onSubmit={onSubmit}>
          <div className="main__filter-product">
            <label htmlFor="">Nhóm sản phẩm</label>
            <select onChange={props.onChangeName}>
              <option value="all">Chọn nhóm</option>
              <option value="trà">Trà</option>
              <option value="cà phê">Coffee</option>
            </select>
          </div>
          <div className="main__filter-price">
            <label htmlFor="">Theo giá</label>
            <select onChange={props.onSortPrice}>
              <option value="all">Không lựa chọn</option>
              <option value="1">Từ thấp tới cao</option>
              <option value="2">Từ cao tới thấp</option>
            </select>
          </div>
          <div className="main__filter-search">
            <label htmlFor="">Tìm kiếm</label>
            <input
              type="text"
              placeholder="nhập tên sản phẩm"
              onChange={props.onChangeSearch}
            />
            {/* <button type="submit">Search</button> */}
          </div>
        </form>
        <div className="main__product">
          <ul className="main__product-list">
            {props.productList.slice(0, 8).map((item) => (
              <li className="main__product-item" key={item.id}>
                <img className="main__product-img" src={item.imgUrl} alt="" />
                <h3 className="main__product-title">{item.name}</h3>
                <p className="main__product-desc">{item.desc}</p>
                <p className="main__product-price">{item.price} đ</p>
                <button
                  className="main__product-btn"
                  onClick={() => props.clickProduct(item.id)}
                >
                  {item.btn}
                </button>
              </li>
            ))}
            {isValue &&
              props.productList.slice(8).map((item) => (
                <li className="main__product-item" key={item.id}>
                  <img className="main__product-img" src={item.imgUrl} alt="" />
                  <h3 className="main__product-title">{item.name}</h3>
                  <p className="main__product-desc">{item.desc}</p>
                  <p className="main__product-price">{item.price} đ</p>
                  <button
                    className="main__product-btn"
                    onClick={() => props.clickProduct(item.id)}
                  >
                    {item.btn}
                  </button>
                </li>
              ))}
          </ul>
          <div
            className={isValue ? "" : "main__product-btnMore"}
            onClick={handleMoreProduct}
          >
            {isValue ? "" : "XEM TẤT CẢ"}
          </div>
        </div>
      </div>
      <div className="main__cart">
        <div className="main__cart-icon">
          <i class="fal fa-shopping-cart"></i>
          <span className="main__cart-zero">{props.totalQuantity()}</span>
        </div>
        <h5 className="main__cart-title">
          <Link to="/cart">THANH TOÁN</Link>
        </h5>
        <p className="main__cart-total">{props.getTotalListCart()} đ</p>
      </div>
    </>
  );
}

export default Product;
