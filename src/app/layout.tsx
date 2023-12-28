'use client';

import localFont from 'next/font/local';
import { useSelectedLayoutSegments } from 'next/navigation';

import Footer from '@components/pages/SmoothieFactory/OrangeLeaf/common/Footer';
import Header from '@components/pages/SmoothieFactory/OrangeLeaf/common/Header';
import StyledComponentsRegistry from '@styles/registry';

import type { FC, ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import { StoreProvider } from 'src/context/StoreProvider';

const nexa = localFont({
  src: [
    {
      path: '../../public/fonts/Nexa-Book.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/Nexa-Bold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/fonts/NexaBlack.otf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--nexa',
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const segments = useSelectedLayoutSegments();

  const content =
    segments[segments.length - 1] === 'franchising' ? (
      children
    ) : (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );

  return (
    <html className={nexa.variable} lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {content}
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
