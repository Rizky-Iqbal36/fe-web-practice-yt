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
        <HeroH1>STARDENBURDENHARDENBART!!!</HeroH1>
        <HeroP>Yes, it's about cats, especially how they sound like</HeroP>
        <HeroH1>--You haven't seen the video yet?--</HeroH1>
        <HeroH1>Pathetic</HeroH1>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            href="https://www.youtube.com/watch?v=Mev7iy6gwIQ"
            target="_blank"
          >
            See the video {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
