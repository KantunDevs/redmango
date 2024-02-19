import styled from 'styled-components';

import theme from '@styles/theme';

export const BgImage = styled.div`
  height: clamp(622px, 46.95vw, 710px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: clamp(191px, 16vw, 242px);
`;

export const Card = styled.div`
  padding-inline: clamp(32px, 5.22vw, 79px);
  padding-block: 100px 79px;
  background: #fff;
  border: 2px solid #cb333b;
  z-index: 3;
  transform: translateY(clamp(40px, 7.07vw, 107px));
  max-width: 672px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-inline: 32px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-block: 40px;
  }
`;

export const Circle = styled.div`
  background-color: #fff;
  padding: clamp(36px, 2.64vw, 40px);
  top: 0;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #cb333b;
  transform: translateY(calc(-1 * clamp(71px, 7.07vw, 107px)));
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    display: none;
  }
`;

export const CardTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 3.96vw, 60px);
  margin-bottom: clamp(16px, 1.85vw, 28px);
  color: #cb333b;
  text-align: center;
  text-transform: uppercase;
`;

export const CardText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  line-height: clamp(26px, 1.85vw, 28px);
  color: #4e3629;
  margin-bottom: clamp(16px, 1.85vw, 28px);
  text-align: center;
`;

export const PatterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
`;
