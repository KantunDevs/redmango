import styled from 'styled-components';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';
import { Title } from '../common';

export const FloatingBgImage = styled(FloatingImage)`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    .image-wrapper {
      width: 100vw;
      height: 523px;
    }
  }
`;

export const Glass = styled.div`
  position: absolute;
  top: clamp(87px, 9.98vw, 151px);
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: clamp(32px, 8.73vw, 104px) clamp(32px, 5.29vw, 80px);
  width: 100%;
  z-index: 1;
`;

export const GlassTitle = styled(Title)`
  text-transform: uppercase;
  margin-bottom: clamp(16px, 1.58vw, 24px);
  max-width: 658px;
`;

export const GlassText = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  color: #000;
  margin-bottom: clamp(16px, 1.58vw, 24px);
  max-width: 658px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const LottieWrapper = styled.div`
  max-height: 60px;
  transform: rotate(-5deg);
  position: absolute;
  bottom: 23%;
  left: 0;
  right: 0;
  width: 101%;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    bottom: 17%;
  }
`;
