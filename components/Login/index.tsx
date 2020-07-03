import React from 'react';
import Head from 'next/head';
import Logo from '../Logo/Logo';
import ButtonNext from '../Button/ButtonNext';
import ButtonPrev from '../Button/ButtonPrev';
import {
  Container,
  Header,
  Wrapper,
  BlockHeader,
  ButtonsBlock,
  FormLink,
  FormInput,
} from '../../styles/style';

const Login = () => {
  return (
    <Container>
      <Head>
        <title> ContactApp - Войти</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Contact app</Header>
      <Wrapper>
        <Logo />
        <BlockHeader>Войти</BlockHeader>
        <form>
          <FormInput placeholder="Username"></FormInput>
          <FormInput placeholder="Password"></FormInput>
          <FormLink>
            Нет учётной записи? <a href="/registration">Создайте её.</a>
          </FormLink>
          <FormLink>
            <a href="#">Не удаётся получить доступ к своей учетной записи?</a>
          </FormLink>
          <ButtonsBlock>
            <ButtonPrev name="Назад" />
            <ButtonNext name="Далее" />
          </ButtonsBlock>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
