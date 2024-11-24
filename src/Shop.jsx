import './Shop.css';
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/Sections/NewArrivals";
import content from "./data/content1.json"
import Category from "./components/Sections/Categories/Category";
import Footer from "./components/Footer/Footer";
import React from "react";

function Shop() {
  return (
    <>

        <HeroSection />
        <NewArrivals />
        {content?.categories && content?.categories.map((item,index)=> <Category key={item?.title+index} {...item}  />)}
        <Footer content={content?.footer} />
    </>
  );
}

export default Shop;
