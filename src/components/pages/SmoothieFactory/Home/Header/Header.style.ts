import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import { motion } from 'framer-motion';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #cb333b;
`;

export const Content = styled.div`
  width: 100%;
  min-height: 621px;
  padding: 151px 32px 32px clamp(32px, 5.22vw, 79px);
  max-width: clamp(511px, 49.86vw, 754px);
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    min-height: 650px;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    min-height: clamp(389px, 63.47vw, 650px);
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 3.96vw, 60px);
  margin-bottom: clamp(16px, 1.58vw, 24px);
  color: #cb333b;
  max-width: 459px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  line-height: clamp(26px, 1.85vw, 28px);
  color: #4e3629;
  max-width: 444px;
  margin-bottom: clamp(16px, 2.64vw, 40px);
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  padding-inline: 0;
  border-right: 2px solid #cb333b;
  border-left: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Flavors = styled.div`
  flex: 1;
  display: flex;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const BG = styled(motion.div)`
  width: 100%;
  position: relative;
  margin-bottom: clamp(50px, 5.42vw, 82px);
  height: 232px;
  border-bottom: 2px solid #cb333b;
  border-inline: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: 196px;
  }
`;

export const WhiteBG = styled.div`
  width: 376px;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 1;
  left: 0;
  background-color: #fff;
  border-right: 2px solid #cb333b;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`;
