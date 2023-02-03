import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeaturedPost from "../../components/FeaturedPost";
import ContentHome from "../../components/ContentHome";
import NewTopics from "../../components/NewTopics";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Header />
      <div className="inner">
        <div className="list_content_product">
          <NewTopics />
          <FeaturedPost />
          <ContentHome />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
