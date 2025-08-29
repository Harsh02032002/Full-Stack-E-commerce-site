import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      

      {/* Vertical Cards in id sequence */}
      <VerticalCardProduct category={"jeans"} heading={"Jeans"} />
      <VerticalCardProduct category={"shirts"} heading={"Shirts"} />
      <VerticalCardProduct category={"dresses"} heading={"Dresses"} />
      <VerticalCardProduct category={"jackets"} heading={"Jackets"} />
      <VerticalCardProduct category={"accessories"} heading={"Accessories"} />
    </div>
  );
};

export default Home;
