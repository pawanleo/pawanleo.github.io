import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Pawan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer </div>
              <div className="i-title-item">Node Developer</div>
              <div className="i-title-item">MERN STACK DEV</div>
              <div className="i-title-item">HTML/CSS</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customer of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.{" "}
          </p>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src="" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
