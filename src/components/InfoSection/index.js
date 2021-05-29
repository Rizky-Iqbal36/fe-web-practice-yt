import React, { useState } from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Symbol,
} from "./infoSection.element";
import { Button } from "../button.element";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
  padding,
  goto,
  symbol,
  section,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} padding={padding} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 imgStart={imgStart}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  <Symbol
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    isHover={hover}
                    href={section}
                    lightText={lightText}
                  >
                    {symbol}
                  </Symbol>
                  {` ${headline}`}
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    primary={primary}
                    dark={dark}
                    href={goto}
                    target="_blank"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2 imgStart={imgStart}>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
