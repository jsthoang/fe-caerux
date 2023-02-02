import React from "react";
import { Avatar } from "../../assets";

const title = [
  {
    title: "Services",
    url: "/services",
    img: Avatar,
    submenu: [
      {
        title: "web design",
        url: "/",
      },
      {
        title: "web development",
        url: "/",
      },
      {
        title: "SEO",
        url: "/",
      },
    ],
  },
  {
    title: "Services",
    url: "/services",
    img: Avatar,
    submenu: [
      {
        title: "web design",
        url: "/",
      },
      {
        title: "web development",
        url: "/",
      },
      {
        title: "SEO",
        url: "/",
      },
      {
        title: "SEO1",
        url: "/",
      },
      {
        title: "SEO2",
        url: "/",
      },
    ],
  },
  {
    title: "Services",
    url: "/services",
    img: Avatar,
    submenu: [
      {
        title: "web design",
        url: "/",
      },
      {
        title: "web development",
        url: "/",
      },
      {
        title: "SEO",
        url: "/",
      },
      {
        title: "SEO1",
        url: "/",
      },
      {
        title: "SEO2",
        url: "/",
      },
    ],
  },
];
function ItemMenu() {
  return (
    <ul className="list_menu">
      <li className="menu_search">
        <h4>Search</h4>
        <div class="search">
          <input type="text" class="search_input" />
          <button class="search_button">
            <svg class="search_icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>
      </li>
      {title.map((title, index) => (
        <li className="item_menu" key={index}>
          <div className="thumb">
            <img src={title.img} />
          </div>
          <ul>
            <h4>{title.title}</h4>
            {title.submenu.map((submenu, index) => (
              <li className="item_submenu" key={index}>
                <a href={submenu.url}>{submenu.title}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ItemMenu;
