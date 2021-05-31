import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./footerSection.element";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Tech Stack</FooterLinkTitle>
              <FooterLink href="https://git-scm.com/" target="_blank">
                Git
              </FooterLink>
              <FooterLink href="https://reactjs.org/" target="_blank">
                Reactjs
              </FooterLink>
              <FooterLink href="https://www.netlify.com/" target="_blank">
                Netlify
              </FooterLink>
              <FooterLink
                href="https://en.wikipedia.org/wiki/CSS"
                target="_blank"
              >
                Css
              </FooterLink>
              <FooterLink href="https://www.javascript.com/" target="_blank">
                Javascript
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Assets</FooterLinkTitle>
              <FooterLink href="https://www.pexels.com" target="_blank">
                Videos
              </FooterLink>
              <FooterLink href="https://undraw.co" target="_blank">
                Illustrations
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Stay in Touch</FooterLinkTitle>
              <FooterLink
                href="https://www.instagram.com/rizky_iqbal48/"
                target="_blank"
              >
                Instagram
              </FooterLink>
              <FooterLink
                href="https://twitter.com/rizkyiqbal36"
                target="_blank"
              >
                Twitter
              </FooterLink>
              <FooterLink
                href="https://github.com/Rizky-Iqbal36"
                target="_blank"
              >
                Github
              </FooterLink>
              <FooterLink
                href="https://gitlab.com/rizkyiqbal36"
                target="_blank"
              >
                Gitlab
              </FooterLink>
              <FooterLink
                href="https://rizky-iqbal.netlify.app/"
                target="_blank"
              >
                Website
              </FooterLink>
              <FooterLink href="mailto:rizkiiqbal36@gmail.com" target="_blank">
                Email
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="#home">Stardenburdenhardenbart</SocialLogo>
            <WebsiteRights>
              Stardenburdenhardenbart © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.instagram.com/rizky_iqbal48/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/rizkyiqbal36"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/rizki-iqbal/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Rizky-Iqbal36"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://gitlab.com/rizkyiqbal36"
                target="_blank"
                aria-label="Gitlab"
              >
                <FaGitlab />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
