import styled from 'styled-components';

import theme from '@styles/theme';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

export const Title = styled.h1`
  color: #ed6c32;
  font-size: clamp(35px, 3.96vw, 60px);
  line-height: clamp(40px, 4.49vw, 68px);
  max-width: 796px;
  margin-bottom: clamp(24px, 2.11vw, 32px);
`;

export const Wrapper = styled.div`
  margin-left: clamp(32px, 7.93vw, 120px);
  margin-bottom: clamp(24px, 5.95vw, 90px);
`;

export const Cards = styled.div`
  display: flex;
  width: clamp(1494px, 131.74vw, 1992px);
  gap: clamp(24px, 2.11vw, 32px);
  margin-bottom: clamp(76px, 15.6vw, 236px);
  position: relative;
  z-index: 2;
`;

export const Card = styled.div`
  flex: 0.33333;
  height: clamp(200px, 24.2vw, 366px);
  position: relative;
  border-radius: clamp(6px, 1.45vw, 22px);
  overflow: hidden;
`;

export const GiftCardArea = styled.div`
  width: 100%;
  min-height: clamp(609px, 46.95vw, 710px);
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: clamp(124px, 10.38vw, 157px);
  padding-bottom: clamp(124px, 7.07vw, 107px);
`;

export const GiftCard = styled.div`
  max-width: clamp(329px, 44.44vw, 672px);
  background: #fff;
  position: relative;
  border: 2px solid #cb333b;
  z-index: 1;
  padding: clamp(72px, 6.61vw, 100px) clamp(56px, 5.22vw, 79px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GiftCardText = styled.p`
  color: #4e3629;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(26px, 1.85vw, 28px);
  margin-bottom: 28px;
`;

export const StyledFloatingImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: translateY(106%);
  }
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
