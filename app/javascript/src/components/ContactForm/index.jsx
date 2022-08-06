import React, { useState } from "react";
import { send } from "emailjs-com";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  text-align: center;
  padding: 10px;
  border: double thick;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 70vh;
`;

const Textarea = styled.textarea`
  height: 30vh;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: text !important;
  width: 65vw;
  margin-top: 10px;
  @media only screen and (max-width: 600px) {
    width: 59vw;
    height: 22vh;
  }
`;

const InputFields = styled.input`
  margin-top: 10px;
  display: block;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: text;
`;

const SubmitButton = styled.button`
  padding: 2px 10px;
  color: white;
  margin-top: 3px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  cursor: pointer !important;
  &:hover {
    opacity: 0.7;
  }
`;

const ContactTitle = styled.h3`
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: 6.5px;
  margin-top: 0;
`;

const ContactSubtitle = styled.h4`
  font-weight: 100;
  font-size: 14px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ContactForm = () => {
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
    setToSend({
      from_name: "",
      message: "",
      reply_to: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <ContactTitle>Contactez Patricia Prouvost</ContactTitle>
      <ContactSubtitle>
        Pour toute question concernant un ou plusieurs tableaux, pour
        acquisition ou pour toute demande d'exposition, vous pouvez me contacter
        via le formulaire ci-dessous.
      </ContactSubtitle>
      <form onSubmit={onSubmit}>
        <div>
          <InputFields
            type="text"
            name="from_name"
            placeholder="Nom"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputFields
            type="email"
            name="reply_to"
            placeholder="Adresse email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <Textarea
            name="message"
            placeholder="Votre message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <SubmitButton type="submit">Envoyer</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
