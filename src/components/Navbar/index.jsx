import React from "react";
import { Container, Input, InputWrapper, SearchIcon, Section } from "./style";
import Time from "./Time";
import GenericSelect from "./Select";
import DateTimePiccer from "./DateTimePiccer";

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input placeholder="Search" />
      </InputWrapper>
      <Section>
        <Time />
        <GenericSelect />
        <DateTimePiccer />
      </Section>
    </Container>
  );
};

export default Navbar;
