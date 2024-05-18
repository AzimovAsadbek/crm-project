import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  :hover {
    background-color: #f0f5ff;
    transition: all 0.2s;
  }
`;

const Info = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 12px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: inherit;
  justify-content: ${({ end }) => end && "flex-end"};
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Info.Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 24px;
`;
export { Wrapper, Info, Section };
