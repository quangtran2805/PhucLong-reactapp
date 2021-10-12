import React, { useState } from "react";
import "./Footer.scss";

import THONGBAO from "../../img/dathongbao.png";

function Footer(props) {
  const [valueForm, setValueForm] = useState("");
  const [err, setErr] = useState("");

  const HandlerValueForm = (e) => {
    setValueForm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (valueForm === "") {
      setErr("loi");
    } else {
      setErr("");
    }

    setValueForm("");
  };

  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__address">
          <p>
            <span>Trụ sở chính:</span> Công ty CP Phúc Long Heritage - ĐKKD:
            0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
          </p>
          <p>
            <span>Nhà máy:</span> D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước
            III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
          </p>
          <p>
            <span>Địa chỉ:</span> 42/24 - 42/26 Đường 643 Tạ Quang Bửu, phường
            4, quận 8, Hồ Chí Minh Điện thoại: 028 6263 0377 - 6263 0378
          </p>
          <p>
            <span>Fax:</span> (028) 6263 0379
          </p>
          <p>
            <span>Email:</span> Sales@phuclong.com.vn Info@phuclong.com.vn
          </p>
        </div>
        <div className="footer__info">
          <h3>Đăng ký nhận tin khuyến mãi</h3>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Nhập địa chỉ email"
              value={valueForm}
              onChange={HandlerValueForm}
            />
            <button type="submit">GỬI</button>
            <br />
            <p>{err}</p>
          </form>
        </div>
        <div className="footer__language">
          <img src={THONGBAO} alt="thong bao" />
        </div>
      </div>
      <div className="copyright">© 2017 Bản quyền Phuc Long Co., Ltd</div>
    </React.Fragment>
  );
}

export default Footer;
