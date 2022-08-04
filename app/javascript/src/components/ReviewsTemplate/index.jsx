import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header";

const ReviewsTemplate = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ReviewsTemplate;
