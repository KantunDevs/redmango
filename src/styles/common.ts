import styled from 'styled-components';

import { maxDesktopContentWidth } from '@constants/sizes';

import theme from './theme';

export const MaxWidthWrapper = styled.div`
  max-width: ${maxDesktopContentWidth}px;
  padding-inline: 60px;
  margin-inline: auto;
  width: 100%;
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    padding-inline: 32px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: 3px solid #cb333b;
  padding: 13px 37px;
  border-radius: 30px;
  color: #cb333b;
  font-weight: 600;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(17px, 1.32vw, 20px);
  text-transform: uppercase;
  background: transparent;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    padding: 5px 21px;
  }
`;
