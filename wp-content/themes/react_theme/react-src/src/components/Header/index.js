import React from "react";
import { Logo } from "../../assets";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header_top">
        <div className="logo fadein_animation">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="nav_main_top">
          <div id="nav_toggle">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav id="global_nav">
            <div className="nav_logo">
              <a href="./" target="_blank" rel="noopener noreferrer">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <ul className="list_menu">
              <li className="item_menu">
                <a href="#">Web Develop</a>
              </li>
              <li className="item_menu">
                <a href="#">Web Marketing</a>
              </li>
              <li className="item_menu">
                <a href="#">LandingPage</a>
              </li>
              <li className="item_menu">
                <a href="#">Growth hack</a>
              </li>
              <li className="item_menu">
                <a href="#">Seo</a>
              </li>
              <li className="item_menu">
                <a href="#">Application</a>
              </li>
            </ul>
            <div className="item_thumb">
              <a href="#">
                {/* <img src="assets/images/item/sp_btn_contacttop.svg" alt=""> */}
              </a>
            </div>
          </nav>
          <div id="nav_bg"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
