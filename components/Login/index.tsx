import React from 'react';
import Head from 'next/head';
import Logo from '../Logo/Logo';
import ButtonAside from '../ButtonAside/ButtonAside';
import {
  Container,
  Header,
  Wrapper,
  BlockHeader,
  ButtonsBlock,
  FormLink,
  FormInput,
} from '../../styles/style';

const Login: React.FC = () => {
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
            <ButtonAside nameBtn="Назад" color="grey" />
            <ButtonAside nameBtn="Далее" color="blue" />
          </ButtonsBlock>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
