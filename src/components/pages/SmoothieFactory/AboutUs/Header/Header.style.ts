import styled from 'styled-components';

import theme from '@styles/theme';

import { MaxWidthWrapper } from '@styles/common';

export const HeaderMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 0;
`;

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  border-inline: 2px solid #cb333b;
  border-bottom: 2px solid #cb333b;
  justify-content: space-between;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: clamp(48px, 14.35vw, 217px) clamp(32px, 14.28vw, 216px) clamp(72px, 14.41vw, 218px) clamp(32px, 5.22vw, 79px);
  flex-direction: column;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-left: 0;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-inline: 32px;
  }
`;

export const SideImage = styled.div`
  width: 41.26%;
  position: relative;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    height: 240px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 5.29vw, 80px);
  margin-bottom: clamp(16px, 1.78vw, 27px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  letter-spacing: 1.8px;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  max-width: 552px;
`;
