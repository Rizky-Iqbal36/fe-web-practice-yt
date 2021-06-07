import styled from "styled-components";
import { Modal, Alert } from "react-bootstrap";

export const ModalContainer = styled(Modal)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageWrapper = styled(Alert)`
  margin: 0;
  background-color: #161616;
`;

export const MessageContent = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
`;
