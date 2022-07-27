import React from "react";

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews?.map((review, index) => (
          <li key={index}>
            {review.name}
            <br />
            {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
