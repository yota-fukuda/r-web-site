import React from "react";
import "../App.css";
import "./HeroSection.css";
import video from "../videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>福田陽太のポートフォリオ</h1>
      <p>Reactを用いて作成しました。</p>
    </div>
  );
}

export default HeroSection;
