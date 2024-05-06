import styled from "styled-components";
import arrow from "../../assets/icons/arrow.svg?react";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  background-color: white;
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
  background-color: white;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #1890ff;
  padding: 16px 24px;
  border-bottom: 1px solid #f8fafc;
  cursor: pointer;
  background-color: white;
`;

const LogOut = styled(Logo)`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-top: auto;
  border-top: 1px solid #f8fafc;
  border-bottom: 0;
  color: #253e5f;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 48px;
  margin: 23px 32px 24px 24px;
`;
ProfileContainer.Img = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

ProfileContainer.Name = styled.h2`
  width: 168px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryColor);
`;
ProfileContainer.Email = styled.h2`
  width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--secondaryColor);
`;

// Menu

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  :hover {
    cursor: pointer;
    background-color: #f8fafc;
    color: var(--activeColor);
    .icon {
      & path {
        fill: var(--activeColor);
      }
    }
  }
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryColor);
  .icon {
    margin-right: 16px;
  }
`;

const Arrow = styled(arrow)`
  margin-left: auto;
  transform: ${(props) => props?.active && "rotate(90deg)"};
  transition: all 0.1s;
`;

const ChildWrapper = styled.div`
  padding-left: 35px;
  height: ${(props) => (props?.active ? "fit-content" : "0px")};
  overflow: ${(props) => (props?.active ? "visible" : "hidden")};
`;

export {
  Arrow,
  MenuItem,
  Menu,
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  ChildWrapper,
};
