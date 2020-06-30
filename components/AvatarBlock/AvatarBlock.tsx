import React from 'react';
import { Wrapper, Avatar } from './style';

const AvatarBlock: React.FC = () => {
  return (
    <Wrapper>
      <Avatar src="/images/default/default_avatar.png" alt="avatar" />
    </Wrapper>
  );
};

export default AvatarBlock;
