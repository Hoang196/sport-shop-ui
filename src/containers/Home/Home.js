import React from "react";
import Header from "../../components/header/index.js";
import Brand from "../../components/brand/index.js";
import Chart from "../../components/chart/index.js";
import Footer from "../../components/footer/index.js";
import HotSelling from "../../components/hotSelling/index.js";
import Information from "../../components/information/index.js";
import Position from "../../components/position/index.js";
import ProductSearch from "../../components/productSearch/index.js";
import Support from "../../components/support/index.js";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <HotSelling />
      <ProductSearch />
      <Brand />
      <Position />
      <Information />
      <Chart />
      <Support />
      <Footer />
    </>
  );
};

export default Home;
