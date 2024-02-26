import styled from 'styled-components';

import { ButtonContainer } from '@components/pages/RedMango/Button/Button.styles';
import { ContentContainer } from '@components/ui/Card/Card.styles';
import theme from '@styles/theme';

export const BackgroundContainer = styled.div`
  background-image: url('/images/rm-form.png');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  padding: clamp(53px, 4.49vw, 68px) clamp(32px, 3.96vw, 60px) clamp(57px, 10.78vw, 163px) clamp(32px, 3.96vw, 60px);
  border-radius: 29px;
  box-shadow: 0px 5px 10px 0px rgba(66, 27, 0, 0.25);
`;

export const Container = styled.div`
  padding-top: 204px;
  padding-left: 172px;
  padding-right: 80px;
  margin-bottom: 80px;
  background: linear-gradient(to right, #cb333b 0%, #cb333b 50%, transparent 50%, transparent 100%);
  position: relative;
  padding-bottom: 80px;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    background: #cb333b;
    padding-right: 172px;
  }

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
    background: #cb333b;
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentText = styled.div`
  width: calc(50% - 124px);

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 100%;
    z-index: 3;
  }
`;

export const Title = styled.h2`
  font-size: 80px;
  line-height: 72px;
  margin-bottom: 52px;
  color: white;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
  z-index: 5;
  color: white;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const CtaText = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: white;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    margin-bottom: 32px;
    color: #4e3629;
  }
`;

export const CardContainer = styled.div`
  width: 570px;
  z-index: 2;

  ${ContentContainer} {
    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      border-radius: 29px;
    }
  }

  ${ButtonContainer} {
    @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.desktop}px) {
    width: 100%;
    margin-top: 60px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.p`
  font-family: 'Futura';
  font-size: 18px;
  line-height: 32px;
  :first-of-type {
    margin-top: 0;
  }
`;

export const InputField = styled.input`
  font-family: 'Futura';
  border-radius: 4px;
  padding: 10px 0 10px 25px;
  border: 1px solid #421b00;
  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Disclaimer = styled.div`
  text-align: center;
  font-size: small;

  padding: 48px 172px 80px;

  @media only screen and (max-width: ${theme.breakpoints.smallScreen}px) {
    padding: 150px 25px 80px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
