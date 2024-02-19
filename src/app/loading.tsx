'use client';

import Lottie from 'lottie-react';
import { Container, LottieWrapper } from './loading.style';

import type { FC } from 'react';

import loading from '../../public/lottie/loading.json';
const Loading: FC = () => (
  <Container>
    <LottieWrapper>
      <Lottie animationData={loading} />
    </LottieWrapper>
  </Container>
);

export default Loading;
