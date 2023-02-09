
import React from "react";

import "./Pagenation.scss";

function Pagenation() {
    return(
        <ul className="pagenation">
            <li className="pagenation_prev">
                <a href="#">
                    <i className="arrow_next"></i>
                </a>
            </li>
            <li className="active"><span>1</span></li>
            <li>
                <a href="#"><span>2</span>
                </a>
            </li>
            <li className="pagenation_next">
                <a href="#">
                    <i className="arrow_next"></i>
                </a>
            </li>
        </ul>
    )
}

export default Pagenation;