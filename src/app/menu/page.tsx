import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import OurStars from '@components/pages/SmoothieFactory/Home/OurStars/OurStars';
import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';
import MenuItems from '@components/pages/SmoothieFactory/Menu/MenuItem/MenuItem';
import { createClient } from 'prismicio';
import { HomepageOurStarsSlice } from 'prismicio-types';

import type { FC } from 'react';

export const metadata = {
  title: 'Menu | Smoothie Factory®',
};

/* @ts-expect-error Server Component */
const Menu: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('menu');

  const ourStarsSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_our_stars') as
    | HomepageOurStarsSlice
    | undefined;

  return (
    <div style={{ marginTop: 'clamp(32px,7.67vw, 116px)' }}>
      {ourStarsSlice ? <OurStars slice={ourStarsSlice} /> : null}
      <WhatIsNew />
      <Gallery mb="clamp(175px, 21.03vw, 318px)" />
      <MenuItems />
    </div>
  );
};

export default Menu;
