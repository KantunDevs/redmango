import styled from 'styled-components';

export const CtaButton = styled.button`
  font-size: clamp(15px, 1.05vw, 16px);
  line-height: clamp(22px, 1.58vw, 24px);
  text-align: center;
  background-color: #fff;
  padding: clamp(5px, 1.05vw, 16px) clamp(21px, 2.91vw, 44px);
  border: 3px solid #cb333b;
  border-radius: 30px;
  color: #cb333b;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 3.96vw, 60px);
  text-align: center;
  color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #cb333b;
  font-weight: 700;
  margin-bottom: clamp(24px, 5.42vw, 82px);
`;
