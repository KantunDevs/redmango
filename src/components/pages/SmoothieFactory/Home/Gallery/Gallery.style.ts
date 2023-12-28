import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { motion } from 'framer-motion';
import { MaxWidthWrapper } from '@styles/common';

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 0;
`;

export const BorderContainer = styled.div<{ mb: string }>`
  border-block: 2px solid #cb333b;
  margin-bottom: ${({ mb }) => mb};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 0.5;
  min-height: 516px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex: 1;
    min-height: 398px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 0.5;
  min-height: 516px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex: 1;
    min-height: auto;
    flex-direction: column-reverse;
  }
`;

export const LemonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #cb333b;
  padding: 0 16px;
  width: 100%;
  max-width: 31.56%;
  align-items: center;
`;

export const GalleryImage = styled.div`
  flex: 1;
  position: relative;
  border-right: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    border-right: none;
    border-bottom: 2px solid #cb333b;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  border-inline: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 50px;
  align-items: flex-start;
  border-right: 2px solid #cb333b;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    border-right: none;
  }
`;

export const Subtitle = styled.h2`
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  line-height: clamp(26px, 1.85vw, 28px);
  color: #cb333b;
  margin-bottom: 16px;
`;

export const GalleryTitle = styled.h1`
  font-size: clamp(24px, 2.11vw, 32px);
  font-weight: 500;
  line-height: clamp(28px, 3.17vw, 48px);
  color: #cb333b;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const GalleryText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  line-height: clamp(26px, 1.85vw, 28px);
  color: #4e3629;
  margin-bottom: 16px;
`;

export const Indicators = styled.div`
  padding: 30px;
  display: flex;
  gap: 11px;
  width: 100%;
  max-width: 31.56%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    border-bottom: 2px solid #cb333b;
    max-width: 100%;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  white-space: nowrap;
  padding: 8px clamp(24px, 2.11vw, 32px);
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 600;
  line-height: clamp(18px, 1.32vw, 20px);
  text-transform: uppercase;
  background: #cb333b;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(113, 49, 14, 0.3);
  cursor: pointer;
`;

export const Indicator = styled.button<{ active: boolean }>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: ${({ active }) => (active ? '2px solid transparent' : '2px solid #CB333B')};
  background: ${({ active }) => (active ? '#CB333B' : 'transparent')};
`;
