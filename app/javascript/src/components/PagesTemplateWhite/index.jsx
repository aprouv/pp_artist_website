import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header";

const PagesTemplate = () => {
  return (
    <div style={{margin: "0px 20px 20px 20px"}}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PagesTemplate;
