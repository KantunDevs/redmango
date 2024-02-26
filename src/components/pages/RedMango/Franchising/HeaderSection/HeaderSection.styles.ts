import styled from 'styled-components';

import { ButtonContainer } from '@components/pages/RedMango/Button/Button.styles';
import MobileContainer from '@components/ui/MobileContainer';
import theme from '@styles/theme';
import { MaxWidthWrapper } from '@styles/common';

export const BottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  position: relative;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    height: 300px;
  }

  ${MobileContainer} {
    @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
      position: relative;
      padding-bottom: 80px;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: unset;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BgWrapper = styled.div`
  border-bottom-right-radius: 300px;
  background-color: #cb333b;
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  padding-block: clamp(48px, 13.22vw, 200px);
  gap: 35px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
    gap: 48px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  max-width: 459px;
`;

export const MainText = styled.h2`
  color: white;
  font-size: 52px;
  line-height: 63px;
  margin-bottom: 20px;

  span {
    color: white;
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 20px;

    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      color: #ff6034;
    }
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: 32px;
`;

export const CardsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  transform: translateY(-50%);
  gap: 48px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    transform: initial;
    position: initial;
    flex-direction: column;
    gap: 0;
  }
`;

export const CardText = styled.h2`
  font-size: clamp(32px, 2.64vw, 40px);
  line-height: clamp(42px, 3.57vw, 54px);
  z-index: 2;
  text-align: center;
  color: #cb333b;
  position: absolute;
  margin: 50px;
`;

export const CardContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bg = styled.div`
  height: 338px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: auto;
  }
`;
