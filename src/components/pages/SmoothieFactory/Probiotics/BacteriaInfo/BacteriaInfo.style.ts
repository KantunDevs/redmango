import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import styled from 'styled-components';

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 0;
  border-inline: 2px solid #cb333b;
  padding: clamp(30px, 4.76vw, 72px) 32px clamp(57px, 10.84vw, 164px) 32px;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: clamp(28px, 2.11vw, 32px);
  color: #cb333b;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
  max-width: 854px;
`;
