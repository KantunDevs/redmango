import theme from '@styles/theme';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: clamp(133px, 12.56vw, 190px);
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 5.29vw, 80px);
  margin-bottom: clamp(16px, 1.78vw, 27px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  letter-spacing: 1.8px;
  margin-bottom: 87px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 106px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 0.5;
  border: 2px solid #cb333b;
  padding: 111px 50px;
  position: relative;
  &:first-of-type {
    z-index: 1;
    border-right: none;
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      border-right: 2px solid #cb333b;
    }
  }
  &:nth-of-type(2) {
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      display: none;
    }
  }
`;

export const Numbers = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  left: clamp(0px, 3.3vw, 50px);
  top: 0;
  transform: translateY(-50%);
`;

export const OverflowContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

export const Number = styled.span`
  border: 2px solid #cb333b;
  width: clamp(56px, 7.47vw, 113px);
  height: clamp(56px, 7.47vw, 113px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: clamp(33px, 4.43vw, 67px);
  line-height: clamp(25px, 3.3vw, 50px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  font-weight: 700;
  font-family: 'futura-pt', sans-serif;
`;
