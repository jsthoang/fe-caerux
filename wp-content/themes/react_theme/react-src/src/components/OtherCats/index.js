import React from "react";

import "./OtherCats.scss"

function OtherCats() {
    return(
        <div className="other_cats">
            <h3>CATEGORY</h3>
            <ul>
                <li className="cats_web">
                    <a href="#">Web Develop</a>
                </li>
                <li className="cats_mark">
                    <a href="#">Web Marketing</a>
                </li>
                <li className="cats_landing">
                    <a href="#">LandingPage</a>
                </li>
                <li className="cats_hack">
                    <a href="#">Growth hack</a>
                </li>
                <li className="cats_seo">
                    <a href="#">Seo</a>
                </li>
                <li className="cats_appli">
                    <a href="#">Application</a>
                </li>
            </ul>
        </div>
    )
}

export default OtherCats;