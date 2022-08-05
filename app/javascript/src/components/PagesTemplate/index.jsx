import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const PagesTemplate = () => {
  return (
    <div>
      <Header />
      <div style={{ margin: "0px 20px 20px 20px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PagesTemplate;
