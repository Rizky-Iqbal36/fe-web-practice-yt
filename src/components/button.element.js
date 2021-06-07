import styled from "styled-components";

export const Button = styled.a((props) => ({
  borderStyle: "solid",
  borderWidth: "thin",
  borderRadius: "50px",
  background: props.primary ? "#01BF71" : "#010606",
  padding: props.big ? "24px 64px" : "18px 56px",
  color: props.dark ? "#010606" : "#fff",
  fontSize: props.fontBig ? "32px" : "28px",
  whiteSpace: "nowrap",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",

  ":hover": {
    transition: "all 0.2s ease-in-out",
    background: props.primary ? "#010606" : "#01BF71",
    color: props.dark ? "#fff" : "#010606",
    textDecoration: "none",
  },

  "@media screen and (max-width: 768px)": {
    fontSize: props.fontBig ? "28px" : "24px",
    padding: props.big ? "22px 56px" : "17px 48px",
  },

  "@media screen and (max-width: 480px)": {
    fontSize: props.fontBig ? "24px" : "20px",
    padding: props.big ? "20px 48px" : "16px 42px",
  },
}));

export const TextButton = styled.a((props) => ({
  fontSize: `${props.fontSize}rem` || null,
  cursor: "pointer",
  textDecoration: "none",
  color: props.lightText ? "#f7f8fa" : "#010606",
  marginTop: "-120px",
  marginBottom: "40px",

  ":hover": {
    color: "#50c878",
    textDecoration: "none",
  },
  "@media screen and (max-width: 480px)": {
    fontSize: `${props.fontSize - 0.5}rem` || null,
  },
}));
