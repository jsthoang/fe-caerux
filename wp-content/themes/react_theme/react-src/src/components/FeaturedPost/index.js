import React from "react";

import { Avatar, Website } from "../../assets";
import "./FeaturedPost.scss";
const post = [
  {
    id: 9,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 1,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 2,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 3,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 10,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 4,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 5,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 6,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 7,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 8,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 9,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
  {
    id: 10,
    cat: "Category",
    name: "Vu Hoat",
    date: "2020.2.23",
    tlt: "目標から逆算して考える！間違えない最適なWebサイト改善の方法",
    txt: "Webサイトは改善を繰り返していくことでしっかりと効果を発揮することができます。これまでWebサイトの改善を全く行って",
  },
];
function FeaturedPost() {
  const screenWidth = screen.width;
  console.log(screenWidth);
  return (
    <section className="post">
      <h2>List Topics</h2>
      <p className="txt">List Topics</p>
      <ul className="list_post">
        {post.map((user, index) => (
          <li
            className={
              screenWidth <= 960
                ? "item_before"
                : index === 0
                ? "item_ item_01"
                : "item_before" && index === 1
                ? "item_ item_02"
                : "item_before" && index === 2
                ? "item_ item_03"
                : "item_before" && index === 3
                ? "item_ item_04"
                : "item_before"
            }
            key={index}
          >
            <a href="#">
              <div className="item_content">
                <div className="thumb">
                  <img src={Website} alt="" />
                  <div className="cat_">{user.cat}</div>
                </div>
                <div className="txt_desp">
                  <div className="author_">
                    <div className="avatar_">
                      <img src={Avatar} alt="" />
                    </div>
                    <div className="name">{user.name}</div>
                  </div>
                  <span className="date_">{user.date}</span>
                  <h3>{user.tlt}</h3>
                  <p>{user.txt}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedPost;
