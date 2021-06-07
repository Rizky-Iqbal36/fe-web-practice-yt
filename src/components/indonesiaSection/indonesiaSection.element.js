import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin: 27px 0 32px 45px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  word-break: break-all;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    margin: 19px 0 16px 26px;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  background: #010101;
  max-width: 800px;
  height: 80%;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 32px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const ContentH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 36px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const ModalButton = styled.button`
  background: #01bf71;
  padding: 16px 32px;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.p`
  text-align: center;
  word-break: break-all;
  max-width: 90%;
  margin-top: 24px;
  color: #fff;
  font-size: 22px;
`;

export const IndonesiaIcon = styled.img`
  height: 220px;
  width: 220px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    height: 160px;
    width: 160px;
  }
`;
