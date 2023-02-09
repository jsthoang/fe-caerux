import React from "react";
import { imgCss } from "../../assets";

import OtherCats from "../../components/OtherCats";
import User from "../../components/User";
import "./Single.scss";

function Single() {
  return (
    <div className="single_page">
      <div className="banner"></div>
      <div className="main_content">
        <div className="content">
          <div className="top_content">
              <div id="breadcrumbs" className="breadcrumbs">
                  <ul>
                      <li>
                          <a href="#">HOME</a>
                          <i></i>
                      </li>
                      <li>
                          <a href="#">ブログ</a>
                          <i></i>
                      </li>
                      <li>
                          <a href="#">ブログ</a>
                          <i></i>
                      </li>
                      <li>
                          <a href="#">ブログ</a>
                          <i></i>
                      </li>
                  </ul>
              </div>
              <h1 className="tt_post">【CSS】背景色・背景画像をマスター！backgroundの使い方</h1>
              <p className="tlt_category">
                  <span className="tlt_category_small">frontend </span>
                  <span className="tlt_category_lage">frontend </span>
              </p>
          </div>
          <div className="main_thumb">
              <div className="thumb">
                  <img src={imgCss} alt="main_image"/>
              </div>
          </div>
          <div className="txt_desp">
              <p>CSSで背景色・背景画像を設定するbackgroundプロパティについて解説していきたいと思います。</p>
              <p>CSSで背景色・背景画像を設定するbackgroundプロパティについて解説していきたいと思います。</p>
              <p>CSSで背景色・背景画像を設定するbackgroundプロパティについて解説していきたいと思います。</p>
              <p>CSSで背景色・背景画像を設定するbackgroundプロパティについて解説していきたいと思います。</p>
              <h2>CSSのbackgroundプロパティとは</h2>
              <h3>backgroundプロパティの種類</h3>
          </div>
        </div>
        <User/>
      </div>
      <OtherCats/>
    </div>
  );
}

export default Single;
