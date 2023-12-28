import styled, { css } from 'styled-components';
import type { CSSProp } from 'styled-components';
import theme from '@styles/theme';
import { MaxWidthWrapper } from '@styles/common';

export const ContentColumn = styled.div<{ variant: 1 | 2 | 3 }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: clamp(55px, 14.08vw, 213px) clamp(32px, 10.58vw, 160px) clamp(32px, 14.08vw, 213px)
    clamp(32px, 7.93vw, 120px);

  ${({ variant }): CSSProp => {
    if (variant === 1) {
      return css`
        order: 1;
      `;
    }
    if (variant === 2) {
      return css`
        border-left: 2px solid #cb333b;
        order: 2;
      `;
    }

    return css`
      border-right: 2px solid #cb333b;
      order: 2;
    `;
  }};

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #cb333b;
    order: 1;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #cb333b;
`;

export const Subtitle = styled.span`
  font-size: clamp(23px, 2.11vw, 32px);
  line-height: clamp(27px, 3.17vw, 48px);
  color: #cb333b;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: clamp(31px, 3.7vw, 56px);
  line-height: clamp(39px, 4.62vw, 70px);
  color: #421b00;
  max-width: 498px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  position: relative;
  border-top: 2px solid #cb333b;
`;

export const Text = styled.p`
  font-size: clamp(13px, 1.05vw, 16px);
  line-height: clamp(25px, 1.85vw, 28px);
  color: #000000;
  max-width: 498px;
  margin-bottom: clamp(16px, 2.11vw, 32px);
`;

export const RedColumn = styled.div<{ variant: 1 | 2 | 3 }>`
  width: clamp(120px, 13.22vw, 200px);
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background: #cb333b;
  position: relative;

  ${({ variant }): CSSProp => {
    if (variant === 1) {
      return css`
        order: 2;
      `;
    }
    if (variant === 2) {
      return css`
        order: 3;
      `;
    }

    return css`
      order: 1;
    `;
  }};

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    height: 77px;
    width: 100%;
    order: 2;
  }
`;

export const ImageColumn = styled.div<{ variant: 1 | 2 | 3 }>`
  width: 35.38%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }): CSSProp => {
    if (variant === 1) {
      return css`
        order: 3;
      `;
    }
    if (variant === 2) {
      return css`
        order: 1;
      `;
    }

    return css`
      order: 3;
    `;
  }};

  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    width: 100%;
    height: fit-content;
    order: 3;
  }
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  padding-inline: 0;
  display: flex;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: clamp(8px, 0.92vw, 14px);
  flex-wrap: wrap;
`;
