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
`;

const ReviewSubtitle = styled.h4`
  font-weight: 200;
`;

const AlertReviewAdded = styled.div`
  padding: 10px 0;
  background: white;
  opacity: 0.8;
  text-align: center;
  font-weight: 600;
`;

const Reviews = () => {
  const [toggle, setToggle] = useState(false);
  const setToggleBoolean = () =>
    toggle == false ? setToggle(true) : setToggle(false);

  let [reviews] = useFetch("/api/v1/reviews", toggle);
  const [reviewData, setReviewData] = useState({
    name: "",
    content: "",
  });

  const [reviewAdded, setReviewAdded] = useState(false);
  const handleReviewAdded = () => setReviewAdded(true);

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const fetchData = () => {
    fetch("api/v1/reviews", {
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
    handleReviewAdded();
    setTimeout(() => {
      setReviewAdded(false);
    }, 4000);
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
      {reviewAdded && (
        <AlertReviewAdded role="alert">
          Votre commentaire a bien été posté
        </AlertReviewAdded>
      )}
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
