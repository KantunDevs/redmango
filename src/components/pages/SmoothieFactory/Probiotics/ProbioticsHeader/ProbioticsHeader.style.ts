import styled from 'styled-components';

import theme from '@styles/theme';
import { MaxWidthWrapper } from '@styles/common';

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 0;
`;

export const Wrapper = styled.section`
  display: flex;
  margin-bottom: clamp(32px, 20.5vw, 310px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background: #fff;
  border-inline: 2px solid #cb333b;
  border-bottom: 2px solid #cb333b;
  padding: clamp(48px, 9.45vw, 143px) 32px clamp(32px, 14.74vw, 223px) clamp(32px, 5.22vw, 79px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 5.29vw, 80px);
  margin-bottom: clamp(16px, 1.78vw, 27px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  letter-spacing: 1.8px;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: clamp(20px, 2.38vw, 36px);
  line-height: clamp(23px, 3.3vw, 50px);
  margin-bottom: clamp(16px, 1.78vw, 27px);
  text-transform: uppercase;
  color: #421b00;
  max-width: 566px;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  max-width: 552px;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 32px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 41.33%;
  border-right: 2px solid #cb333b;
  border-bottom: 2px solid #cb333b;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    aspect-ratio: 1.6375/1;
    border: none;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    aspect-ratio: initial;
    height: 75px;
  }
`;
