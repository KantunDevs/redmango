import styled from 'styled-components';

import theme from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: clamp(59px, 6.28vw, 95px);
  align-items: center;
  margin-bottom: clamp(30px, 16.93vw, 256px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #fff;
  margin-bottom: 8px;
  max-width: 448px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 21px;
  }
`;

export const ContentWrapper = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 87px;
  }
`;

export const BgWrapper = styled.div`
  background: #cb333b;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const Card = styled.div`
  background: #fff;
  padding: clamp(25px, 2.57vw, 39px) clamp(28px, 2.57vw, 39px) clamp(20px, 3.9vw, 59px) clamp(28px, 2.57vw, 39px);
  display: flex;
  width: clamp(329px, 33.13vw, 501px);
  max-width: calc(100vw - 64px);
  flex-direction: column;
  transform: translateY(clamp(32px, 5.42vw, 82px));
  border: 2px solid #cb333b;
  overflow-wrap: break-word;
  inline-size: min-content;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 55px;
  }
`;

export const Hashtag = styled.span`
  color: #cb333b;
  font-size: clamp(23px, 2.18vw, 33px);
  line-height: clamp(27px, 2.51vw, 38px);
  text-transform: uppercase;
  margin-top: clamp(25px, 3.24vw, 49px);
`;
