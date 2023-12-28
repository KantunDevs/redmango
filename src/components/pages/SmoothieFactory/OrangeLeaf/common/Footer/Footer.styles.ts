import NextLink from 'next/link';
import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.div`
  padding-block: clamp(32px, 3.04vw, 46px);
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: space-around;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    gap: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  order: 1;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    margin-bottom: 24px;
  }
`;

export const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
`;

export const Link = styled(NextLink)`
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
`;

export const Separator = styled.div`
  width: 1px;
  height: 12px;
  background: #fff;
  border-radius: 1px;
  margin: 0 8px;
`;

export const CopyrightSection = styled.div`
  display: flex;
  order: 2;
  flex-direction: row;
  align-items: center;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    order: 3;
  }
`;

export const TermsAndConditions = styled.div`
  display: flex;
  order: 3;
  flex-direction: row;
  align-items: center;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    order: 2;
    margin-bottom: 24px;
  }
`;
export const Disclaimer = styled.div`
  gap: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    gap: 12px;
  }
`;

export const Copyright = styled.span`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  @media (max-width: calc(${theme.breakpoints.tablet}px)) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Trademark = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #fff;
`;

export const OuterWrapper = styled.footer`
  width: 100%;
  z-index: 1000;
  background: #cb333b;
`;
