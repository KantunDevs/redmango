import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import OurStars from '@components/pages/SmoothieFactory/Home/OurStars/OurStars';
import MenuItems from '@components/pages/SmoothieFactory/Menu/MenuItem/MenuItem';

import type { FC } from 'react';

export const metadata = {
  title: 'Menu | Smoothie Factory®',
};

const Menu: FC = () => (
  <>
    <OurStars />
    <Gallery mb="clamp(175px, 21.03vw, 318px)" />
    <MenuItems />
  </>
);

export default Menu;
