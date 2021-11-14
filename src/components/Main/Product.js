import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Product(props) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { _page } = props.filter;

  const handlePageChange = (newPage) => {
    props.onPageChange(newPage);
  };
  // const HandlerChangeName = (value) => {
  //   return props.onChangeName(value)
  // }

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
            {props.productList.map((item) => (
              <li
                className="main__product-item"
                data-aos="zoom-in"
                key={item.id}
              >
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
          <div className="main__product-prevnext">
            <button
              disabled={_page <= 1}
              onClick={() => handlePageChange(_page - 1)}
            >
              prev
            </button>
            <button
              disabled={_page > 2}
              onClick={() => handlePageChange(_page + 1)}
            >
              next
            </button>
          </div>
        </div>
      </div>
      <div className="main__cart">
        <div className="main__cart-icon">
          <i className="fal fa-shopping-cart"></i>
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
