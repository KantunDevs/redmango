import styled, { css } from 'styled-components';

import type { CSSProp } from 'styled-components';

export type ButtonContainerProps = {
  isFullWidth?: boolean;
  size?: 'm' | 's';
  variant?: 'inverted' | 'outlined-inverted' | 'outlined' | 'primary';
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  width: fit-content;

  ${({ isFullWidth = false }): CSSProp => {
    if (isFullWidth) {
      return css`
        width: 100%;
      `;
    }

    return css``;
  }}

  ${({ variant = 'primary' }): CSSProp => {
    if (variant === 'outlined') {
      return css`
        background: transparent;
        border-color: #d9d32f;
        color: #ff9828;
      `;
    }

    if (variant === 'outlined-inverted') {
      return css`
        background: transparent;
        border-color: #ff6034;
        color: #ffffff;
      `;
    }

    if (variant === 'inverted') {
      return css`
        background: #ffffff;
        border-color: #ffffff;
        color: #ff6034;
        box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);
      `;
    }

    return css`
      background: #23aa5d;
      color: #ffffff;
    `;
  }};

  ${({ size = 'm' }): CSSProp => {
    if (size === 's') {
      return css`
        padding: 16px 28px;
      `;
    }

    return css`
      padding: 20px 48px;
    `;
  }};
`;
