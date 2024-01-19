import styled from 'styled-components';

export const Title = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 5.29vw, 80px);
  margin-bottom: clamp(47px, 8.99vw, 136px);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  letter-spacing: 1.8px;
  font-weight: 700;
`;

export const Bg = styled.div`
  display: flex;
  padding: clamp(28px, 8.73vw, 132px) 32px;
  background-color: #cb333b;
  align-items: center;
  position: relative;
  justify-content: center;
`;
