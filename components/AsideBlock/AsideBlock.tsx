import React, { useState } from 'react';
import { AsideBlockWrapper } from './style';
import AppButton from './AppButton/AppButton';

const AsideBlock: React.FC = () => {
  const [activeButton, setActiveButton] = useState('gifmaker');

  return (
    <AsideBlockWrapper>
      <AppButton
        onClick={() => setActiveButton('gifmaker')}
        isActive={activeButton === 'gifmaker' ? 'active' : ''}
        imgUrl="/images/default/icon-gifmaker.png"
        imgAlt="gifmaker button"
        nameButton="Gifmaker"
        key="button1"
      />

      <AppButton
        onClick={() => setActiveButton('settings')}
        isActive={activeButton === 'settings' ? 'active' : ''}
        imgUrl="/images/default/icon-settings.png"
        imgAlt="gifmaker button"
        nameButton="Setting"
        key="button2"
      />

      <AppButton
        onClick={() => setActiveButton('supertest')}
        isActive={activeButton === 'supertest' ? 'active' : ''}
        imgUrl="/images/default/icon-gifmaker.png"
        imgAlt="gifmaker button"
        nameButton="Super test button"
        key="button3"
      />
    </AsideBlockWrapper>
  );
};

export default AsideBlock;
