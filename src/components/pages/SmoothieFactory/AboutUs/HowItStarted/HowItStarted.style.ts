import styled from 'styled-components';

import theme from '@styles/theme';

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: clamp(107px, 11.9vw, 180px);
  padding-bottom: clamp(142px, 12.5vw, 189px);
`;

export const Title = styled.h1`
  font-size: clamp(36px, 3.96vw, 60px);
  line-height: clamp(40px, 3.96vw, 60px);
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 2px #cb333b;
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  text-align: center;
  color: #000000;
  max-width: 658px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: clamp(56px, 4.76vw, 72px);
  margin-bottom: clamp(193px, 21.16vw, 320px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 16px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    gap: 8px;
  }
`;

export const InfoCardTitle = styled.h3`
  font-size: clamp(18px, 2.11vw, 32px);
  line-height: clamp(24px, 2.38vw, 36px);
  color: #474747;
  text-align: center;
`;

export const InfoCardText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #421b00;
  text-align: center;
`;

export const OurMissionImgContainer = styled.div`
  position: relative;
  height: clamp(360px, 33.33vw, 504px);
  width: 100%;
`;

export const OurMission = styled.div`
  background-color: #cb333b;
  position: relative;
  padding-top: clamp(64px, 4.36vw, 66px);
  padding-bottom: clamp(64px, 6.87vw, 104px);
  margin-bottom: clamp(23px, 7.93vw, 120px);
`;

export const OurMissionText = styled.p`
  color: #fff;
  font-size: clamp(24px, 2.64vw, 40px);
  line-height: clamp(38px, 3.57vw, 54px);
  text-align: center;
  max-width: 658px;
`;

export const OurMissionTitle = styled.h2`
  color: #fff;
  font-size: clamp(24px, 2.64vw, 32px);
  line-height: clamp(28px, 3.57vw, 48px);
  text-align: center;
  margin-bottom: 12px;
  text-transform: uppercase;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 16px;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    margin-bottom: 24px;
  }
`;
