import React, { useState } from "react";
import { send } from "emailjs-com";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  text-align: center;
  padding: 10px;
  border: double thick;
`;

const Textarea = styled.textarea`
  height: 30vh;
  width: 79vh;
`;

const InputFields = styled.div`
  margin: 10px;
`;

const SubmitButton = styled.button`
  padding: 2px 10px;
  color: white;
  background: black;
  border-radius: 5px;
`;

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_g60awki", "template_it7mcqn", toSend, "lakoPxXe2V4dxxUUo")
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
        alert("Votre message a bien été envoyé à Patricia Prouvost");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <h3 style={{ marginTop: 0 }}>Contactez Patricia Prouvost</h3>
      <form onSubmit={onSubmit}>
        <InputFields>
          <input
            type="text"
            name="from_name"
            placeholder="Nom"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </InputFields>
        <InputFields>
          <input
            type="email"
            name="reply_to"
            placeholder="Adresse email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </InputFields>
        <InputFields>
          <Textarea
            name="message"
            placeholder="Votre message"
            value={toSend.message}
            onChange={handleChange}
          />
        </InputFields>
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form;
