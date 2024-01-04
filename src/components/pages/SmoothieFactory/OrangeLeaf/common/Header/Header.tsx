'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { useAnimate } from 'framer-motion';

import { MaxWidthWrapper } from '@styles/common';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  Container,
  Link,
  Section,
  Separator,
  OuterContainer,
  LinkSection,
  Button,
  MobileWrapper,
  HamburgerButton,
  HamburgerMenu,
  CloseButton,
  NativeLink,
  HomeLink,
  ButtonLink,
} from './Header.styles';

import type { FC } from 'react';

import FloatingImage from '../FloatingImage/FloatingImage';

const Header: FC = () => {
  const { width } = useWindowSize();
  const [ref, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isMobile = width <= theme.breakpoints.smallScreen;

  const onHamburgerClick = (): void => {
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
    console.log('open');
    void animate(ref.current, { opacity: 1, x: 0 }, { duration: 0.3 });
    setIsOpen(true);
  };

  const onClose = (href: string): void => {
    console.log('close');
    document.body.style.overflowY = 'initial';
    document.documentElement.style.overflowY = 'initial';
    void animate(ref.current, { opacity: 0, x: 20 });
    router.push(href);
    setIsOpen(false);
  };

  return isMobile ? (
    <>
      <HamburgerMenu ref={ref} data-is-open={isOpen} initial={{ opacity: 0, x: 20 }}>
        <CloseButton
          onClick={(): void => {
            document.body.style.overflowY = 'initial';
            document.documentElement.style.overflowY = 'initial';
            void animate(ref.current, { opacity: 0, x: 20 });
            setIsOpen(false);
          }}
        >
          <svg fill="none" height="32" viewBox="0 0 22 22" width="20">
            <path
              d="M20.375 4.4375c.8125-.75.8125-2.0625 0-2.8125-.75-.8125-2.0625-.8125-2.8125 0L11 8.1875 4.375 1.625c-.75-.8125-2.0625-.8125-2.8125 0-.8125.75-.8125 2.0625 0 2.8125L8.125 11l-6.5625 6.625c-.8125.75-.8125 2.0625 0 2.8125.75.8125 2.0625.8125 2.8125 0L11 13.875l6.5625 6.5625c.75.8125 2.0625.8125 2.8125 0 .8125-.75.8125-2.0625 0-2.8125L13.8125 11l6.5625-6.5625Z"
              fill="#421B00"
            />
          </svg>
        </CloseButton>
        <ButtonLink
          onClick={(): void => {
            onClose('/');
          }}
        >
          <FloatingImage alt="smoothie factory logo" height="58px" src="/images/logo.svg" width="120px" />
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/menu'}
          onClick={(): void => {
            onClose('/menu');
          }}
        >
          Menu
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/probiotics'}
          onClick={(): void => {
            onClose('/probiotics');
          }}
        >
          Probiotics
        </ButtonLink>
        <NativeLink href="/locations">Locations</NativeLink>
        <ButtonLink
          data-is-active={pathname === '/e-club'}
          onClick={(): void => {
            onClose('/e-club');
          }}
        >
          Club Mango
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/gift-cards'}
          onClick={(): void => {
            onClose('/gift-cards');
          }}
        >
          Gift cards
        </ButtonLink>
        <ButtonLink
          data-is-active={pathname === '/about-us'}
          onClick={(): void => {
            onClose('/about-us');
          }}
        >
          About us
        </ButtonLink>
        <Button href="https://order.smoothiefactory.com/" style={{ marginTop: '4px' }} target="_blank">
          Order now
        </Button>
      </HamburgerMenu>
      <MobileWrapper>
        <HomeLink href="/">
          <FloatingImage alt="smoothie factory logo" height="38px" src="/images/logo-mobile.svg" width="40px" />
        </HomeLink>
        <HamburgerButton onClick={onHamburgerClick}>
          <svg fill="none" height="18" viewBox="0 0 21 18">
            <path
              d="M0 1.5C0 .703125.65625 0 1.5 0h18c.7969 0 1.5.703125 1.5 1.5 0 .84375-.7031 1.5-1.5 1.5h-18C.65625 3 0 2.34375 0 1.5ZM0 9c0-.79688.65625-1.5 1.5-1.5h18c.7969 0 1.5.70312 1.5 1.5 0 .84375-.7031 1.5-1.5 1.5h-18C.65625 10.5 0 9.84375 0 9Zm19.5 9h-18C.65625 18 0 17.3438 0 16.5c0-.7969.65625-1.5 1.5-1.5h18c.7969 0 1.5.7031 1.5 1.5 0 .8438-.7031 1.5-1.5 1.5Z"
              fill="#474747"
            />
          </svg>
        </HamburgerButton>
      </MobileWrapper>
    </>
  ) : (
    <OuterContainer>
      <MaxWidthWrapper>
        <Container>
          <Section>
            <NextLink href="/">
              <FloatingImage alt="red mango logo" height="45px" src="/images/logo.svg" width="200px" />
            </NextLink>
            <Separator data-margin="true" />
            <NativeLink href="/locations">Locations</NativeLink>
          </Section>
          <LinkSection>
            <NextLink href="/menu">
              <Link data-is-active={pathname === '/menu'}>Menu</Link>
            </NextLink>
            <NextLink href="/probiotics">
              <Link data-is-active={pathname === '/probiotics'}>Probiotics</Link>
            </NextLink>
            <NextLink href="/e-club">
              <Link data-is-active={pathname === '/e-club'}>Club Mango</Link>
            </NextLink>
            <NextLink href="/gift-cards">
              <Link data-is-active={pathname === '/gift-cards'}>Gift cards</Link>
            </NextLink>
            <NextLink href="/about-us">
              <Link data-is-active={pathname === '/about-us'}>About us</Link>
            </NextLink>
          </LinkSection>
          <Section>
            <NextLink href="/franchising">
              <Link data-is-active={pathname === '/franchising'}>Franchising</Link>
            </NextLink>
            <Separator />
            <Button href="https://order.smoothiefactory.com/" target="_blank">
              Order now
            </Button>
          </Section>
        </Container>
      </MaxWidthWrapper>
    </OuterContainer>
  );
};

export default Header;
