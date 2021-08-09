import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>福田陽太のポートフォリオ</h1>
      <p>Reactを用いて作成しました。</p>
    </div>
  );
}

export default HeroSection;
