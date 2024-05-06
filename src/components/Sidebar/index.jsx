import React, { useState } from "react";
import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
  Wrapper,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Profile from "./profile";
import sidebar from "../../utils/sidebar";

const Sidebar = () => {
  const [open, setOpen] = useState([]);
  const navigate = useNavigate();
  const onclickLogo = () => {
    navigate("/");
  };

  const onOpen = (id) => {
    if (open.includes(id)) {
      const data = open.filter((v) => v !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onclickLogo}>Webbrain.crm</Logo>
        <Profile />

        <Menu>
          {sidebar.map((parent) => {
            const { icon: Icon } = parent;
            const active = open.includes(parent.id);
            return (
              <>
                <MenuItem key={parent.id} onClick={() => onOpen(parent.id)}>
                  <MenuItem.Title>
                    <Icon className="icon" />
                    {parent.title}
                    {parent?.children && <Arrow active={active} />}
                  </MenuItem.Title>
                </MenuItem>

                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </>
            );
          })}
        </Menu>

        <LogOut>Chiqish</LogOut>
      </Side>

      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};

export default Sidebar;
