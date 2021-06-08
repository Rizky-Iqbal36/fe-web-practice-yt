import React, { useState } from "react";
import {
  Container,
  Content,
  ModalButton,
  ContentWrapper,
  ContentH1,
  FormWrap,
  Icon,
  Text,
  IndonesiaIcon,
} from "./indonesiaSection.element";
import IndonesiaImage from "../../assets/images/indonesia.svg";
import ModalThink from "../ModalThink";

const IndonesiaSection = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShowAlert(false);
  const handleShow = () => setShowAlert(true);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Stardenburdenhardenbart</Icon>
          <ContentWrapper>
            <Content>
              <ContentH1>Indonesia - Meong</ContentH1>
              <IndonesiaIcon src={IndonesiaImage} />
              <Text>I personally heard it meong or ngeong</Text>
              <ModalButton onClick={handleShow}>Learn more</ModalButton>
            </Content>
          </ContentWrapper>
        </FormWrap>
      </Container>
      <ModalThink show={showAlert} onHide={handleClose}>
        <p>Think about it, what's the sound of a cat?</p>
        <p>why other people over the world hear it different?</p>
        <p>
          it also applies to other animals such as chickens, dogs and others
        </p>
      </ModalThink>
    </>
  );
};

export default IndonesiaSection;
