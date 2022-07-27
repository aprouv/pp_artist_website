import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  height: 30vh;
  width: 79vh;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: text !important;
`;

const InputFields = styled.input`
  margin: 10px auto;
  display: block;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: text;
`;

const SubmitButton = styled.button`
  padding: 2px 10px;
  color: white;
  margin-top: 3px;
  background: black;
  border-radius: 5px;
  cursor: pointer !important;
  &:hover {
    opacity: 0.7;
  }
`;

const ReviewForm = ({ onSubmit, onClick, reviewData, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <InputFields
            type="text"
            value={reviewData.name}
            name="name"
            placeholder="Nom"
            onChange={onChange}
          />
        </div>
        <div>
          <Textarea
            placeholder="Votre message"
            name="content"
            value={reviewData.content}
            onChange={onChange}
          />
        </div>
        <SubmitButton type="submit" onClick={onClick}>
          Envoyer
        </SubmitButton>
      </form>
    </div>
  );
};

export default ReviewForm;
