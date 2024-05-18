import styled from "styled-components";
import arrow from "../../../assets/icons/rightArrow.svg?react";

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowIcon = styled(arrow)`
  transform: ${({ left }) => left && "rotate(180deg)"};
  cursor: pointer;
  &:active {
    path {
      fill: var(--primaryColor);
    }
  }
`;
export { Wrapper, Container, Section };
