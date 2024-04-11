import styled from 'styled-components';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';

export const Header = styled.div`
  height: 222px;
  position: relative;
  border-bottom: 2px solid #cb333b;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-inline: 2px solid #cb333b;
`;

export const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex: 1;
  padding-inline: 0;
`;

export const ColumnContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 58.53%) 1fr;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  border-right: 2px solid #cb333b;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: clamp(32px, 3.3vw, 50px);
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    border-right: none;
    border-bottom: 2px solid #cb333b;
  }
`;

export const Title = styled.h1`
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 3.96vw, 60px);
  margin-bottom: 20px;
  color: #cb333b;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: clamp(21px, 1.85vw, 28px);
  max-width: 658px;
`;

export const RightColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px;
`;
