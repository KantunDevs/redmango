import NextLink from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OuterContainer = styled.nav`
  z-index: 1000;
  display: flex;
  position: sticky;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 2px solid #cb333b;
`;

export const Container = styled.div`
  padding: 17px 16px;
  border-radius: 0px 0px 16px 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkSection = styled(Section)`
  gap: 55px;
  @media (max-width: 1140px) {
    flex: 1;
    justify-content: space-evenly;
    gap: 0;
  }
`;

export const Link = styled.span`
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  color: #474747;
  font-weight: 600;
  font-family: 'futura-pt', sans-serif;
  text-transform: uppercase;
  &[data-is-active='true'] {
    font-weight: 700;
  }
`;

export const ButtonLink = styled.button`
  text-decoration: none;
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-weight: 600;
  font-family: 'futura-pt', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #474747;
  text-transform: uppercase;
  &[data-is-active='true'] {
    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      background: #474747;
      width: 100%;
      height: 2px;
      border-radius: 2px;
    }
  }
`;

export const NativeLink = styled.a`
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  color: #474747;
  font-weight: 600;
  font-family: 'futura-pt', sans-serif;
  text-transform: uppercase;
`;

export const Separator = styled.div`
  width: 2px;
  height: 24px;
  background: #cb333b;
  border-radius: 1px;
  margin: 0 24px;
  &[data-margin='true'] {
    margin: 0 32px;
  }
`;

export const Button = styled(motion.a)`
  font-size: 16px;
  line-height: 20px;
  border: none;
  color: #cb333b;
  cursor: pointer;
  font-weight: 600;
  font-family: 'futura-pt', sans-serif;
  text-transform: uppercase;
`;

export const MobileWrapper = styled.nav`
  width: 100%;
  padding: 2px 32px;
  display: flex;
  position: sticky;
  justify-content: space-between;
  z-index: 1000;
  align-items: center;
  background: #ffffff;
  top: 0;
  border-bottom: 2px solid #cb333b;
`;

export const HomeLink = styled(NextLink)`
  padding: 5px;
  display: inline-flex;
  margin-left: -5px;
`;

export const HamburgerButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  background: transparent;
  padding: 13px 12px;
  cursor: pointer;
  margin-right: -12px;
`;

export const HamburgerMenu = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  z-index: 2000;
  width: 100%;
  padding: 40px 23px 60px 32px;
  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #fff;
  &[data-is-open='false'] {
    pointer-events: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 13px;
  right: 25px;
  padding: 6px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
