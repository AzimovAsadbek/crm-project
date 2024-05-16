import React from "react";
import { Container, Input } from "./style";

const GenericInput = (props) => {
  const { iconleft, iconright } = props;
  return (
    <Container {...props}>
      {iconleft && iconleft}
      <Input {...props} />
      {iconright && iconright}
    </Container>
  );
};

export default GenericInput;
