/* eslint react/prop-types: 0 */
import React from 'react';
import { ButtonGrey, ButtonBlue } from './style';

const BLUE = 'blue';
const GREY = 'grey';

type ColorType = typeof BLUE | typeof GREY;

type PropsType = {
  nameBtn: string;
  color: ColorType;
};

const ButtonAside: React.FC<PropsType> = (props: PropsType): JSX.Element => {
  const color = props.color;
  const getButton = (colorButton: ColorType) => {
    return colorButton === GREY ? (
      <ButtonGrey>{props.nameBtn}</ButtonGrey>
    ) : (
      <ButtonBlue>{props.nameBtn}</ButtonBlue>
    );
  };

  return <>{getButton(color)}</>;
};

ButtonAside.propTypes = {
  nameBtn: PropsType.string.nameBtn,
};

export default ButtonAside;
