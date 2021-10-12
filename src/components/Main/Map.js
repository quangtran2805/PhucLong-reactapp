import React from "react";
import "./Map.scss";

function Map(props) {
  return (
    <div className="map">
      <div className="map__info">
        <h1 className="map__title">HỆ THỐNG CỬA HÀNG</h1>
        <select
          className="map__select map__select-city"
          onChange={props.onChangCity}
        >
          <option value="all">Tỉnh / Thành Phố</option>
          <option value="Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
          <option value="Bắc Giang">Tỉnh Bắc Giang</option>
          <option value="Khánh Hòa">Tỉnh Khánh Hòa</option>
          <option value="Đồng Nai">Tỉnh Đồng Nai</option>
          <option value="Cần Thơ">Thành Phố Cần Thơ</option>
        </select>
        <select
          className="map__select map__select-district"
          onChange={props.onChangDistrict}
        >
          <option value="all">Quận</option>
          <option value="Quận 1">Quận 1</option>
          <option value="Quận 2">Quận 2</option>
          <option value="Quận 3">Quận 3</option>
          <option value="Quận 4">Quận 4</option>
          <option value="Bắc Giang">Thành phố Bắc Giang</option>
        </select>
        <p className="map__desc">Địa chỉ cửa hàng</p>

        <ul className="map__list">
          {props.mapList.length > 0 ? (
            props.mapList.map((item) => (
              <li key={item.id} className="map__list-item">
                <i className="fas fa-store-alt"></i>
                <p>{item.address}</p>
                <div className="map__list-btn">
                  <a href="/">Chỉ đường</a>
                </div>
              </li>
            ))
          ) : (
            <p className="empty"> không có cửa hàng</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Map;
