import React from "react";
import {
  ModalContainer,
  MessageWrapper,
  MessageContent,
} from "./modalThink.element";

const index = (props) => {
  return (
    <ModalContainer {...props} size="lg" centered id="think">
      <MessageWrapper variant="none">
        <MessageContent>{props.children}</MessageContent>
      </MessageWrapper>
    </ModalContainer>
  );
};

export default index;
