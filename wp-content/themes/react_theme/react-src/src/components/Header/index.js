import React, { useState } from "react";
import { Logo } from "../../assets";
import ItemMenu from "./ItemMenu";
import "./Header.scss";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <div className={isActive ? "header_top open" : "header_top"}>
        <div className="logo fadein_animation">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="nav_main_top">
          <div id="nav_toggle" onClick={handleClick}>
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
            <ItemMenu />
          </nav>
          <div id="nav_bg"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
