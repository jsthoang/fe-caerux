import React from "react";

import { Avatar, imgCss } from "../../assets";
import "./CategoryPost.scss";

function CategoryPost() {
    return(
        <a className="item" href="#">
            <div className="item_content">
                <div className="thumb">
                    <img src={imgCss} alt="avatar" />
                </div>
                <div className="txt_desp">
                    <div className="author_">
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="name">Vu Hoat</div>
                    <span className="date_">2020.2.23</span>
                    <h3>【CSS】vw、vh、vmin、vmaxとは？基本的な使い方</h3>
                </div>
            </div>
        </a>
    )
}

export default CategoryPost;