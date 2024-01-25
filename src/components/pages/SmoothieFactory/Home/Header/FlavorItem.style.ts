import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import { motion } from 'framer-motion';

import styled, { keyframes } from 'styled-components';

const slide = keyframes`
 from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideMobile = keyframes`
 from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const AnimationWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: #cb333b;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  gap: 18px;
  animation: ${slide} 10s linear infinite;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: row;
    animation: ${slideMobile} 10s linear infinite;
  }
`;

export const FlavorItem = styled(motion.div)`
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 14px;
  position: relative;
  border-left: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    justify-content: flex-end;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    justify-content: flex-start;
    flex: 1;
    border-left: none;
    border-top: 2px solid #cb333b;
    &:last-of-type {
      border-right: 0;
    }
  }
`;

export const FlavorText = styled.span`
  color: #4e3629;
  writing-mode: tb-rl;
  font-weight: 600;
  font-family: 'futura-pt', sans-serif;
  transform: rotate(-180deg);
  font-size: clamp(35px, 2.31vw, 52px);
  font-weight: 600;
  line-height: clamp(45px, 3.96vw, 60px);
  text-transform: uppercase;
  white-space: nowrap;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    writing-mode: initial;
    transform: initial;
  }
`;

export const FlavorTextWhite = styled(FlavorText)`
  color: #fff;
`;
