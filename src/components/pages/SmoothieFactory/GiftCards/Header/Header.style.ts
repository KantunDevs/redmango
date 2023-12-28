import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  margin-bottom: clamp(72px, 9.65vw, 146px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background: #fff;
  border-inline: 2px solid #cb333b;
  border-bottom: 2px solid #cb333b;
  padding: clamp(48px, 7.8vw, 118px) clamp(32px, 8.39vw, 127px) clamp(74px, 13.09vw, 198px) clamp(32px, 5.29vw, 80px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 41.33%;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    aspect-ratio: 1.6375/1;
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
  margin-bottom: clamp(16px, 5.95vw, 90px);
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 0;
`;
