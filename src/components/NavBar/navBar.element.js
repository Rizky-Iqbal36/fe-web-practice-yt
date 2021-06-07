import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav((props) => ({
  background: props.scrollNav ? "#000" : "transparent",
  transition: "0.8 all ease",
  height: "80px",
  marginTop: "-80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  position: "sticky",
  top: 0,
  zIndex: 10,

  "@media screen and (max-width: 960px)": {
    transition: "0.8 all ease",
  },
}));

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1700px;
`;

export const NavLogo = styled.div`
  color: #50c878;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  word-break: break-all;
  font-size: 28px;
  font-weight: bold;

  @media screen and (max-width: 920px) {
    width: 25%;
    /* background-color: white; */
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 5px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -285px;

  @media screen and (max-width: 920px) {
    margin-left: -100px;
  }

  @media screen and (max-width: 768px) {
    margin-left: -285px;
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  font-size: 24px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
    text-decoration: none;
  }

  &.active {
    border-bottom: 5px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;
