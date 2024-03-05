'use client';

import localFont from 'next/font/local';

import Footer from '@components/pages/SmoothieFactory/OrangeLeaf/common/Footer';
import Header from '@components/pages/SmoothieFactory/OrangeLeaf/common/Header';
import StyledComponentsRegistry from '@styles/registry';

import type { FC, ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import { StoreProvider } from 'src/context/StoreProvider';
import Script from 'next/script';

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
        <Script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSZ2RDB');

`}
        </Script>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NSZ2RDB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <StoreProvider>
            <StyledComponentsRegistry>
              <GlobalStyle />
              {/* <Header /> */}
              <main>{children}</main>
              {/* <Footer /> */}
            </StyledComponentsRegistry>
          </StoreProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
