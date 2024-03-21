import styled from 'styled-components';

import theme from '@styles/theme';

export const Title = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 3.96vw, 60px);
  color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #cb333b;
  margin-bottom: clamp(16px, 5.15vw, 78px);
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: clamp(18px, 1.58vw, 24px);
  line-height: clamp(24px, 3.17vw, 48px);
  letter-spacing: clamp(3.6px, 0.38vw, 4.8px);
  color: #cb333b;
  font-weight: 400;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const ColumnTitle = styled.h1`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(28px, 3.17vw, 48px);
  color: #421b00;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const ColumnText = styled.p`
  font-size: clamp(14px, 0.99vw, 15px);
  line-height: clamp(26px, 1.85vw, 28px);
  color: #000000;
  font-weight: 400;
  margin-bottom: clamp(24px, 2.11vw, 32px);
`;

export const FrozenYogurtContent = styled.div`
  border: 2px solid #cb333b;
  display: flex;
  margin-bottom: clamp(183px, 21.36vw, 323px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex: 0.5;
  align-items: flex-start;
  flex-direction: column;
  padding: clamp(40px, 5.29vw, 80px) clamp(32px, 3.3vw, 50px);
  border-right: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    border-right: 0;
    border-bottom: 2px solid #cb333b;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  position: relative;
  min-height: 399px;
`;

export const Button = styled.button`
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
