import React from "react";
import {Link} from 'react-router-dom';

import { route } from "../../routes/route"; 
import { Logo } from "../../assets";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <div className ="wrapper">
          <div className ="logo_footer">
            <a className ="logo_img" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <p>CoderVn khởi nguồn kiến thức mở</p>
          </div>
          <ul className ="nav_footer">
            <li>
              <a href="#">Web Develop</a>
            </li>
            <li>
              <a href="#">Web Marketing</a>
            </li>
            <li>
              <a href="#">LandingPage</a>
            </li>
            <li>
              <a href="#">Growth hack</a>
            </li>
            <li>
              <a href="#">Seo</a>
            </li>
            <li>
              <a href="#">Application</a>
            </li>
          </ul>
          <Link to = {route.contact} className ="contact_footer">
            <span>CONTACT US</span>
              Liên hệ chúng tôi
            <span className ="arrow_contact">
              <i className ="arrow_next"></i>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
