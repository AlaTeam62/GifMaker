import React from 'react';
import Head from 'next/head';
import Logo from '../Logo/Logo';
import ButtonAside from '../ButtonAside/ButtonAside';
import {
  Container,
  Header,
  Wrapper,
  ButtonsBlock,
  FormInput,
} from '../../styles/style';

const Registration: React.FC = () => {
  return (
    <Container>
      <Head>
        <title> ContactApp - Регистрация</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Contact app</Header>
      <Wrapper>
        <Logo />
        <p className="information">Введите адрес электронной почты</p>
        <p>
          Этот адрес электронной почты будет использован для настройки
          ContactApp. Если у вас уже есть учетная запись, можно использовать
          соответствующий адрес.
        </p>
        <form className="registration_form">
          <FormInput placeholder="Username"></FormInput>
          <FormInput placeholder="Email"></FormInput>
          <FormInput placeholder="Password"></FormInput>
          <FormInput placeholder="Confirm password"></FormInput>
          <ButtonsBlock>
            <ButtonAside nameBtn="Назад" color="grey" />
            <ButtonAside nameBtn="Далее" color="blue" />
          </ButtonsBlock>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Registration;
