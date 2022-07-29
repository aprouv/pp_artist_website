import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  height: 20vh;
  min-width: 60vw;
  max-width: 100vw;
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
  padding: 2px 10px;
  color: white;
  margin-top: 3px;
  background: black;
  border-radius: 5px;
  cursor: pointer !important;
  box-shadow: 1px 1px 2px 1px #888884;
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
