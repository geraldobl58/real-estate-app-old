import styled from 'styled-components';

import background from '../../assets/background.jpg';

export const BannerWrapper = styled.section`
  background-color: #c56183;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  position: relative;
  width: 100%;
  min-height: 700px;
`;

export const BannerWrapperOverlay = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: transparent;
  background-image: linear-gradient(115deg, #453fa2 0%, #f35863 100%);
  opacity: 0.9;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 56px;
  }
`;
