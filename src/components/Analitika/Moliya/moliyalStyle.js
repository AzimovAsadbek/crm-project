import styled from "styled-components";
import arrow from "../../../assets/icons/rightArrow.svg?react";

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ mt = 0, mr = 0, mb = 0, ml = 0 }) =>
    `${mt}px ${mr}px ${mb}px ${ml}px`};
`;

const CardWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48px;
  height: 72px;
  border-radius: 24px;
  border: 1px solid #f0f0f0;
  background-color: ${({ active }) =>
    active === "true" ? "#1890FF" : "white"};
  cursor: pointer;
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
export { Wrapper, Section, CardWrappper };
