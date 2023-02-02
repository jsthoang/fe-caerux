import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeaturedPost from "../../components/FeaturedPost";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Header />
      <div className="inner">
        <section className="featured_post">
          <div className="list_content_product">
            <FeaturedPost />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
