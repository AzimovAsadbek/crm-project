import styled from "styled-components";
import getValue from "../../../hooks/getStyleVlue";

const Container = styled.div`
  display: inherit;
  align-items: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  color: ${({ color }) => (color ? color : "var(--primaryColor)")};

  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};

  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;

export { Container };
