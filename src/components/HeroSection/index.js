import Video from "../../assets/videos/video_data_green.mp4";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowForward,
  VideoBg,
  HeroContainer,
  HeroBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
} from "./heroSection.element";
import { Button } from "../button.element";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>MAGIC SPELL</HeroH1>
        <HeroP>a perfect place for you who want to use magic</HeroP>
        <HeroP>build your own world and controll it with your own rules</HeroP>
        <HeroH1>
          --I'm the one who take the controll of what i want to do--
        </HeroH1>
        <HeroH1>--unknown wizard</HeroH1>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
