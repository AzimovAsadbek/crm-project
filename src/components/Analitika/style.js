import styled from "styled-components";
import getValue from "../../hooks/getStyleVlue";
import Title from "../Generics/Title";
import arrowUp from "../../assets/icons/arrowUp.svg?react";

const getColor = (title) => {
  switch (title) {
    case "Talabalar":
      return { primary: "#52C41A", secondary: "#B7EB8F", tertiary: "#F6FFED" };
    case "Mentorlar":
      return { primary: "#FADB14", secondary: "#FFE58F", tertiary: "#FFFBE6" };
    case "Filiallar":
      return { primary: "#1890FF", secondary: "#91D5FF", tertiary: "#E6F7FF" };
  }
};

const Container = styled.div`
  padding: 24px 19px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ gap }) => getValue(gap, "16px")};

  border-radius: 8px;
  padding: 24px;
  padding-bottom: 0;
  background-color: ${({ title }) => getColor(title)?.tertiary};
`;

const Section = styled(Wrapper)`
  align-items: center;
  justify-content: space-between;

  gap: 0;

  .icon {
    width: 48px;
    height: 48px;
    padding: 8px;
    background-color: ${({ title }) => getColor(title)?.primary};
    margin-right: 16px;

    border-radius: 6px;
    & path {
      fill: white;
    }
  }

  .subIcon {
    margin-right: 16px;
  }
`;

const SubCard = styled(Card)`
  padding-bottom: 24px;
  border: 1px solid #f0f0f0;
`;

const Plus = styled.div`
  &::before {
    content: "+";
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    max-width: 32px;
    max-height: 32px;
    background-color: ${({ title }) => getColor(title)?.secondary};

    color: white;
    font-size: 32px;
    font-weight: 600;

    border-radius: 50%;
  }
  &:active {
    transform: scale(0.98);
  }
  cursor: pointer;
`;

const Counter = styled(Title)`
  font-size: 40px;
`;

const Arrow = styled(arrowUp)`
  width: 24px;
  height: 24x;
  margin-right: 8px;
`;
export { Container, Wrapper, Card, Section, Plus, Counter, Arrow, SubCard };
