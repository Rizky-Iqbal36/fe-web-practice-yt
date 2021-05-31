import styled from "styled-components";

export const InfoContainer = styled.div((props) => ({
  color: "#fff",
  background: props.lightBg ? "#f9f9f9" : "#010606",
  padding: `${props.padding || 117}px 0`,
  scrollMarginTop: "79px",

  "@media screen and (max-width: 768px)": {
    padding: `${props.padding - props.padding * (20 / 100) || 100}px 0`,
  },
}));

export const InfoWrapper = styled.div((props) => ({
  display: "grid",
  zIndex: 1,
  height: "100% auto",
  width: "100%",
  marginRight: "auto",
  marginLeft: "auto",
  padding: "0 24px",
  justifyContent: "center",
}));

export const InfoRow = styled.div((props) => ({
  display: "grid",
  gridAutoColumns: "minmax(auto,1fr)",
  alignItems: "center",
  gridTemplateAreas: props.imgStart ? `'col2 col1'` : `'col1 col2'`,

  "@media screen and (max-width: 768px)": {
    gridTemplateAreas: props.imgStart
      ? `'col1' 'col2'`
      : `'col1 col1' 'col2 col2'`,
  },
}));

export const Column1 = styled.div((props) => ({
  margin: "0 15px",
  gridArea: "col1",
}));

export const Column2 = styled.div((props) => ({
  margin: "0 15px",
  gridArea: "col2",
}));

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  width: 130%;
  font-size: 48px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Heading = styled.h1((props) => ({
  marginBottom: "24px",
  fontSize: "48px",
  lineHeight: 1.1,
  fontWeight: 600,
  width: "120%",
  color: props.lightText ? "#f7f8fa" : "#010606",

  "@media screen and (max-width: 480px)": {
    fontSize: "32px",
  },
}));

export const Subtitle = styled.p((props) => ({
  maxWidth: "600px",
  marginBottom: "35px",
  fontSize: "28px",
  lineHeight: "32px",
  color: props.darkText ? "#010606" : "#fff",
  textAlign: "justify",
}));

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
