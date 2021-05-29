import styled from "styled-components";
// import { Link } from "react-scroll";

// export const Button = styled(Link)((props) => ({
//   borderStyle: "solid",
//   borderWidth: "thin",
//   borderRadius: "50px",
//   background: props.primary ? "#01BF71" : "#010606",
//   padding: props.big ? "24px 64px" : "18px 56px",
//   color: props.dark ? "#010606" : "#fff",
//   fontSize: props.fontBig ? "32px" : "28px",
//   whiteSpace: "nowrap",
//   cursor: "pointer",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   transition: "all 0.2s ease-in-out",

//   ":hover": {
//     transition: "all 0.2s ease-in-out",
//     background: props.primary ? "#010606" : "#01BF71",
//     color: props.dark ? "#fff" : "#010606",
//   },

//   "@media screen and (max-width: 480px)": {
//     fontSize: props.fontBig ? "24px" : "20px",
//     padding: props.big ? "20px 48px" : "16px 42px",
//   },
// }));

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
  },

  "@media screen and (max-width: 480px)": {
    fontSize: props.fontBig ? "24px" : "20px",
    padding: props.big ? "20px 48px" : "16px 42px",
  },
}));
