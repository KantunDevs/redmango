import theme from '@styles/theme';

import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  width: 553px;
  height: 100%;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(232px, 15.34vw, 306px);
`;

export const BackImage = styled.div`
  position: absolute;
  right: 17px;
  top: 110px;
  background: #fff;
  width: 40px;
  height: 40px;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageSvg = styled.svg`
  position: absolute;
  bottom: 0;
  width: 72px;
  height: 72px;
  z-index: 1;
  transform: translateY(50%);
  left: 60px;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    left: 115px;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    width: 56px;
    height: 56px;
    left: 60px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 55px 60px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  flex: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 32px;
`;

export const LocationTitle = styled.h1`
  font-size: clamp(21px, 1.85vw, 28px);
  line-height: clamp(28px, 2.64vw, 40px);
  margin-bottom: 8px;
`;

export const LocationAddress = styled.span`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  margin-bottom: 16px;
`;

export const WorkingHoursWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 8px 24px;
  border-radius: 4px;
  background: #23aa5d;
  border: none;
  color: #ffffff;
  cursor: pointer;
  align-items: flex-start;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    padding: 8px 12px;
    font-size: 15px;
    line-height: 22px;
  }
`;

export const ButtonOutlined = styled.button`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 6px 22px;
  border-radius: 4px;
  background: #ffffff;
  border: 2px solid #f69f24;
  color: #f69f24;
  cursor: pointer;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
`;

export const InfoTitle = styled.span`
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 4px;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InfoContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const SocialIconSvg = styled.svg`
  width: 32px;
  height: 32px;
`;

export const BackLink = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
`;
