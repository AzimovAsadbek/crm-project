import React from "react";
import { Body, Container, Side, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Sidebar = () => {
  return (
    <Container>
      <Side>Side</Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};

export default Sidebar;
