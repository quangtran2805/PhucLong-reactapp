import React from "react";
import "./Information.scss";

import bannerHome from "../../img/bannertrangchu.jpg";
import tuyenDung from "../../img/tuyendung1.jpg";

function Information(props) {
  return (
    <section className="information">
      <div className="information__intro information__intro-top">
        <div className="information__image" data-aos="zoom-in" data-aos-delay='500'>
          <img src={bannerHome} alt="" className="information__image-banner" />
        </div>
        <div className="information__item" data-aos="fade-up" data-aos-delay='1200'>
          <h1 className="information__title">
            TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
          </h1>
          <p className="information__desc">
            Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt
            cà phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải
            nghiệm giá trị nhất khi thưởng thức, Phúc Long liên tục là thương
            hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và
            cà phê.{" "}
          </p>
          <p className="information__desc">
            Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng
            khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và
            chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp
            phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày
            càng bay cao, vươn xa.
          </p>
          <button className="btn">XEM THÊM</button>
        </div>
      </div>
      <div className="information__intro information__intro-bottom">
        <div className="information__image" data-aos="zoom-in" data-aos-delay='500'>
          <img
            src={tuyenDung}
            alt=""
            className="information__image-tuyendung"
          />
        </div>
        <div className="information__item" data-aos="fade-up" data-aos-delay='1200'>
          <h1 className="information__title">
            ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT
          </h1>
          <p className="information__desc">
            Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và
            nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng nhau
            xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với mong
            muốn được thử thách bản thân trong ngành dịch vụ năng động và sáng
            tạo.
          </p>

          <button className="btn">GIA NHẬP ĐỘI NGŨ PHÚC LONG</button>
        </div>
      </div>
    </section>
  );
}

export default Information;
