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

function Contacto() {
  return (
    <ContactContainer id="contacto">
      <FormContainer>
        <Title>Contacto</Title>
        <Form>
          <Input placeholder="Nombre" type="text" />
          <Input placeholder="Email" type="email" />
          <Mensaje placeholder="Mensaje" />
          <Button>Enviar</Button>
        </Form>
      </FormContainer>
      <LinksContainer>
        <SocialContainer>
          <ContactLink href="">
            <GithubLink />
          </ContactLink>
          <ContactLink href="">
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
