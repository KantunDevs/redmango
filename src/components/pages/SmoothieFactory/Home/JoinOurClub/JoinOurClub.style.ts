import styled from 'styled-components';

import theme from '@styles/theme';

export const Background = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftSection = styled.div`
  flex: 0 0 54.56%;
  overflow: hidden;
  display: flex;
  position: relative;
  background: #cb333b;
  justify-content: flex-end;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(128px, 9.98vw, 151px) clamp(32px, 15.6vw, 236px) clamp(72px, 9.98vw, 151px) clamp(32px, 12.3vw, 186px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex: 1;
    padding-inline: 32px;
    justify-content: flex-start;
  }
`;

export const LeftSectionTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 3.96vw, 60px);
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
`;

export const RightSectionTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 3.96vw, 60px);
  font-weight: 600;
  color: #cb333b;
  text-transform: uppercase;
`;

export const LeftSectionText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(26px, 1.85vw, 28px);
  font-weight: 400;
  color: #fff;
`;

export const RightSection = styled.div`
  flex: 0 0 45.37%;
  background: #fff;
  border: 2px solid #cb333b;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(48px, 4.29vw, 65px) clamp(32px, 11.37vw, 172px) 60px clamp(32px, 3.96vw, 60px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding-inline: 32px;
  }
`;

export const RightSectionText = styled.p`
  font-weight: 400;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(26px, 1.85vw, 28px);
  color: #cb333b;
`;

export const ButtonWhite = styled.button`
  padding: 5px 26px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-transform: uppercase;
  background: #ffffff;
  color: #cb333b;
  border: none;
  border-radius: 35px;
  box-shadow: 0px 0px 10px 0px rgba(113, 49, 14, 0.3);
  cursor: pointer;
`;

export const ButtonRed = styled.button`
  padding: 5px 26px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-transform: uppercase;
  background: #cb333b;
  color: #fff;
  border: none;
  border-radius: 35px;
  box-shadow: 0px 0px 10px 0px rgba(113, 49, 14, 0.3);
  cursor: pointer;
`;
