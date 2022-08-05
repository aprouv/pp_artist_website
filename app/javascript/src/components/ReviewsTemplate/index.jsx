import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const ReviewsTemplate = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsTemplate;
