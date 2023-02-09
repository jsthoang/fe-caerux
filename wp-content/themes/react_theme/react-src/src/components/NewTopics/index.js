import React from "react";
import "./NewTopics.scss";
import { Avatar, imgCss } from "../../assets";

const list_archive = [
  {
    img: imgCss,
    author: Avatar,
    name: "Vu Hoat",
    date: "2020.2.23",
    txt: "【CSS】vw、vh、vmin、vmaxとは？基本的な使い方",
    tag: [
      {
        tag_: "CSS",
        tag2: "CSS",
      },
      {
        tag_: "JQUERY",
        tag2: "CSS",
      },
      {
        tag_: "WEB DEVERLOP",
        tag2: "CSS",
      },
    ],
  },
  {
    img: imgCss,
    author: Avatar,
    name: "Vu Hoat",
    date: "2020.2.23",
    txt: "【CSS】vw、vh、vmin、vmaxとは？基本的な使い方",
    tag: [
      {
        tag_: "CSS",
        tag2: "CSS",
      },
      {
        tag_: "JQUERY",
        tag2: "CSS",
      },
      {
        tag_: "WEB DEVERLOP",
        tag2: "CSS",
      },
    ],
  },
  {
    img: imgCss,
    author: Avatar,
    name: "Vu Hoat",
    date: "2020.2.23",
    txt: "【CSS】vw、vh、vmin、vmaxとは？基本的な使い方",
    tag: [
      {
        tag_: "CSS",
        tag2: "CSS",
      },
      {
        tag_: "JQUERY",
        tag2: "CSS",
      },
      {
        tag_: "WEB DEVERLOP",
        tag2: "CSS",
      },
    ],
  },
  {
    img: imgCss,
    author: Avatar,
    name: "Vu Hoat",
    date: "2020.2.23",
    txt: "【CSS】vw、vh、vmin、vmaxとは？基本的な使い方",
    tag: [
      {
        tag_: "CSS",
        tag2: "CSS",
      },
      {
        tag_: "JQUERY",
        tag2: "CSS",
      },
      {
        tag_: "WEB DEVERLOP",
        tag2: "CSS",
      },
    ],
  },
  {
    img: imgCss,
    author: Avatar,
    name: "Vu Hoat",
    date: "2020.2.23",
    txt: "【CSS】vw、vh、vmin、vmaxとは？基本的な使い方",
    tag: [
      {
        tag_: "CSS",
        tag2: "CSS",
      },
      {
        tag_: "JQUERY",
        tag2: "CSS",
      },
      {
        tag_: "WEB DEVERLOP",
        tag2: "CSS",
      },
    ],
  },
];
function NewTopics() {
  return (
    <section className="NewTopics">
      <h2>NewTopics</h2>
      <p>NewTopics</p>
      <ul className="list_archive">
        {list_archive.map((list_archive, index) => (
          <li className="item" key={index}>
            <a href="#">
              <div className="item_content">
                <div className="thumb">
                  <img src={list_archive.img} alt="" />
                </div>
                <div className="txt_desp">
                  <div className="author_">
                    <img src={list_archive.author} alt="" />
                  </div>
                  <div className="name">{list_archive.name}</div>
                  <span className="date_">{list_archive.date}</span>
                  <h3>{list_archive.txt}</h3>
                </div>
              </div>
            </a>
            <div className="tag_">
              {list_archive.tag.map((tag, index) => (
                <a href="#" rel="tag" key={index}>
                  {tag.tag_}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="btn_category">
        <a href="#">
          web production
          <span> See more</span>
          <i className="arrow_next"></i>
        </a>
      </div>
    </section>
  );
}

export default NewTopics;
