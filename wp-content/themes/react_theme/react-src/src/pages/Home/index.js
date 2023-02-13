import React from "react";
import FeaturedPost from "../../components/FeaturedPost";
import ContentHome from "../../components/ContentHome";
import NewTopics from "../../components/NewTopics";
import "./Home.scss";

function Home({}) {
  return (
    <div className="list_content_product">
      <NewTopics />
      <FeaturedPost />
      <ContentHome />
    </div>
  );
}

export default Home;
