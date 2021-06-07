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
              <Text>Ya saya pribadi sih dengarnya meong atau nguarn</Text>
              <ModalButton onClick={handleShow}>
                Pelajari lebih lanjut
              </ModalButton>
            </Content>
          </ContentWrapper>
        </FormWrap>
      </Container>
      <ModalThink show={showAlert} onHide={handleClose}>
        <p>Ya dipikirlah itu kucing suaranya kek apa</p>
        <p>ga mungkin juga kan suaranya kek kura-kura</p>
      </ModalThink>
    </>
  );
};

export default IndonesiaSection;
