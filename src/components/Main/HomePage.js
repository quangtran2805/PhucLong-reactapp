import React from "react";
import "./HomePage.scss";

import Slide from "./Slider";
import Information from "./Information";
import Map from "./Map";

function HomePage(props) {
  return (
    <div className="main__page">
      <Slide />
      <Information />
      <Map
        onChangCity={props.onChangCity}
        onChangDistrict={props.onChangDistrict}
        mapList={props.mapList}
      />
    </div>
  );
}

export default HomePage;
