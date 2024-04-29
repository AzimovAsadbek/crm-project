import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname}</h1>
      <h1>Comming coon...</h1>
    </Container>
  );
};

export default Generics;
