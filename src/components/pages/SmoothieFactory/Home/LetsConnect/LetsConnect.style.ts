import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import theme from '@styles/theme';

const translateinfinite = keyframes`
	100% { transform:translateX(-3000px)  }
`;

export const BgWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: stretch;
  margin-bottom: clamp(32px, 3.76vw, 57px);
`;

export const Glass = styled.div`
  margin-top: clamp(64px, 15.34vw, 232px);
  padding: 32px 0 32px 32px;
  z-index: 1;
  display: flex;
  flex: 1;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ColumnsWrapper = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.333333%;
  gap: 32px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 24px;
  & > * {
    scroll-snap-align: start;
  }
`;

export const CarouselWrapper = styled.div`
  overflow-x: hidden;
`;

export const Carousel = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.333333%;
  gap: 32px;
  animation: ${translateinfinite} 50s linear infinite;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    grid-auto-columns: 50%;
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    grid-auto-columns: 100%;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: auto;
    grid-auto-flow: row;
  }
`;

export const Card = styled.div`
  border: 2px solid #cb333b;
  padding: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.18);
`;

export const CardContent = styled.div`
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;
`;

export const Hashtag = styled.p`
  color: #cb333b;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
`;

export const Icon = styled.div`
  padding: 12px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  margin-top: -12px;
  align-items: center;
  margin-bottom: 8px;
  gap: 12px;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: clamp(295.94px, 20.56vw, 311px);
`;

export const CardTitle = styled.span`
  color: #cb333b;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const CardText = styled.span`
  color: #474747;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
`;

export const FollowUs = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: clamp(45px, 7.53vw, 114px);
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FollowUsTitle = styled.h2`
  color: #421b00;
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(28px, 3.17vw, 48px);
  text-transform: uppercase;
  margin-bottom: clamp(24px, 9.39vw, 142px);
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  gap: clamp(16px, 1.91vw, 29px);
  align-items: center;
  justify-content: center;
`;
