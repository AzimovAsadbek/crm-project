import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  background-color: white;
  border: 2px solid grey;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  margin: 16px;
  border: 1px solid black;
  background-color: white;
`;

export { Container, Side, Body, Wrapper };
