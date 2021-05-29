import React from "react";
import {
  OnomatopoeiaCard,
  OnomatopoeiaContainer,
  OnomatopoeiaH1,
  OnomatopoeiaH2,
  OnomatopoeiaIcon,
  // OnomatopoeiaP,
  OnomatopoeiaWrapper,
} from "./onomatopoeiaSection.element";
import { dataCarousel } from "./data";

const CarouselSection = () => {
  return (
    <OnomatopoeiaContainer id="onomatopoeia">
      <OnomatopoeiaH1>ONOMATOPOEIA</OnomatopoeiaH1>
      <h2 style={{ color: "white", marginBottom: "36px" }}>
        How cats sound on different languages
      </h2>
      <OnomatopoeiaWrapper>
        {dataCarousel.map((item) => {
          return (
            <OnomatopoeiaCard href={`#${item.id}`}>
              <OnomatopoeiaIcon src={item.image.default} />
              <OnomatopoeiaH2>{item.topLine}</OnomatopoeiaH2>
              {/* <CarouselP>Magic.</CarouselP> */}
            </OnomatopoeiaCard>
          );
        })}
      </OnomatopoeiaWrapper>
    </OnomatopoeiaContainer>
  );
};

export default CarouselSection;
