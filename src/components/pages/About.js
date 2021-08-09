import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_wrap">
        <div className="about">
          <h1 className="about_title">自己紹介</h1>
          <dl className="about_list">
            <dt>名前</dt>
            <dd>
              <p>福田陽太</p>
            </dd>
          </dl>
          <dl className="about_list">
            <dt>現職</dt>
            <dd>
              <p>SIer：システム開発部所属</p>
            </dd>
          </dl>
          <dl className="about_list">
            <dt>主使用言語</dt>
            <dd>
              <p>C#, Javascript</p>
            </dd>
          </dl>
        </div>

        <div className="about">
          <h1 className="about_title">経歴</h1>
          <dl className="about_list">
            <dt>学歴</dt>
            <dd>
              <p>岐阜高専：電子制御工学科卒業</p>
            </dd>
          </dl>
          <dl className="about_list">
            <dt>職歴</dt>
            <dd>
              <p>営業代理店業務：3年</p>
            </dd>
          </dl>
          <dl className="about_list">
            <dt>職歴</dt>
            <dd>
              <p>現職：1年未満</p>
            </dd>
          </dl>
        </div>

        <p className="about_text">
          2020年7月から独学でJavascript等を学び始め、
          <br />
          2021年3月から正社員として未経験からシステム開発部に所属
          <br />
          Javascriptができるからと言うことで採用に至ったが、
          <br />
          現在はC#の案件にも着手している。
        </p>
      </div>
    </>
  );
};

export default About;
