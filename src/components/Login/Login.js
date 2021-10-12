import React from "react";
import "./Login.scss";

function Login(props) {
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">ĐĂNG NHẬP VÀO THÀNH VIÊN PHÚC LONG</h1>
        <form className="login__form">
          <label htmlFor="" className="login__label">
            Email / Số thẻ <span>(*)</span>
          </label>
          <input
            type="text"
            placeholder="Nhập Email / Số thẻ"
            className="login__input"
            required
          />
          <label htmlFor="" className="login__label">
            Mật khẩu <span>(*)</span>
          </label>
          <input
            type="text"
            placeholder="Nhập mật khẩu"
            className="login__input"
            required
          />
          <p className="login__forget">
            Quên mật khẩu? bấm <a href="/">vào đây</a>
          </p>
          <button type="submit" className="login__btn">ĐĂNG NHẬP</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
