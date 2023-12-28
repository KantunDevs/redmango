import styled from 'styled-components';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
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
  padding: clamp(40px, 6.61vw, 100px) clamp(32px, 5.22vw, 79px);
  background: #fff;
  border: 2px solid #cb333b;
  z-index: 1;
  transform: translateY(clamp(40px, 7.07vw, 107px));
  max-width: 672px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
