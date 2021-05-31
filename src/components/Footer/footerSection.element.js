import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  min-width: 190px;
  width: 100%;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 4px;
  font-size: 20px;

  &:hover {
    color: #01bf71;
    transition: 0ms.2s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1700px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 28px;
  word-break: break-all;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: #50c878;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;

export const WebsiteRights = styled.p`
  color: #fff;
  word-break: break-all;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  } ;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 42px;
`;
