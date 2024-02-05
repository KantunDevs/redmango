'use client';

import localFont from 'next/font/local';

import Footer from '@components/pages/SmoothieFactory/OrangeLeaf/common/Footer';
import Header from '@components/pages/SmoothieFactory/OrangeLeaf/common/Header';
import StyledComponentsRegistry from '@styles/registry';

import type { FC, ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import { StoreProvider } from 'src/context/StoreProvider';

const variableBlack = localFont({
  src: [
    {
      path: '../../public/fonts/VariableBlack.ttf',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--variable-black',
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/cst1rrm.css" />
      </head>
      <html className={`${variableBlack.variable}`} lang="en">
        <body>
          <StoreProvider>
            <StyledComponentsRegistry>
              <GlobalStyle />
              <Header />
              <main>{children}</main>
              <Footer />
            </StyledComponentsRegistry>
          </StoreProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
