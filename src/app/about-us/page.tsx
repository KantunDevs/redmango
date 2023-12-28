import AboutUsForm from '@components/pages/SmoothieFactory/AboutUs/Form/AboutUsForm';
import Header from '@components/pages/SmoothieFactory/AboutUs/Header/Header';
import HowItStarted from '@components/pages/SmoothieFactory/AboutUs/HowItStarted/HowItStarted';

import type { FC } from 'react';

export const metadata = {
  title: 'About | Smoothie Factory®',
};

const AboutUs: FC = () => (
  <>
    <Header />
    <HowItStarted />
    <AboutUsForm />
  </>
);

export default AboutUs;
