import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)((props) => ({
  borderRadius: "50px",
  background: props.primary ? "#01BF71" : "#010606",
  padding: props.big ? "14px 48px" : "12px 30px",
  color: props.dark ? "#010606" : "#fff",
  fontSize: props.fontBig ? "20px" : "16px",
  whiteSpace: "nowrap",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",

  ":hover": {
    transition: "all 0.2s ease-in-out",
    background: props.primary ? "#fff" : "#01BF71",
  },
}));
