import styled from "styled-components";
import getValue from "../../../hooks/getStyleVlue";

const Container = styled.div`
  display: flex;
  align-items: inherit;
  font-size: ${({ size }) => getValue(size, "16px")};
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  font-weight: ${({ fw }) => (fw ? fw : "500")};

  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};

  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 50%;
  opacity: 0px;
  background-color: #1890ff;
  margin-left: 8px;
  color: white;
`;

export { Container, Counter };
