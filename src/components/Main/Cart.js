import React from "react";
import "./Cart.scss";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart__info">
        <ul className="cart__heading">
          <li>Sản phẩm</li>
          <li>Giá</li>
          <li>Số lượng</li>
          <li>Tổng tiền</li>
        </ul>
        <ul className="cart__product">
          {props.listCart.map((item) => (
            <>
              <li className="cart__product-list">
                <img src={item.imgUrl} alt="" />
                <p className="cart__product-name">{item.name}</p>
                <p className="cart__product-price">{item.price} đ</p>
                <p className="cart__product-mount">
                  <button
                    className="cart__product-mount-btn"
                    default={item.quantity === 1}
                    onClick={() => props.onChangeQuantityDe(item.id)}
                  >
                    -
                  </button>
                  <p className="cart__product-mount-number">{item.quantity}</p>
                  <button
                    className="cart__product-mount-btn"
                    default={item.quantity === 5}
                    onClick={() => props.onChangeQuantityIn(item.id)}
                  >
                    +
                  </button>
                </p>
                <p className="cart__product-total">
                  {item.quantity * item.price} đ
                  <i class="fas fa-times" onClick={()=> props.clickRemoveProduct(item.id)}></i>
                </p>
              </li>
            </>
          ))}
        </ul>
        <div className="cart__totalList">
          <h5>
            Tổng tiền: <span>{props.getTotalListCart()} đ</span>
          </h5>
        </div>
        <div className="cart__checkout">
          <button>THANH TOÁN</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
