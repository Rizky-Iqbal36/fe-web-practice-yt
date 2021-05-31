import React, { useState } from "react";
import {
  OnomatopoeiaCard,
  OnomatopoeiaContainer,
  OnomatopoeiaH2,
  OnomatopoeiaIcon,
  OnomatopoeiaDesc,
  OnomatopoeiaWrapper,
} from "./onomatopoeiaSection.element";
import { dataOnomatopoeia } from "./data";
import { TextButton } from "../button.element";

const CarouselSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <OnomatopoeiaContainer id="onomatopoeia">
      <TextButton
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        isHover={hover}
        href="https://en.wikipedia.org/wiki/Onomatopoeia"
        target="_blank"
        lightText={true}
        fontSize={2.5}
      >
        ONOMATOPOEIA
      </TextButton>
      <OnomatopoeiaDesc>How cats sound on different languages</OnomatopoeiaDesc>
      <OnomatopoeiaWrapper>
        {dataOnomatopoeia.map((item) => {
          return (
            <OnomatopoeiaCard href={`#${item.id}`} key={item.id}>
              <OnomatopoeiaIcon src={item.image.default} />
              <OnomatopoeiaH2>{item.topLine}</OnomatopoeiaH2>
            </OnomatopoeiaCard>
          );
        })}
      </OnomatopoeiaWrapper>
    </OnomatopoeiaContainer>
  );
};

export default CarouselSection;
