import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Tittle = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  color: lightgray;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: pink;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sfg10td',
        'template_3bazxid',
        ref.current,
        'wRM4f5aH1AfmX_xoI'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Tittle>Contanct Us</Tittle>
            <Input placeholder="name" name="name" />
            <Input placeholder="email" name="email" />
            <TextArea
              rows={10}
              placeholder="write your message"
              name="message"
            />
            <Button>Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
