import React, { useState } from "react";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import OnomatopoeiaSection from "../components/OnomatopoeiaSection";

import { HomeObj } from "../components/InfoSection/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObj[0]} />
      <InfoSection {...HomeObj[1]} />
      <InfoSection {...HomeObj[2]} />
      <InfoSection {...HomeObj[3]} />
      <OnomatopoeiaSection />
    </>
  );
};

export default Home;
