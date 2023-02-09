import React from "react";

import CategoryPost from "../../components/CategoryPost";
import "./Category.scss";
import OtherCats from "../../components/OtherCats";
import Pagenation from "../../components/Pagenation";

function Category() {
  return (
    <div className="category">
      <div className="wrapper">
        <div className="banner">
          <div className="content_banner">
            <p>FRONTEND</p>
          </div>
        </div>
        <ul className="list_category">
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
          <li><CategoryPost/></li>
        </ul>
        <Pagenation/>
        <OtherCats/>
      </div>
    </div>
  )
}

export default Category;
