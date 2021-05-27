import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)((props) => ({
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

  ":hover": {
    transition: "all 0.2s ease-in-out",
    background: props.primary ? "#010606" : "#01BF71",
    color: props.dark ? "#fff" : "#010606",
  },
}));
