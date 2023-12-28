import styled from 'styled-components';

import theme from '@styles/theme';

import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

export const FloatingGummyWorms = styled(FloatingImage)`
  @media (max-width: calc(${theme.breakpoints.smallScreen}px)) {
    transform: translate(37%, 0);
  }
`;

export const Form = styled.form`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 28px;
  row-gap: 24px;
  grid-auto-rows: max-content;
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    column-gap: 24px;
    row-gap: 24px;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const FormTitle = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 4.76vw, 72px);
  margin-bottom: 24px;
  color: #23aa5d;
`;

export const FormBg = styled.div`
  position: relative;
  padding-top: clamp(191px, 13.42vw, 203px);
  padding-bottom: clamp(153px, 10.64vw, 161px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -70px;

  @media (max-width: ${theme.breakpoints.mobile}px) {
    padding-bottom: 306px;
  }
`;

export const Paper = styled.div`
  background: #ffffff;
  width: 100%;
  position: relative;
  max-width: clamp(960px, 76.25vw, 1153px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(66, 27, 0, 0.25);
  border-radius: 29px;
  padding: clamp(30px, 7.4vw, 112px) clamp(32px, 3.7vw, 56px) clamp(72px, 6.21vw, 94px) clamp(32px, 3.7vw, 56px);
  @media (max-width: ${theme.breakpoints.smallScreen}px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: ${theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div<{ stretch?: boolean }>`
  display: flex;
  flex-direction: column;
  grid-column: ${({ stretch }): string => (stretch ? '1/-1' : 'initial')};
  @media (max-width: ${theme.breakpoints.mobile}px) {
    max-width: initial;
  }
`;

export const TextAreaInput = styled.textarea`
  border: 1px solid #421b00;
  border-radius: 4px;
  padding: 9px 24px 5px 24px;
  outline: 0;
  font-size: 18px;
  line-height: 32px;
  width: 100%;
  min-height: 82px;
  color: #421b00;
  &:placeholder {
    color: #421b00;
    opacity: 0.5;
  }
  &[data-has-error='true'] {
    border: 1px solid #ff0000;
  }
`;

export const FloatingGummyWormsImage = styled(FloatingImage)`
  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #ff0000;
`;

export const Polygon = styled.div`
  background: #fff;
  clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);
  height: clamp(228px, 19.24vw, 291px);
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(22px, 1.58vw, 24px);
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  z-index: 1;
  transform: translateY(-50%);
`;
