import React from 'react';
import { ButtonBlue } from './style';

type PropsType = {
  name: string;
};

const ButtonNext = (props: PropsType) => {
  return <ButtonBlue>{props.name}</ButtonBlue>;
};

export default ButtonNext;
