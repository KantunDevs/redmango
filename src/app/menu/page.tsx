import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import OurStars from '@components/pages/SmoothieFactory/Home/OurStars/OurStars';
import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';
import MenuItems from '@components/pages/SmoothieFactory/Menu/MenuItem/MenuItem';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { GallerySlice, HomepageOurStarsSlice, MenuItemsSlice, WhatsNewSlice } from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('menu');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

/* @ts-expect-error Server Component */
const Menu: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('menu');

  const ourStarsSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_our_stars') as
    | HomepageOurStarsSlice
    | undefined;

  const whatsNewSlice = page.data.slices.find((slice) => slice.slice_type === 'whats_new') as WhatsNewSlice | undefined;

  const gallerySlice = page.data.slices.find((slice) => slice.slice_type === 'gallery') as GallerySlice | undefined;

  const menuItemsSlice = page.data.slices.find((slice) => slice.slice_type === 'menu_items') as
    | MenuItemsSlice
    | undefined;

  return (
    <div style={{ marginTop: 'clamp(32px,7.67vw, 116px)' }}>
      {ourStarsSlice ? <OurStars slice={ourStarsSlice} /> : null}
      {whatsNewSlice ? <WhatIsNew slice={whatsNewSlice} /> : null}
      {gallerySlice ? <Gallery mb="clamp(175px, 21.03vw, 318px)" slice={gallerySlice} /> : null}
      {menuItemsSlice ? <MenuItems slice={menuItemsSlice} /> : null}
    </div>
  );
};

export default Menu;
