import React from "react";
import {
  ContactContainer,
  Form,
  Title,
  Input,
  Mensaje,
  FormContainer,
  LinksContainer,
  GithubLink,
  LinkedinLink,
  ContactLink,
  Button,
  SocialContainer,
} from "./style";
import emailjs from "emailjs-com";

function Contacto() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "service_ws509xa",
        e.target,
        "user_y9Bki7cGBeXoYk7GRqxXZ"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <ContactContainer id="contacto">
      <FormContainer>
        <Title>Contacto</Title>
        <Form onSubmit={sendEmail}>
          <Input placeholder="Nombre" type="text" name="name" />
          <Input placeholder="Email" type="email" name="email" />
          <Mensaje placeholder="Mensaje" name="message" />
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
      <LinksContainer>
        <SocialContainer>
          <ContactLink
            href="https://github.com/ddaniss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLink />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/douglas-daniel-sulbar%C3%A1n-socas-4600b2205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLink />
          </ContactLink>
        </SocialContainer>
        <ContactLink href="mailto:danielssocas@gmail.com">
          danielssocas@gmail.com
        </ContactLink>
        <ContactLink href="tel:676393555">676 393 555</ContactLink>
      </LinksContainer>
    </ContactContainer>
  );
}

export default Contacto;
