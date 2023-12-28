import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

export const FloatingShapeImage = styled(FloatingImage)`
  transform: translate(-10%, 25%);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: translate(-10%, 83%);
  }
`;

export const HeaderMaxWidthWrapper = styled(MaxWidthWrapper)`
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-right: 0;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-inline: 0;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  gap: clamp(101px, 9.39vw, 142px);
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    gap: 86px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 56px;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  max-width: clamp(363px, 29.62vw, 448px);
  margin-left: min(118px, 7.8vw);
  flex-direction: column;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-left: 0;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-inline: 32px;
    order: 2;
  }
`;

export const RelativeWrapper = styled.div`
  position: relative;
  margin-bottom: clamp(349px, 28.24vw, 427px);
`;

export const SideImage = styled.div`
  margin-top: 105px;
  width: clamp(500px, 45.23vw, 684px);
  height: clamp(296px, 51.19vw, 774px);
  position: relative;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    order: 1;
  }
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-top: 52px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  margin-bottom: 24px;
  color: #23aa5d;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
`;

export const LottieWrapper = styled.div`
  max-height: 60px;
  width: 100%;
`;
