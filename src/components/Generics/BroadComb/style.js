import styled from "styled-components";
import arrow from "../../../assets/icons/rightArrow.svg?react";

const getColor = ({ title }) => {
  switch (title) {
    case "Lidlar":
      return "#F0F5FF";
    case "Moliya":
      return "#FFF2E8";
    case "Talabalar":
      return "#F9F0FF";
    case "Guruhlar":
      return "#FCFFE6";
    case "Kurslar":
      return "#E6FFFB";
    case "HR":
      return "#FFF0F6";
    case "Sozlamalar":
      return "#FFF2E8";
  }
};
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  border-radius: 8px 8px 0px 0px;
  background-color: ${(title) => getColor(title)};
  padding: 24px;
  margin-bottom: 24px;
`;

const Icon = styled(arrow)``;

export { Container, Icon };
