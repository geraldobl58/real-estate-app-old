import React from 'react';

import { BannerWrapper, BannerWrapperOverlay } from './styled';

export default function Banner() {
  return (
    <BannerWrapper>
      <BannerWrapperOverlay>
        <h1>Encontre a sua casa do sonho</h1>
      </BannerWrapperOverlay>
    </BannerWrapper>
  );
}
