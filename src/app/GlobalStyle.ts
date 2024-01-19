'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html{
    width: 100%;
    display: block;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    display: inline-flex;
    text-decoration: none;
    color: #ff6034;
  }

  body {
    color: #474747;
    margin: 0;
    width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    position: relative;
    font-family: var(--variable-black);
  }

  main{
    flex: 1;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-weight: 600;
    font-family: "futura-pt", sans-serif;
  }

  p, span, input, a, label, textarea, select,li {
    font-weight: 400;
    font-family: var(--variable-black);
  }

  ul{
    margin-bottom: 24px;
  }
`;

export default GlobalStyle;
