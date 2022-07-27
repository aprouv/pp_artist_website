import React, { useState } from "react";
import useFetch from "../../utils/hooks";
import ReviewsList from "../../components/ReviewsList";
import ReviewForm from "../../components/ReviewForm";

const Reviews = () => {
  const [toggle, setToggle] = useState(false);
  let [reviews] = useFetch("/api/v1/reviews", toggle);
  const [reviewData, setReviewData] = useState({
    name: "",
    content: "",
  });
  const setToggleBoolean = () => (toggle == false ? setToggle(true) : setToggle(false));

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const fetchData = () => {
    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ review: reviewData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setToggleBoolean();
    e.target.value = "";
  };

  return (
    <div style={{ margin: "0px" }}>
      <div>
        <h1>Livre d'or</h1>
        <h4>Partagez ici vos impressions</h4>
      </div>
      <div>
        <ReviewForm
          onChange={handleChange}
          onSubmit={onSubmit}
          reviewData={reviewData}
          onClick={setToggleBoolean}
        />
      </div>
      <div>
        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
