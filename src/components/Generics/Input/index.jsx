import React from "react";
import { Container, Input } from "./style";

const GenericInput = (props) => {
  const { iconLeft, iconRight } = props;
  return (
    <Container {...props}>
      {iconLeft && iconLeft}
      <Input {...props} />
      {iconRight && iconRight}
    </Container>
  );
};

export default GenericInput;
