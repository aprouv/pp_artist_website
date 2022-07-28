import React from "react";
import styled from "styled-components";

const ReviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  word-break: break-word;
  margin: 5vh 3vw;
`;

const ReviewCard = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  border: double thick;
  text-align: left;
  padding: 10px;
  opacity: 0.9;
  background: white;
  border-radius: 5px;
`;

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewWrapper>
      {reviews?.map((review) => (
        <ReviewCard key={review.id}>
          {review.name}
          <br />
          <br />
          {review.content}
        </ReviewCard>
      ))}
    </ReviewWrapper>
  );
};

export default ReviewsList;
