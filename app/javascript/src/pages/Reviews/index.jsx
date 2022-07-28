import React, { useState } from "react";
import useFetch from "../../utils/hooks";
import ReviewsList from "../../components/ReviewsList";
import ReviewForm from "../../components/ReviewForm";
import styled from "styled-components";
import ReviewPainting from "../../assets/images/review_painting.jpg";

const ReviewContainer = styled.div`
  background-image: url(${ReviewPainting});
  background-size: cover;
`;

const ReviewTitle = styled.h1`
  margin-top: 0;
  padding-top: 3vh;
  color: white;
`;

const ReviewSubtitle = styled.h4`
  font-weight: 200;
  color: white;
`;

const Reviews = () => {
  const [toggle, setToggle] = useState(false);
  let [reviews] = useFetch("/api/v1/reviews", toggle);
  const [reviewData, setReviewData] = useState({
    name: "",
    content: "",
  });
  const setToggleBoolean = () =>
    toggle == false ? setToggle(true) : setToggle(false);

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
    setReviewData({
      name: "",
      content: "",
    });
  };

  return (
    <ReviewContainer style={{ margin: "0px" }}>
      <div style={{ margin: "0 3vw" }}>
        <ReviewTitle>Livre d'or</ReviewTitle>
        <ReviewSubtitle>
          Partagez ici publiquement vos avis, vos impressions, vos
          suggestions...
        </ReviewSubtitle>
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
    </ReviewContainer>
  );
};

export default Reviews;
