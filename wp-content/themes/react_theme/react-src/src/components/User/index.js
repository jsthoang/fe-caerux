import React from "react";

import { Avatar } from "../../assets";
import "./User.scss";

function User() {
    return(
        <div className="user_info">
            <div className="author_top">
                <div className="author_img">
                    <img src = {Avatar} alt="avatar"/>
                </div>
                <div className="author_tlt">AUTHOR</div>
                <div className="author_name">VuHoat</div>
            </div>
            <div className="date_top">2020/09/11</div>
            <div className="category_top">
                <ul>
                    <li>
                        <a href="#">Category</a>
                    </li>
                </ul>
            </div>
            <div className="tag_top">
                <a href="#">CSS</a>
                <a href="#">JQUERY</a>
                <a href="#">WORDPRESS</a>
            </div>
            <div className="category_content util_pc">
                <h3>CATEGORY</h3>
                <ul>
                    <li className="cats_web">
                        <a href="#">
                            Web production
                        </a>
                    </li>
                    <li className="cats_mark">
                        <a href="#">
                            Web marketing
                        </a>
                    </li>
                    <li className="cats_landing">
                        <a href="#">
                            Landing page
                        </a>
                    </li>
                    <li className="cats_appli">
                        <a href="#">
                            Application
                        </a>
                    </li>
                    <li className="cats_hack">
                        <a href="#">
                            Growth Hack
                        </a>
                    </li>
                    <li className="cats_seo">
                        <a href="#">
                            SEO
                        </a>
                    </li>
                </ul>
            </div>
        </div>
 
    )
}

export default User;

