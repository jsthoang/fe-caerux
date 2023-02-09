import React, { useState } from "react";
import { Logo } from "../../assets";
import ItemMenu from "./ItemMenu";
import "./Header.scss";
function Header({ setIsActive }) {
  const [Open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((current) => !current);
    setIsActive(Open);
  };
  return (
    <header className="header">
      <div className={Open ? "header_top active" : "header_top"}>
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
