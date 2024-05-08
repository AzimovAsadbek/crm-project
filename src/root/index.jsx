import React from "react";
import { Container } from "./style";
import { Navigate, Route, Routes } from "react-router-dom";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar";
const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((parent) => {
            if (parent?.children?.length) {
              return parent.children.map((child) => {
                const ChildElement = child.element;
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ChildElement />}
                  />
                );
              });
            } else {
              const ParentElement = parent.element;
              return (
                !parent.hidden && (
                  <Route
                    key={parent.id}
                    path={parent.path}
                    element={<ParentElement />}
                  />
                )
              );
            }
          })}
        </Route>

        {sidebar.map((parent) => {
          const ParentElement = parent.element;
          return (
            parent.hidden && (
              <Route
                key={parent.id}
                path={parent.path}
                element={<ParentElement />}
              />
            )
          );
        })}

        <Route path="/" element={<Navigate to={"/analitika"} />} />
        <Route path="*" element={<h1>404 not faund</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;
