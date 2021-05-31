import styled from "styled-components";

export const OnomatopoeiaContainer = styled.div`
  height: 725px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1100px;
  }

  @media screen and (max-width: 768px) {
    height: 1800px;
  }
`;

export const OnomatopoeiaWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20 px;
  }
`;

export const OnomatopoeiaH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const OnomatopoeiaDesc = styled.h2`
  color: white;
  margin-bottom: 36px;
  text-align: center;
`;

export const OnomatopoeiaCard = styled.a`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 90px 80px;
  margin: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    padding: 70px 60px;
  }
`;

export const OnomatopoeiaIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    height: 80px;
    width: 80px;
  }
`;

export const OnomatopoeiaH2 = styled.h2`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
  width: 130%;
`;

export const OnomatopoeiaP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
