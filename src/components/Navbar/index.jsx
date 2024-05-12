import React from "react";
import { Container, InputWrapper, SearchIcon, Section } from "./style";
import Time from "./Time";
import GenericSelect from "./Select";
import DateTimePiccer from "./DateTimePiccer";
import Input from "../Generics/Input";

const Navbar = () => {
  return (
    <Container>
      <Input
        width={500}
        borderRadius={8}
        height={40}
        iconLeft={<SearchIcon />}
        fontWeight={500}
        fontSize={14}
        lineHeight={20}
        placeholderStyle={{
          color: "#bbc3cd",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: 20,
        }}
        placeholder="Search"
      />
      <Section>
        <Time />
        <GenericSelect />
        <DateTimePiccer />
      </Section>
    </Container>
  );
};

export default Navbar;
