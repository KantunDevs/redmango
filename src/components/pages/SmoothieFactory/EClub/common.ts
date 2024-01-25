import styled from 'styled-components';

export const Title = styled.h1<{ color?: string; mb?: string }>`
  color: ${({ color }): string => color ?? '#CB333B'};
  margin-bottom: ${({ mb }): number | string => mb ?? 0};
  font-size: clamp(35px, 3.43vw, 52px);
  line-height: clamp(45px, 3.96vw, 60px);
  text-transform: initial;
  font-weight: 600;
`;
