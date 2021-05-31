import React from "react";

import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import OnomatopoeiaSection from "../components/OnomatopoeiaSection";

import Footer from "../components/Footer";

import { HomeObj } from "../components/InfoSection/data";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroSection />
      {HomeObj.map((item) => {
        return <InfoSection {...item} key={item.id} />;
      })}
      <OnomatopoeiaSection />
      <Footer />
    </div>
  );
};

export default Home;
