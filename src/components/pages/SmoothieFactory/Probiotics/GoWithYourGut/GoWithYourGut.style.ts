import theme from '@styles/theme';
import styled from 'styled-components';

export const Bg = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: clamp(28px, 11.9vw, 180px) 32px clamp(28px, 11.9vw, 180px) clamp(32px, 11.44vw, 173px);
  background: #cb333b;
`;

export const MainTitle = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 6.74vw, 102px);
  margin-bottom: clamp(26px, 2.24vw, 34px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #ffffff;
  letter-spacing: 1.8px;
  font-weight: 700;
`;

export const Disclaimer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: clamp(37px, 4.56vw, 69px) 32px clamp(33px, 3.83vw, 58px) clamp(32px, 10.38vw, 157px);
  background: #fff;
`;
