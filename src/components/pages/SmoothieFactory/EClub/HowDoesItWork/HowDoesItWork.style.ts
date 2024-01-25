import styled from 'styled-components';

import theme from '@styles/theme';

import { Title } from '../common';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: clamp(196px, 20.7vw, 313px);
`;

export const HowDoesItWorkTitle = styled(Title)`
  text-align: center;
  margin-bottom: 46px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    display: none;
  }
`;

export const Step = styled.div<{ reverseOnMobile?: boolean }>`
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    gap: 10px;
    flex-direction: ${({ reverseOnMobile = false }): string => (reverseOnMobile ? 'column-reverse' : 'column')};
  }
`;

export const StepTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45 px, 3.96vw, 60px);
  font-weight: 600;
  color: #cb333b;
`;

export const StepSubtitle = styled.h2`
  font-size: clamp(24px, 2.11vw, 32px);
  line-height: clamp(28px, 3.17vw, 48px);
  color: #4e3629;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Steps = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    gap: 14px;
  }
`;

export const StepContent = styled.div<{ alignStart?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignStart = false }): string => (alignStart ? 'flex-start' : 'flex-end')};
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    align-items: center;
  }
`;
