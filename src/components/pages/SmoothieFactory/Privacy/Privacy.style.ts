import styled from 'styled-components';
import theme from '@styles/theme';

const minBannerHeight = '188px';
const maxBannerHeight = '339px';
const maxWidth = '1153px';

export const Container = styled.div`
  position: relative;
  border-inline: 2px solid #cb333b;
  border-bottom: 2px solid #cb333b;
  min-height: clamp(${minBannerHeight}, 30.62vw, ${maxBannerHeight});
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;
    min-height: fit-content;
  }
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  max-width: ${maxWidth};
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    padding-inline: clamp(32px, 7.67vw, 116px);
  }
`;

export const ImageContainer = styled.div`
  width: 39.81%;
  height: 100%;
  max-width: 602px;
  position: absolute;
  right: 0;
  top: 0;
  @media only screen and (max-width: ${theme.breakpoints.tablet}px) {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 75px;
  }
`;

export const Paper = styled.section`
  width: 100%;
  margin-inline: auto;
  max-width: ${maxWidth};
  position: relative;
  padding-top: clamp(28px, 4.76vw, 72px);
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    padding-inline: clamp(32px, 7.67vw, 116px);
  }
`;

export const PageTitle = styled.h1`
  font-size: clamp(36px, 5.29vw, 80px);
  line-height: clamp(40px, 3.96vw, 60px);
  margin-bottom: 25px;
  margin-top: 48px;
  color: transparent;
  -webkit-text-stroke: 2px #cb333b;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 24px;
`;
