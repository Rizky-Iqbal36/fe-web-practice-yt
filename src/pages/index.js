import React from "react";

import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import OnomatopoeiaSection from "../components/OnomatopoeiaSection";

import { HomeObj } from "../components/InfoSection/data";

const Home = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <HeroSection />
        {HomeObj.map((item) => {
          return <InfoSection {...item} />;
        })}
        <OnomatopoeiaSection />
      </div>
    </>
  );
};

export default Home;
