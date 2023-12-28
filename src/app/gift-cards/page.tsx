import ChooseDesigns from '@components/pages/SmoothieFactory/GiftCards/ChooseDesigns/ChooseDesigns';
import Header from '@components/pages/SmoothieFactory/GiftCards/Header/Header';

import type { FC } from 'react';

export const metadata = {
  title: 'E-Club Signup | Smoothie Factory®',
};

const GiftCards: FC = () => (
  <>
    <Header />
    <ChooseDesigns />
  </>
);

export default GiftCards;
