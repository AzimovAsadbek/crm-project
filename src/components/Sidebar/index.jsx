import React, { useEffect, useState } from "react";
import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  Exit,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
  Wrapper,
} from "./style";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Profile from "./profile";
import sidebar from "../../utils/sidebar";

const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const onclickLogo = () => {
    navigate("/");
  };

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem("open"));
    setOpen(path || []);
  }, []);

  const onOpen = ({ id, path, children }, e) => {
    if (open?.includes(id)) {
      const data = open?.filter((v) => v !== id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      localStorage.setItem("open", JSON.stringify([...open, id]));
      setOpen([...open, id]);
    }
    if (!children) {
      e.preventDefault();
      navigate(path);
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
            const active = open?.includes(parent.id);
            return (
              <React.Fragment key={parent.id}>
                <MenuItem
                  onClick={(e) => onOpen(parent, e)}
                  active={location.pathname.includes(parent.path).toString()}
                >
                  <MenuItem.Title>
                    <Icon className="icon" />
                    {parent.title}
                    {parent?.children && <Arrow active={active.toString()} />}
                  </MenuItem.Title>
                </MenuItem>

                <ChildWrapper active={active.toString()}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        key={child?.id}
                        to={child.path}
                        active={location.pathname
                          ?.includes(child.path)
                          .toString()}
                      >
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </React.Fragment>
            );
          })}
        </Menu>

        <LogOut>
          <Exit />
          Chiqish
        </LogOut>
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
