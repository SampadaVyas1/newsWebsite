import React, { Children } from "react";
import NavBar from "../navBar/navBar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
