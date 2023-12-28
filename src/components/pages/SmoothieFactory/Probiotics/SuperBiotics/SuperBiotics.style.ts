import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import styled from 'styled-components';

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(34px, 11.3vw, 171px) clamp(32px, 7.93vw, 120px) clamp(29px, 18.05vw, 273px) clamp(32px, 5.22vw, 79px);
  border-right: 2px solid #cb333b;
  width: 58.53%;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    border-right: none;
    width: 100%;
    border-bottom: 2px solid #cb333b;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(30px, 8.79vw, 133px) clamp(32px, 7.93vw, 120px) clamp(53px, 11.3vw, 171px) clamp(32px, 5.68vw, 86px);
  flex: 1;
  position: relative;
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  padding-inline: 0;
  border-inline: 2px solid #cb333b;
  border-bottom: 2px solid #cb333b;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const LeftColumnTitle = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 5.29vw, 80px);
  margin-bottom: clamp(16px, 1.71vw, 26px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  letter-spacing: 1.8px;
`;
