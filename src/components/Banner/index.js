import React from 'react';

import { BannerWrapper, BannerWrapperOverlay } from './styled';

export default function Banner() {
  return (
    <BannerWrapper>
      <BannerWrapperOverlay>
        <h1>Find Your Dream Home</h1>
      </BannerWrapperOverlay>
    </BannerWrapper>
  );
}
