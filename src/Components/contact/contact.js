import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Input from './input';
import data from './info.json';
import './contact.scss';

const contact = () => {
  const [click, setClick] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    desc: ''
  });

  const inputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    // submit form here...
    console.log(form);
  };

  const inputMap = data.map((e, i) => {
    return <Input key={i} e={e} inputChange={inputChange} />;
  });

  return (
    <Wrapper>
      <Title>Contact</Title>
      <Container>
        <h2>Need an entertainer?</h2>
        <h4>Send Jaye a message to get started!</h4>
        <Container>
          {inputMap}
          <Text primary className={click ? 'focus_p' : ''}>
            Description of Event
          </Text>
          <TextArea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Brief description.."
            onFocus={() => setClick(true)}
            onBlur={() => setClick(false)}
            onChange={inputChange}
          />
          <Btn onClick={submitForm}>Contact Now</Btn>
          {!completed && <Text>** Please fill out each input field.</Text>}
        </Container>
      </Container>
    </Wrapper>
  );
};

export default contact;

const Wrapper = styled.div`
  display: flex;
  min-height: 85vh;
  font-family: 'Raleway', sans-serif;
  margin-top: 5vh;
`;

export const Title = styled.h1`
  width: 40vw;
  font-size: 5em;
  font-weight: 300;
  margin-top: 5vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${props =>
    props.primary &&
    css`
      align-items: center;
      width: 60vw;
    `}
  ${props =>
    props.secondary &&
    css`
      justify-content: space-evenly;
      margin: 2% 0;
      padding: 5% 8%;
      height: 60vh;
    `}
`;

export const Text = styled.p`
  color: ${props => (props.primary ? '#595959' : '#f00')};
  ${props =>
    props.primary &&
    css`
      font-weight: 100;
      letter-spacing: 1px;
      text-align: start;
      font-size: 1em;
      margin: 1% 0;
    `}
`;

const Btn = styled.button`
  color: #fff;
  width: 448px;
  height: 30px;
  border-radius: 2px;
  background: #56a082;
  margin-top: 4%;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  border: 1px solid #747474;
  border-radius: 2px;
  background: #fcfcfc;
  width: 445px;
  max-width: 445px;
  height: 100px;
  max-height: 150px;
  font-size: 0.9em;
  :focus {
    outline: none;
  }
  ::placeholder {
    opacity: 0.4;
    padding-left: 1%;
  }
`;
