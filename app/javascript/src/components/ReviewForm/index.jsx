import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  height: 20vh;
  width: 80%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: text !important;
  opacity: 0.9;
`;

const InputFields = styled.input`
  margin: 10px 0;
  display: block;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: text;
  opacity: 0.9;
`;

const SubmitButton = styled.button`
  padding: 4px 10px;
  font-size: 15px;
  color: white;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  cursor: pointer !important;
  &:hover {
    opacity: 0.7;
  }
`;

const ReviewForm = ({ onSubmit, onClick, reviewData, onChange }) => {
  return (
    <div style={{ marginLeft: "3vw" }}>
      <form onSubmit={onSubmit}>
        <div>
          <InputFields
            type="text"
            value={reviewData.name}
            name="name"
            placeholder="Votre nom"
            onChange={onChange}
            aria-label="name"
            required
          />
        </div>
        <div>
          <Textarea
            role="textarea"
            placeholder="Votre message"
            name="content"
            value={reviewData.content}
            onChange={onChange}
            aria-label="content"
            required
          />
        </div>
        <SubmitButton type="submit" onClick={onClick} aria-label="Click me">
          Envoyer
        </SubmitButton>
      </form>
    </div>
  );
};

export default ReviewForm;
