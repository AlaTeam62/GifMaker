import React from 'react';
import { ButtonStyle } from './style';

type PropsType = {
  imgUrl: string;
  imgAlt: string;
  nameButton: string;
  isActive: string;
  onClick: () => void;
};

const AppButton: React.FC<PropsType> = (props: PropsType) => {
  return (
    <ButtonStyle className={props.isActive} onClick={props.onClick}>
      <img src={props.imgUrl} alt={props.imgAlt} />
      <p>{props.nameButton}</p>
    </ButtonStyle>
  );
};

export default AppButton;
