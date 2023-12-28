import theme from '@styles/theme';
import styled from 'styled-components';
import { MaxWidthWrapper } from '@styles/common';
import css from 'styled-jsx/css';

import type { CSSProp } from 'styled-components';

export const Title = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 5.29vw, 80px);
  margin-bottom: clamp(47px, 8.99vw, 136px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  letter-spacing: 1.8px;
`;

export const Row = styled.div`
  display: flex;
  gap: clamp(24px, 6.34vw, 96px);
  &:not(:last-of-type) {
    margin-bottom: clamp(40px, 8.2vw, 124px);
  }
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: clamp(386px, 26.45vw, 400px);
  @media (max-width: ${theme.breakpoints.tablet}px) {
    gap: 10px;
  }
`;

export const TextAreaTitle = styled.h2<{ textAlignRight?: boolean }>`
  font-size: 24px;
  line-height: clamp(28px, 2.11vw, 32px);
  color: #cb333b;
  text-align: ${({ textAlignRight }) => (textAlignRight ? 'right' : 'left')};
  @media (max-width: ${theme.breakpoints.tablet}px) {
    text-align: left;
  }
`;

export const Paragraph = styled.p<{ textAlignRight?: boolean }>`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(26px, 1.85vw, 28px);
  color: #4e3629;
  text-align: ${({ textAlignRight }) => (textAlignRight ? 'right' : 'left')};
  @media (max-width: ${theme.breakpoints.tablet}px) {
    text-align: left;
  }
`;

export const ImageContainer = styled.div<{ order?: boolean }>`
  position: relative;
  border: 2px solid #cb333b;
  width: clamp(468px, 38.16vw, 577px);
  aspect-ratio: 1.9233333333/1;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    aspect-ratio: initial;
    width: 100%;
    height: 240px;
    order: ${({ order }) => (order ? 1 : 'initial')};
  }
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: clamp(59px, 17.06vw, 258px);
`;
